<script lang="ts">
	import { Map, GeolocateControl } from 'mapbox-gl';

	// import "../node_modules/mapbox-gl/dist/mapbox-gl.css"
	import { onMount, onDestroy } from 'svelte';
	import { fly } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { quintOut } from 'svelte/easing';

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

  const routeColors = ["red", "green", "blue", "black"]
	let routeTimeDisplays = ['', '', '']

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
		if (map.getSource('route')) {
			map.getSource('route').setData(geojson);
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
		// const duration = document.getElementById(`garage${id}`);
		// duration.innerHTML = `<p><strong>Trip duration: ${Math.floor(data.duration / 60)} minutes`;
		routeTimeDisplays[id] = `Trip duration: ${Math.floor(data.duration / 60)} minutes`

	}

	const bounds = [
		[-80.588467, 37.274843],
		[-80.250001, 37.181913]
	];

	onMount(() => {
		const initialState = { lng: lng, lat: lat, zoom: zoom };
		const accessToken =
			'pk.eyJ1IjoiZXVnZW5lMDYyOCIsImEiOiJjbG5rcDR5NDIxcnpuMmtta2dwZTlxNXR0In0.gSkwpX1rNj13skXBncNGhg';
		map = new Map({
			container: mapContainer,
			accessToken: accessToken,
			style: `mapbox://styles/mapbox/outdoors-v11`,
			center: [initialState.lng, initialState.lat],
			zoom: initialState.zoom
		});
		// map.setMaxBounds(bounds);
		// Add geolocate control to the map.
		// map.addControl(
		// 	new GeolocateControl({
		// 		positionOptions: {
		// 			enableHighAccuracy: true
		// 		},
		// 		// When active the map will receive updates to the device's location as it changes.
		// 		trackUserLocation: true,
		// 		// Draw an arrow next to the location dot to indicate which direction the device is heading.
		// 		showUserHeading: true
		// 	})
		// );

		if ('geolocation' in navigator) {
			navigator.geolocation.getCurrentPosition(
				function (position) {
					userLat = position.coords.latitude;
					userLng = position.coords.longitude;
					start = [userLng, userLat];
					// console.log(userLat);
					// console.log(userLng);
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
				},
				function (error) {
					console.error('Error getting location:', error.message);
				}
			);
		} else {
			console.error('Geolocation is not supported by this browser');
		}

		if ('geolocation' in navigator) {
			navigator.geolocation.getCurrentPosition(
				function (position) {
					userLat = position.coords.latitude;
					userLng = position.coords.longitude;
					// console.log(userLat);
					// console.log(userLng);
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
			map.addLayer({
				id: 'perry',
				type: 'fill',
				source: 'perry', // reference the data source
				layout: {},
				paint: {
					'fill-color': '#0080ff', // blue color fill
					'fill-opacity': 0.5
				}
			});
			// Add a black outline around the polygon.
			map.addLayer({
				id: 'outline',
				type: 'line',
				source: 'perry',
				layout: {},
				paint: {
					'line-color': '#000',
					'line-width': 2
				}
			});
			getRoute(start, 3);
		});
	});

	onDestroy(() => {
		// map.remove();
	});

	let timeDisplay = ``

	async function markDestination(minuteGap: number) {
		const zeroPad = (num, places) => String(num).padStart(places, '0');
		inputNum = 0;
		const newTime = new Date();
		newTime.setMinutes(newTime.getMinutes() + minuteGap);
		let isoTimeString = newTime.toISOString();
		isoTimeString = newTime.toISOString().substring(0, isoTimeString.length - 8);
		const hours = newTime.getHours();
		const minutes = newTime.getMinutes();
		// const timeDisplay = document.getElementById('time-display')
		// timeDisplay.innerHTML = `<h2>${zeroPad(hours % 12, 2)}:${zeroPad(minutes, 2)}</h2>`
		timeDisplay = `${zeroPad(hours % 12, 2)}:${zeroPad(minutes, 2)}`
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
			getRoute(coords, i, isoTimeString);
		}
		show = true;
	}

	let inputNum: number = 0;
	let output: number;

	async function sendRequest() {
		const response = await fetch('/api/callML', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify({ inputNum })
		});
		if (response.ok) {
			output = await response.json();
		} else {
			throw new Error('Failed to fulfill POST request to callML from frontend');
		}
	}
	let show = false;
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
</svelte:head>

<div class="nav-bar">
	<h1 class="title">Parking Prediction Frontend *Demo*</h1>
	<!-- <button on:click={()=>show=!show}>Test button</button> -->
</div>
<div class="big-container">
	<div class="map-container">
		{#if show}
			<div class="arrival-menu" transition:fly={{ x: -200, duration: 500, easing: quintOut}}>
					<h2>Parking capacities when leaving at</h2>
					<h2>{timeDisplay}</h2>
					<h3>Perry Street Garage:</h3>
					<p><strong>{routeTimeDisplays[0]}</strong></p>
					<h3>Kent Square Garage:</h3>
					<p><strong>{routeTimeDisplays[1]}</strong></p>
					<h3>North End Garage:</h3>
					<p><strong>{routeTimeDisplays[2]}</strong></p>
			</div>
        {/if}
		<div class="map" bind:this={mapContainer}>
		</div>
	</div>
	<div class="input-container">
		<button class="action-button" on:click={() => markDestination(0)}>Leave now?</button>
		<div class="h-line">
			<p class="or-word">or</p>
		</div>
		<div style="display:flex; flex-direction:row; align-items:center;">
			<div style="display:flex;flex-direction:column;margin-top:-1em;align-items:center;">
				<label style="font-size:small;">Minutes from departure</label>
				<input
					id="input-num"
					type="number"
					min="0"
					on:keyup={() => {
						if (inputNum < 0) {
							inputNum = 0;
						}
					}}
					bind:value={inputNum}
					class="input-box"
				/>
			</div>
			<button class="action-button" on:click={() => markDestination(inputNum)}>Set</button>
		</div>
	</div>
</div>

<style>
	:root {
		height: 100%;
	}

	:global(body) {
		margin: 0;
		padding: 0;
		height: 100vh;
	}

	* {
		font-family: 'Roboto', sans-serif;
	}

	.nav-bar {
		position: absolute;
		top: 0;
		width: 100vw;
		top: 0;
		right: 0;
		background-color: darkblue;
		height: 100px;
		z-index: 9999;
		display: flex;
		/* align-items:flex-start; */
		justify-content: flex-start;
		align-items: center;
	}

	.big-container {
		/* margin-top:100px; */
		padding-top: 100px;
		height: calc(100% - 100px);
		display: flex;
		/* justify-content: center; */
		align-items: center;
		flex-direction: column;
	}

	.title {
		margin-left: 20px;
		/* text-align: center; */
		color: white;
	}

	.map-container {
		/* display:grid;
		grid-template-columns: repeat(5, 1fr); */
		display:inline-flex;
		justify-content:center;
		/* align-items:center; */
		height: 60vh;
		width: 80vw;
		border-radius: 5px;
		margin-top: 20px;
		/* box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px; */
		/* background-color:pink; */
		gap: 10px;
		/* align-items:center; */
	}

	.map-container > * {
		/* transition: all 0.5s ease; */
	}

	.map {
		/* height: 100%; */
		/* width: 100%; */
		border-radius: 5px;
		/* grid-column-start:3; */
		/* grid-column-end:6; */
		/* grid-column:3/6; */
		height:80%;
		width: 50vw;
		align-self:center;
	}

	.arrival-menu {
		/* background-color:aquamarine; */
		/* grid-column:1/3; */
		border-right: 2px solid darkgray;
		text-align:center;
		padding-right:10px;
	}

	.input-container {
		margin-top: 30px;
		/* background-color:orange; */
		display: flex;
		justify-content: space-around;
		width: 50vw;
		/* height:30px; */
		align-items: center;
		/* background-color:blue; */
		padding: 20px 0;
		border: 1px black solid;
		border-radius: 5px;
		background-color: white;
		/* box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px; */
	}

	.action-button {
		height: 4rem;
		min-width: 5rem;
		/* font-size:medium; */
	}

	.input-box {
		height: 4rem;
		max-width: 5rem;
		font-size: large;
		text-align: center;
	}

	.h-line {
		background-color: gray;
		height: 2px;
		width: 10rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.h-line > * {
		background-color: white;
		padding: 0 0.5rem;
		color: gray;
	}
</style>
