<script lang="ts">
	let inputNum: number = 0;
	let output: number;

	async function sendRequest() {
		const response = await fetch('http://localhost:3000/predict', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify({ garage1: inputNum, garage2: inputNum + 1, garage3: inputNum + 2 })
		});
		if (response.ok) {
			console.log('OK');
			output = await response.json();
		} else {
			throw new Error('Failed to fulfill POST request to callML from frontend');
		}
	}
</script>

<div class="grid-container">
	<h1 class="title">Parking Prediction Frontend</h1>
	<div class="action-container">
		<input
			class="arrival-input"
			placeholder="Minutes"
			type="number"
			min="0"
			bind:value={inputNum}
		/>
		<button on:click={sendRequest} class="send-button"> Send </button>
	</div>
	<div class="output">
		{#if output || output === 0}
			{JSON.stringify(output)}
		{/if}
	</div>
</div>

<style>
	:root {
		height: 100%;
	}

	:global(body) {
		height: 99%;
	}

	.grid-container {
		height: 100%;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(5, 1fr);
	}

	.title {
		grid-column: 2;
		grid-row: 1;
		text-align: center;
	}

	.action-container {
		grid-column: 2;
		grid-row: 2;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 10px;
	}

	.arrival-input {
		min-height: 100px;
		max-width: 100px;
		text-align: center;
		font-size: large;
		/* box-shadow: 5px 5px 10px grey; */
		/* border: none; */
	}

	.send-button {
		height: 50px;
		width: 100px;
	}

	.output {
		grid-column: 2;
		grid-row: 3;
		/* background-color:blue; */
		/* border: 1px solid black; */
		border-radius: 5px;
		box-shadow: 5px 5px 10px lightgray;
	}
</style>
