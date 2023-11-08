<script lang="ts">
	import { Map, GeolocateControl } from 'mapbox-gl';

	// import "../node_modules/mapbox-gl/dist/mapbox-gl.css"
	import { onMount, onDestroy } from 'svelte';
	import { fly } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { quintOut } from 'svelte/easing';
	import { afterNavigate } from '$app/navigation';

	let map: any;
	let mapContainer: any;
	let lng: any, lat: any, zoom: any;
	const accessToken =
		'pk.eyJ1IjoiZXVnZW5lMDYyOCIsImEiOiJjbG5rcDR5NDIxcnpuMmtta2dwZTlxNXR0In0.gSkwpX1rNj13skXBncNGhg';

	// bounds: 37.274843, -80.588467 | 37.181913, -80.250001
	// 37.231123, -80.426337
	lng = -80.426337;
	lat = 37.231123;
	zoom = 14;

	let userLng = lng;
	let userLat = lat;
	let start = [lng, lat];

	const garageLocations = [
		[-80.42633819580078, 37.23112106323242],
		[-80.42050170898438, 37.233638763427734],
		[-80.413885, 37.228099]
	];

	const routeColors = ['red', 'green', 'blue', 'black'];
	let routeTimeDisplays = ['', '', ''];
	let dataPackage = { garage1: 0, garage2: 0, garage3: 0 };
	let dataLoaded = false;

	const background = (progress: number) => `radial-gradient(white 50%, transparent 51%),
    conic-gradient(transparent 0deg ${360 * progress}deg, gainsboro ${360 * progress}deg 360deg),
    conic-gradient(green 0deg, lightgreen 90deg, yellow 180deg, orange 270deg, red 345deg, orange 355deg, white 360deg);`;
	$: garage1circle = `--background:${background((700 - capacities['garage1']) / 700)}`;
	$: garage2circle = `--background:${background((600 - capacities['garage2']) / 600)}`;
	$: garage3circle = `--background:${background((400 - capacities['garage3']) / 400)}`;

	// create a function to make a directions request
	async function getRoute(end: any, id: number, timeString?: string) {
		// make a directions request using cycling profile
		// an arbitrary start will always be the same
		// only the end or destination will change
		let request = `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${
			end[0]
		},${end[1]}?steps=true&geometries=geojson&access_token=${accessToken}${
			timeString ? `&depart_at=${timeString}` : ''
		}`;
		// console.log(request)
		const query = await fetch(request, { method: 'GET' });
		// &depart_at=2019-05-02T15:00
		const json = await query.json();
		const data = json.routes[0];
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
		// add turn instructions here at the end
		const minutes = Math.floor(data.duration / 60);
		dataPackage[`garage${id + 1}`] = minutes + inputNum;
		routeTimeDisplays[id] = `Trip duration: ${minutes} minutes`;
	}

	const bounds = [
		[-80.588467, 37.274843],
		[-80.250001, 37.181913]
	];

	let locationLoaded = false;

	onMount(() => {
		const initialState = { lng: lng, lat: lat, zoom: zoom };
		map = new Map({
			container: mapContainer,
			accessToken: accessToken,
			style: `mapbox://styles/mapbox/outdoors-v11`,
			center: [initialState.lng, initialState.lat],
			zoom: initialState.zoom
		});

		if ('geolocation' in navigator) {
			navigator.geolocation.getCurrentPosition(
				function (position) {
					userLat = position.coords.latitude;
					userLng = position.coords.longitude;
					start = [userLng, userLat];
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
							'circle-radius': 10,
							'circle-color': '#3887be'
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

		// 37.231264,-80.427086
		// 37.231862,-80.426323
		// 37.231144,-80.425475
		// 37.230563,-80.426232
		map.on('load', () => {
			// Add a data source containing GeoJSON data.
			map.addSource('perry', {
				type: 'geojson',
				data: {
					type: 'Feature',
					geometry: {
						type: 'Polygon',
						// These coordinates outline Maine.
						coordinates: [
							[
								[-80.427086, 37.231264],
								[-80.426323, 37.231862],
								[-80.425475, 37.231144],
								[-80.426232, 37.230563]
							]
						]
					}
				}
			});

			// Add a new layer to visualize the polygon.
			// map.addLayer({
			// 	id: 'perry',
			// 	type: 'fill',
			// 	source: 'perry', // reference the data source
			// 	layout: {},
			// 	paint: {
			// 		'fill-color': '#0080ff', // blue color fill
			// 		'fill-opacity': 0.5
			// 	}
			// });
			// Add a black outline around the polygon.
			// map.addLayer({
			// 	id: 'outline',
			// 	type: 'line',
			// 	source: 'perry',
			// 	layout: {},
			// 	paint: {
			// 		'line-color': '#000',
			// 		'line-width': 2
			// 	}
			// });
			// getRoute(start, 3);
		});
	});

	onDestroy(() => {
		// map.remove();
	});

	let timeDisplay = ``;

	async function markDestination(minuteGap: number) {
		const zeroPad = (num, places) => String(num).padStart(places, '0');
		// inputNum = 0;
		const newTime = new Date();
		newTime.setMinutes(newTime.getMinutes() + minuteGap);
		let isoTimeString = newTime.toISOString();
		isoTimeString = newTime.toISOString().substring(0, isoTimeString.length - 8);
		const hours = newTime.getHours();
		const minutes = newTime.getMinutes();
		// const timeDisplay = document.getElementById('time-display')
		// timeDisplay.innerHTML = `<h2>${zeroPad(hours % 12, 2)}:${zeroPad(minutes, 2)}</h2>`
		timeDisplay = `${zeroPad(hours, 2)}:${zeroPad(minutes, 2)}`;
		for (const [i, coords] of garageLocations.entries()) {
			const end = {
				type: 'FeatureCollection',
				features: [
					{
						type: 'Feature',
						properties: {},
						geometry: {
							type: 'Point',
							coordinates: coords
						}
					}
				]
			};
			if (map.getLayer(`end${i}`)) {
				map.getSource(`end${i}`).setData(end);
			} else {
				map.addLayer({
					id: `end${i}`,
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
										coordinates: coords
									}
								}
							]
						}
					},
					paint: {
						'circle-radius': 10,
						'circle-color': '#f30'
					}
				});
			}
			await getRoute(coords, i, isoTimeString);
		}
		show = true;
	}

	let capacities = {};

	async function runProcess(minuteGap: number) {
		// show = false;
		dataLoaded = false;
		await markDestination(minuteGap);
		await sendRequest();
		dataLoaded = true;
		inputNum = 0;
	}

	let inputNum: number = 0;
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
				// console.log(output[garage].expected_occupancy);
				capacities[garage] = output[garage].expected_occupancy;
				i++;
			}
			inputNum = 0;
		} else {
			throw new Error('Failed to fulfill POST request to callML Svelte API from frontend');
		}
	}
	let show = false;

	let menuShow = false;

	function handleMenuOpen() {
		menuShow = true;
		document.body.addEventListener('click', handleMenuClose);
	}

	function handleMenuClose() {
		menuShow = false;
		document.body.removeEventListener('click', handleMenuClose);
	}
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>
<div class="big-container">
	<div class="action-menu">
		<label style="margin-bottom:5px;">Leaving in: </label>
		<div class="user-input min">
			<input type="number" bind:value={inputNum} />
		</div>
		<button on:click={() => runProcess(0)} class="action-button">Predict</button>
	</div>
	<div class="map" bind:this={mapContainer} />
	{#if show}
		<div class="results-menu" transition:fly={{ x: 200, duration: 300, easing: quintOut }}>
			{#if dataLoaded}
				<div class="results-results">
					<h2>Results</h2>
					<h3>Arrival time: {timeDisplay}</h3>
					<!-- <div class="result-divider"></div> -->
					{#key dataPackage}
						<div class="route-time-wrapper">
							<h3>Perry Street Garage:</h3>
							<div>
								<p>{routeTimeDisplays[0]}</p>
								<div id="progress-circle" style={garage1circle}>
									<p>{capacities['garage1']} remaining</p>
								</div>
							</div>
						</div>
						<div class="result-divider" />
						<div class="route-time-wrapper">
							<h3>Kent Square Garage:</h3>
							<div>
								<p>{routeTimeDisplays[1]}</p>
								<div id="progress-circle" style={garage2circle}>
									<p>{capacities['garage2']} remaining</p>
								</div>
							</div>
						</div>
						<div class="result-divider" />
						<div class="route-time-wrapper">
							<h3>North End Garage:</h3>
							<div>
								<p>{routeTimeDisplays[2]}</p>
								<div id="progress-circle" style={garage3circle}>
									<p>{capacities['garage3']} remaining</p>
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

	.action-menu {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 200px;
		padding: 30px;
		box-shadow: rgba(0, 0, 0, 0.5) 10px 10px 30px;
		z-index: 2;
	}

	.results-menu {
		width: 300px;
		z-index: 2;
		box-shadow: rgba(0, 0, 0, 0.5) -10px 10px 30px;
	}

    .results-results {
        display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-direction: column;
		overflow-y: auto;
    }

    .results-loading {
        height:100%;
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
	}

    .route-time-wrapper div {
        display: flex;
        flex-direction:column;
        align-items:center;
    }

	.action-button {
		border: none;
		background-color: darkblue;
		color: white;
		margin-top: 5px;
		width: 207px;
		height: 50px;
		cursor: pointer;
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
</style>
