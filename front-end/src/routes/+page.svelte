<script lang="ts">
	import { Map, GeolocateControl } from 'mapbox-gl';

	// import "../node_modules/mapbox-gl/dist/mapbox-gl.css"
	import { onMount, onDestroy } from 'svelte';
	import { fly } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { quintOut } from 'svelte/easing';
	import { afterNavigate } from '$app/navigation';
	import mapboxgl from 'mapbox-gl';

	let map: any;
	let mapContainer: any;
	let lng: any, lat: any, zoom: any;
	const accessToken =
		'pk.eyJ1IjoiZXVnZW5lMDYyOCIsImEiOiJjbG5rcDR5NDIxcnpuMmtta2dwZTlxNXR0In0.gSkwpX1rNj13skXBncNGhg';

	let routeInterval: any;
	let mlInterval: any;
	// bounds: 37.274843, -80.588467 | 37.181913, -80.250001
	// 37.231123, -80.426337
	lng = -80.426337;
	lat = 37.231123;
	zoom = 14;

	let userLng = lng;
	let userLat = lat;
	let start = [lng, lat];

	const garageLocations: mapboxgl.LngLatLike[] = [
		[-80.42633819580078, 37.23112106323242],
		[-80.42050170898438, 37.233638763427734],
		[-80.41342893440408, 37.227929917832995]
	];

	let markers = {};
	let markerPopup = {};

	const routeColors = ['red', 'green', 'blue', 'black'];
	let routeTimeDisplays = ['', '', ''];
	let dataPackage = { garage1: 0, garage2: 0, garage3: 0 };
	let dataLoaded = false;

	const capacityMax = {
		garage1: 700,
		garage2: 600,
		garage3: 400
	};

	const garageNames = {
		garage1: 'Perry Street',
		garage2: 'North End',
		garage3: 'Kent Square'
	};

	const background = (progress: number) =>
		`radial-gradient(white 50%, transparent 51%), conic-gradient(transparent 0deg ${
			360 * progress
		}deg, gainsboro ${
			360 * progress
		}deg 360deg), conic-gradient(green 0deg, lightgreen 90deg, yellow 180deg, orange 270deg, red 345deg, orange 355deg, white 360deg)`;
	$: garage1circle = `--background:${background(
		(capacityMax.garage1 - capacities.garage1) / capacityMax.garage1
	)}`;
	$: garage2circle = `--background:${background(
		(capacityMax.garage2 - capacities.garage2) / capacityMax.garage2
	)}`;
	$: garage3circle = `--background:${background(
		(capacityMax.garage3 - capacities.garage3) / capacityMax.garage3
	)}`;

	// create a function to make a directions request
	async function getRoute(end: any, id: number, timeString?: string, draw: boolean = false) {
		// make a directions request using cycling profile
		// an arbitrary start will always be the same
		// only the end or destination will change
		let request = `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${
			end[0]
		},${end[1]}?steps=true&geometries=geojson&access_token=${accessToken}${
			timeString ? `&depart_at=${timeString}` : ''
		}`;
		const query = await fetch(request, { method: 'GET' });
		// &depart_at=2019-05-02T15:00
		const json = await query.json();
		const data = json.routes[0];
		if (draw) {
			const route = data.geometry.coordinates;
			const geojson = {
				type: 'Feature',
				properties: {},
				geometry: {
					type: 'LineString',
					coordinates: route
				}
			};
			// if the route already exists on the map, we'll reset it using setData
			if (map.getSource(`route${id}`)) {
				map.getSource(`route${id}`).setData(geojson);
			}
			// otherwise, we'll make a new request
			else {
				map.addLayer({
					id: `route${id}`,
					type: 'line',
					source: {
						type: 'geojson',
						data: geojson
					},
					layout: {
						'line-join': 'round',
						'line-cap': 'round'
					},
					paint: {
						'line-color': routeColors[id],
						'line-width': 5,
						'line-opacity': 0.75
					}
				});
			}
		}
		// add turn instructions here at the end
		const minutes = Math.floor(data.duration / 60);
		dataPackage[`garage${id + 1}`] = minutes + lastInputNum;
		routeTimeDisplays[id] = `Trip duration: ${minutes} minutes`;
		// lastInputNum = inputNum;
		// inputNum = 0;
	}

	// Call  this only after the route has been gotten
	// function drawRoute(id: number, geojson: any) {

	// }

	const bounds = [
		[-80.588467, 37.274843],
		[-80.250001, 37.181913]
	];

	let locationLoaded = false;

	async function startIntervalML(delayMS: number = 5000, updateTime: boolean = false) {
		for (const [i, coords] of garageLocations.entries()) {
			getRoute(coords, i);
		}
		function startInterval() {
			mlInterval = setInterval(() => {
				sendRequest();
				if (updateTime) getDepartureTime(lastInputNum);
			}, delayMS);
		}

		if (delayMS < 30000) {
			startInterval();
		} else {
			const now = new Date(),
				delay = delayMS - (now % delayMS);
			setTimeout(startInterval, delay);
		}
	}

	function createProgressCircle(garage: string) {
		const wrapper = document.createElement('div');
		wrapper.style.display = 'flex';
		wrapper.style.flexDirection = 'column';
		wrapper.style.alignItems = 'center';
		const progressCircle = document.createElement('div');
		const capacity = capacities[garage];
		const fraction = (capacityMax[garage] - capacity) / capacityMax[garage];

		progressCircle.innerHTML = `<p>${capacity} remaining</p>`;
		progressCircle.id = 'progress-circle';
		const backgroundProp = background(fraction);
		progressCircle.style.setProperty('--background', backgroundProp);
		wrapper.innerHTML = `<p><strong>${garageNames[garage]}</strong></p>${progressCircle.outerHTML}`;
		return wrapper.outerHTML;
	}

	onMount(() => {
		const initialState = { lng: lng, lat: lat, zoom: zoom };
		map = new Map({
			container: mapContainer,
			accessToken: accessToken,
			style: `mapbox://styles/mapbox/outdoors-v11`,
			center: [initialState.lng, initialState.lat],
			zoom: initialState.zoom
		});

		markers = {
			marker1: new mapboxgl.Marker({}).setLngLat(garageLocations[0]),
			marker2: new mapboxgl.Marker({}).setLngLat(garageLocations[1]),
			marker3: new mapboxgl.Marker({}).setLngLat(garageLocations[2])
		};

		markerPopup = {
			marker1: new mapboxgl.Popup(),
			marker2: new mapboxgl.Popup(),
			marker3: new mapboxgl.Popup()
		};

		startIntervalML();

		for (const marker in markers) {
			markers[marker].setPopup(markerPopup[marker]);
			markers[marker].addTo(map);
		}

		if ('geolocation' in navigator) {
			navigator.geolocation.getCurrentPosition(
				function (position) {
					userLat = position.coords.latitude;
					userLng = position.coords.longitude;
					start = [userLng, userLat];
					map.addLayer({
						id: 'outer-point',
						type: 'circle',
						source: {
							type: 'geojson',
							data: {
								type: 'FeatureCollection',
								features: [
									{
										type: 'Feature',
										properties: {},
										geometry: {
											type: 'Point',
											coordinates: start
										}
									}
								]
							}
						},
						paint: {
							'circle-radius': 13,
							'circle-color': 'rgba(50, 167, 250, 0.25)'
						}
					});
					map.addLayer({
						id: 'point',
						type: 'circle',
						source: {
							type: 'geojson',
							data: {
								type: 'FeatureCollection',
								features: [
									{
										type: 'Feature',
										properties: {},
										geometry: {
											type: 'Point',
											coordinates: start
										}
									}
								]
							}
						},
						paint: {
							'circle-radius': 7,
							'circle-color': '#ffffff'
						}
					});
					map.addLayer({
						id: 'inner-point',
						type: 'circle',
						source: {
							type: 'geojson',
							data: {
								type: 'FeatureCollection',
								features: [
									{
										type: 'Feature',
										properties: {},
										geometry: {
											type: 'Point',
											coordinates: start
										}
									}
								]
							}
						},
						paint: {
							'circle-radius': 5,
							'circle-color': '#32a7fa'
						}
					});
					locationLoaded = true;
				},
				function (error) {
					console.error('Error getting location:', error.message);
				}
			);
		} else {
			console.error('Geolocation is not supported by this browser');
		}

		map.on('load', () => {
			// Add a data source containing GeoJSON data.
			map.addSource('perry', {
				type: 'geojson',
				data: {
					type: 'FeatureCollection',
					features: [
						{
							type: 'Feature',
							properties: {},
							geometry: {
								coordinates: [
									[-80.42708200802527, 37.23127557377347],
									[-80.42704026614749, 37.23130774085311],
									[-80.42699081291872, 37.23126930052352],
									[-80.42631863068358, 37.2317860345929],
									[-80.42636489878932, 37.23182313993475],
									[-80.42631889531432, 37.23185747734773],
									[-80.4254673992555, 37.23114848460352],
									[-80.4255064589239, 37.231117785666484],
									[-80.42555842672388, 37.231158895544866],
									[-80.42623552380041, 37.230645577036086],
									[-80.4261783592207, 37.23059752620007],
									[-80.42619821463288, 37.230584697025876],
									[-80.42622788656995, 37.23056307413543],
									[-80.4270819179505, 37.2312754959013]
								],
								type: 'LineString'
							}
						}
					]
				}
			});

			map.addSource('northend', {
				type: 'geojson',
				data: {
					type: 'FeatureCollection',
					features: [
						{
							type: 'Feature',
							properties: {},
							geometry: {
								coordinates: [
									[-80.42099027118148, 37.23382858875186],
									[-80.42064192537737, 37.23406896455522],
									[-80.41998863442235, 37.233466108463034],
									[-80.42018117720595, 37.233333391964564],
									[-80.42025427215154, 37.23327590506655],
									[-80.42030419065095, 37.23324751645896],
									[-80.4204976248357, 37.23343417135891],
									[-80.42060905005792, 37.2335342409059],
									[-80.42099056726184, 37.233828060399446]
								],
								type: 'LineString'
							}
						}
					]
				}
			});

			map.addSource('kentsquare', {
				type: 'geojson',
				data: {
					type: 'FeatureCollection',
					features: [
						{
							type: 'Feature',
							properties: {},
							geometry: {
								coordinates: [
									[-80.41340510410497, 37.22769580816032],
									[-80.41290642636295, 37.22803472181779],
									[-80.41317915858284, 37.22829549348738],
									[-80.41363561418221, 37.22798293082137],
									[-80.41359795659544, 37.2279502206996],
									[-80.41363903759914, 37.22792114502434],
									[-80.41353012839862, 37.22780840069234],
									[-80.41352878729415, 37.22780933504961],
									[-80.41340800040628, 37.22769342062058],
									[-80.41340479098554, 37.22769567544012]
								],
								type: 'LineString'
							}
						}
					]
				}
			});

			// Add a new layer to visualize the polygon.

			for (const key in { perry: '', northend: '', kentsquare: '' }) {
				map.addLayer({
					id: key,
					type: 'fill',
					source: key, // reference the data source
					layout: {},
					paint: {
						'fill-color': '#0080ff', // blue color fill
						'fill-opacity': 0.5
					}
				});
				// Add a black outline around the polygon.
				map.addLayer({
					id: `outline_${key}`,
					type: 'line',
					source: key,
					layout: {},
					paint: {
						'line-color': '#000',
						'line-width': 2
					}
				});
			}
		});
	});

	onDestroy(() => {
		// map.remove();
		// be sure to clear interval here!!!
		clearInterval(mlInterval);
		clearInterval(routeInterval);
	});

	let timeDisplay = ``;

	// function convertTo12HourFormat(timeString: string) {
	// 	let [hours, minutes] = timeString.split(':').map(Number);
	// 	let suffix = hours >= 12 ? 'PM' : 'AM';
	// 	hours = hours % 12 || 12;
	// 	minutes = minutes < 10 ? '0' + minutes : minutes;
	// 	return `${hours}:${minutes} ${suffix}`;
	// }

	function getDepartureTime(minuteGap: number): string {
		const zeroPad = (num: number, places: number) => String(num).padStart(places, '0');
		const newTime = new Date();
		newTime.setMinutes(newTime.getMinutes() + minuteGap);
		let isoTimeString = newTime.toISOString();
		isoTimeString = newTime.toISOString().substring(0, isoTimeString.length - 8);
		let hours = newTime.getHours();
		const minutes = newTime.getMinutes();
		let suffix = hours >= 12 ? 'PM' : 'AM';
		hours = hours % 12 || 12;
		timeDisplay = `${hours}:${zeroPad(minutes, 2)} ${suffix}`;
		return isoTimeString;
	}

	async function markDestination(minuteGap: number) {
		const isoTimeString = getDepartureTime(minuteGap);
		for (const [i, coords] of garageLocations.entries()) {
			// if (!show) {
			// 	// const marker1 = new mapboxgl.Marker().setLngLat(coords).addTo(map);
			// 	markers[`marker${i + 1}`].addTo(map);
			// }
			await getRoute(coords, i, isoTimeString, true);
		}
	}

	let capacities = {
		garage1: 0,
		garage2: 0,
		garage3: 0
	};

	async function runProcess(minuteGap: number) {
		dataLoaded = false;
		lastInputNum = inputNum;
		clearInterval(routeInterval);
		await markDestination(minuteGap);
		switchMode(true);
		await sendRequest();
		dataLoaded = true;
		inputNum = 0;
	}

	let inputNum: number = 0;
	let lastInputNum: number = inputNum;
	let output: any = { garage1: '', garage2: '', garage3: '' };

	async function sendRequest() {
		const response = await fetch('/api/callML', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(dataPackage)
		});
		if (response.ok) {
			output = await response.json();
			let i = 0;
			for (const garage in output) {
				if (i === 3) break;
				capacities[garage] = output[garage].expected_occupancy;
				i++;
			}
			let y = 1;
			for (const marker in markers) {
				// markers[marker].setPopup(
				// 	new mapboxgl.Popup().setHTML(`<h2>Capacity: ${capacities[`garage${y}`]}</h2>`)
				// );
				// markers[marker].setPopup(new mapboxgl.Popup().setHTML(createProgressCircle(`garage${y}`)));
				markerPopup[marker].setHTML(createProgressCircle(`garage${y}`));
				y++;
			}
		} else {
			throw new Error('Failed to fulfill POST request to callML Svelte API from frontend');
		}
	}

	let show = false;

	function switchMode(toggle: boolean = false) {
		clearInterval(mlInterval);
		show = toggle;
		if (show == false) {
			lastInputNum = 0;
			// for (let i = 0; i < 3; i++) {
			// 	map.getSource(`route${i}`).remove();
			// }
			startIntervalML();
		} else {
			startIntervalML(60000, true);
		}
	}
</script>

<div class="big-container">
	<div class="action-menu">
		{#if show}
			<button on:click={() => switchMode(false)} class="action-button back-button"
				><div class="material-icons">arrow_back</div>
				Back</button
			>
		{/if}
		<label style="margin-bottom:5px;">Leaving in: </label>
		<div class="user-input min">
			<input
				type="number"
				min="0"
				on:keyup={() => {
					if (inputNum < 0) {
						inputNum = 0;
					}
				}}
				bind:value={inputNum}
			/>
		</div>
		{#if locationLoaded}
			<button on:click={() => runProcess(inputNum)} class="action-button">Predict</button>
		{:else}
			<button class="disabled-button">Loading location...</button>
		{/if}
	</div>
	<div class="map" bind:this={mapContainer}>
		{#if !show}
			<div class="live-view">
				<h2>LIVE VIEW</h2>
				<div class="red-circle blink" />
			</div>
		{/if}
	</div>
	<!-- {#if show}
		<div class="map-shadow" style></div>
	{:else}
	{/if} -->
	<div class="map-shadow" style="right:0px"/>
	{#if show}
		<div class="results-menu" transition:fly={{ x: 200, duration: 300, easing: quintOut }}>
			{#if dataLoaded}
				<div class="results-results">
					<h2>Results</h2>
					<h4>Departure time: {timeDisplay}</h4>
					<!-- <div class="result-divider"></div> -->
					{#key dataPackage}
						<div class="route-time-wrapper">
							<h3>Perry Street Garage:</h3>
							<div>
								<p>{routeTimeDisplays[0]}</p>
								<div id="progress-circle" style={garage1circle}>
									<p>{capacities.garage1} remaining</p>
								</div>
							</div>
						</div>
						<div class="result-divider" />
						<div class="route-time-wrapper">
							<h3>North End Garage:</h3>
							<div>
								<p>{routeTimeDisplays[1]}</p>
								<div id="progress-circle" style={garage2circle}>
									<p>{capacities.garage2} remaining</p>
								</div>
							</div>
						</div>
						<div class="result-divider" />
						<div class="route-time-wrapper">
							<h3>Kent Square Garage:</h3>
							<div>
								<p>{routeTimeDisplays[2]}</p>
								<div id="progress-circle" style={garage3circle}>
									<p>{capacities.garage3} remaining</p>
								</div>
							</div>
						</div>
					{/key}
				</div>
			{:else}
				<div class="results-loading">
					<div class="lds-ring">
						<div />
						<div />
						<div />
						<div />
					</div>
				</div>
			{/if}
		</div>
	{/if}
</div>

<style>
	:root {
		position: relative;
	}

	.big-container {
		position: absolute;
		top: 100px;
		bottom: 0px;
		left: 0px;
		right: 0px;
		display: flex;
		/* align-items: center; */
		/* justify-content:center; */
		/* flex-direction: row; */
	}

	.map {
		height: 100%;
		width: 100%;
		/* align-self: center; */
	}

	.map-shadow {
		box-shadow: inset rgba(0, 0, 0, 0.5) 0px 10px 30px;
		position:absolute;
		left:260px;
		height:100%;
		pointer-events:none;
		background-color:rgba(0,0,0,0);
	}

	.action-menu {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 200px;
		padding: 30px;
		/* box-shadow: rgba(0, 0, 0, 0.5) 10px 10px 30px; */
		z-index: 2;
	}

	.results-menu {
		position:absolute;
		width: 220px;
		height:100%;
		z-index: 2;
		right:0;
		background-color:white;
		box-shadow: rgba(0, 0, 0, 0.5) 0px 10px 30px;
		overflow-y: auto;
	}

	.results-results {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-direction: column;
		overflow-y: auto;
	}

	.results-loading {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.result-divider {
		width: 100%;
		height: 1px;
		background-color: black;
		margin-top: 20px;
	}

	.route-time-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 5px;
		transition: all 200ms ease;
		gap: 0;
	}

	.route-time-wrapper div {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.action-button {
		align-self: center;
		justify-self: center;
		height: 50px;
		width: 207px;
		margin-top: 5px;
		background-color: darkblue;
		color: white;
		border: none;
		border-radius: 5px;
		transition: all 100ms ease;
		cursor: pointer;
	}

	.back-button {
		background-color: rgba(0, 0, 0, 0);
		border: 1px solid black;
		color: black;
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		top: 10px;
	}

	.disabled-button {
		align-self: center;
		justify-self: center;
		height: 50px;
		width: 207px;
		margin-top: 5px;
		background-color: darkgray;
		color: white;
		border: none;
		border-radius: 5px;
	}

	.action-button:hover {
		transform: scale(1.05);
		box-shadow: rgba(0, 0, 0, 0.2) 5px 5px 10px;
	}

	.action-button:active {
		transform: scale(0.95);
		box-shadow: inset rgba(0, 0, 0, 0.2) 5px 5px 10px;
	}

	.user-input {
		display: inline-block;
		position: relative;
	}

	.user-input::after {
		position: absolute;
		top: 13px;
		right: 0.5em;
		transition: all 0.05s ease-in-out;
	}

	.user-input:hover::after,
	.user-input:focus-within::after {
		right: 1.5em;
	}

	@supports (-moz-appearance: none) {
		.user-input::after {
			right: 1.5em;
		}
	}

	.min::after {
		content: 'minutes';
	}

	.user-input input {
		width: 200px;
		height: 40px;
		text-align: center;
		font-size: medium;
	}

	#progress-circle {
		background: var(--background);
		border-radius: 50%;
		width: 6rem;
		height: 6rem;
		transition: all 500ms ease;
		will-change: transform;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: small;
	}

	.lds-ring {
		display: inline-block;
		position: relative;
		width: 80px;
		height: 80px;
		align-self: center;
		justify-self: center;
	}
	.lds-ring div {
		box-sizing: border-box;
		display: block;
		position: absolute;
		width: 64px;
		height: 64px;
		margin: 8px;
		border: 8px solid grey;
		border-radius: 50%;
		animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
		border-color: grey transparent transparent transparent;
	}
	.lds-ring div:nth-child(1) {
		animation-delay: -0.45s;
	}
	.lds-ring div:nth-child(2) {
		animation-delay: -0.3s;
	}
	.lds-ring div:nth-child(3) {
		animation-delay: -0.15s;
	}
	@keyframes lds-ring {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	:global(#progress-circle) {
		background: var(--background);
		border-radius: 50%;
		width: 120px;
		height: 120px;
		will-change: transform;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: small;
	}

	.live-view {
		position: absolute;
		top: 0;
		left: 50%;
		z-index: 2;
		color: red;
		-webkit-text-stroke-width: 1px;
		-webkit-text-stroke-color: white;
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.red-circle {
		border-radius: 50%;
		background-color: red;
		height: 10px;
		width: 10px;
	}

	.blink {
		animation: blink-animation 1s steps(2, start) infinite;
	}
	@keyframes blink-animation {
		to {
			visibility: hidden;
		}
	}

	/* :global(#test) {
		height:100px;
		width:100px;
		background-color:blue;
	} */
</style>
