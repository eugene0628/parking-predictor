<script lang="ts">
	import { Map, GeolocateControl } from 'mapbox-gl';
    
	// import "../node_modules/mapbox-gl/dist/mapbox-gl.css"
	import { onMount, onDestroy } from 'svelte';

	let map: any;
	let mapContainer: any;
	let lng: any, lat: any, zoom: any;

	// bounds: 37.274843, -80.588467 | 37.181913, -80.250001
	// 37.231123, -80.426337
	lng = -80.426337;
	lat = 37.231123;
	zoom = 14;

    let userLng = lng;
    let userLat = lat;

	const bounds = [
		[-80.588467, 37.274843],
		[-80.250001, 37.181913]
	];

	onMount(() => {
		const initialState = { lng: lng, lat: lat, zoom: zoom };
        const accessToken = 'pk.eyJ1IjoiZXVnZW5lMDYyOCIsImEiOiJjbG5rcDR5NDIxcnpuMmtta2dwZTlxNXR0In0.gSkwpX1rNj13skXBncNGhg'
		map = new Map({
			container: mapContainer,
			accessToken: accessToken,
			style: `mapbox://styles/mapbox/outdoors-v11`,
			center: [initialState.lng, initialState.lat],
			zoom: initialState.zoom
		});
		// map.setMaxBounds(bounds);
		// Add geolocate control to the map.
		map.addControl(
			new GeolocateControl({
				positionOptions: {
					enableHighAccuracy: true
				},
				// When active the map will receive updates to the device's location as it changes.
				trackUserLocation: true,
				// Draw an arrow next to the location dot to indicate which direction the device is heading.
				showUserHeading: true
			})
		);

        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                function (position) {
                    userLat = position.coords.latitude;
                    userLng = position.coords.longitude;
                    // console.log(userLat);
                    // console.log(userLng);
                },
                function (error) {
                    console.error("Error getting location:", error.message);
                }
            )
        } else {
            console.error("Geolocation is not supported by this browser");
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
		});
	});

	onDestroy(() => {
		// map.remove();
	});

    

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
</script>

<div class="nav-bar">
	<h1 class="title">Parking Prediction Frontend *Demo*</h1>
</div>
<div class="big-container">
	<div class="map-container">
		<div class="map" bind:this={mapContainer} />
	</div>
	<div class="input-container">
		<button class="action-button">Leave now?</button>
		<div class="h-line">
			<p class="or-word">or</p>
		</div>
		<div>
			<input
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
			<button class="action-button">Set</button>
		</div>
	</div>
</div>

<style>
	:root {
		height: 100%;
	}

	.map {
		height: 100%;
		width: 100%;
		border-radius: 5px;
	}

	:global(body) {
		margin: 0;
		padding: 0;
		height: 100vh;
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
		/* background-color:aquamarine; */
		height: 60vh;
		width: 80vw;
		/* background-color:grey; */
		/* padding:10px; */
		border-radius: 5px;
		margin-top: 20px;
		/* box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px; */
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
