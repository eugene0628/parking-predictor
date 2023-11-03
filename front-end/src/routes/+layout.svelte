<script lang="ts">
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

<div class="nav-bar">
	<a href="/">
		<h1 class="title">Parking Prediction Frontend</h1>
	</a>
	<div on:click|stopPropagation={menuShow ? handleMenuClose : handleMenuOpen} class="profile" />
</div>
{#if menuShow}
	<div class="dropdown">
		<a href="/profile" on:click|stopPropagation={() => {}}>Manage profile</a>
		<a href="/profile" on:click|stopPropagation={() => {}}>Logout</a>
	</div>
{/if}
<slot />

<style>
	:root {
		height: 100%;
	}

	:global(body) {
		margin: 0;
		padding: 0;
		height: 100vh;
	}

	:global(*) {
		font-family: 'Roboto', sans-serif;
	}

	a {
		text-decoration: none;
	}

	.nav-bar {
		position: absolute;
		top: 0;
		width: 100vw;
		top: 0;
		right: 0;
		background-color: darkblue;
		height: 100px;
		z-index: 2;
		display: flex;
		/* align-items:flex-start; */
		justify-content: space-between;
		align-items: center;
        /* box-shadow: rgba(0, 0, 0, 0.5) 10px 10px 30px; */
	}

	.dropdown {
		z-index: 2000;
		position: absolute;
		top: 100px;
		right: 10px;
		height: 100px;
		width: 150px;
		border: 1px solid black;
		border-top: 0;
		border-radius: 0 0 3px 3px;
		display: grid;
        background-color:white;
	}

	.dropdown a {
		display: flex;
		justify-content: center;
		align-items: center;
		border-bottom: solid 1px black;
		cursor: pointer;
		transition: all 0.1s ease;
        color:black;
	}

	.dropdown a:hover {
		background-color: rgba(0, 0, 0, 0.1);
	}

	.dropdown a:active {
		background-color: rgba(0, 0, 0, 0.2);
	}

	.dropdown a:first-child {
		border-top: none;
	}

	.dropdown a:last-child {
		border-bottom: none;
	}

	.title {
		margin-left: 20px;
		/* text-align: center; */
		color: white;
	}

	.profile {
		width: 75px;
		height: 75px;
		/* background-color:white; */
		border-radius: 50%;
		margin-right: 50px;
		/* padding-bottom:100%; */
		background-image: url('/Farag_Mohamed.jpg');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center center;
		cursor: pointer;
	}
</style>
