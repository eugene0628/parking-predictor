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

<svelte:head>
	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="nav-bar">
	<a href="/">
		<h1 class="title">Parking Prediction</h1>
	</a>
	<div class="nav-button-container">
		<a class="nav-button admin-button" href="/admin">Admin panel</a>
		<button on:click|stopPropagation={menuShow ? handleMenuClose : handleMenuOpen} class="nav-button profile-wrapper">
			<div class="profile" />
			Profile<div class={menuShow ? "material-icons arrow-up" : "material-icons"}>expand_more</div>
		</button>
	</div>
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
		right: 0;
		left:0;
		background-color: darkblue;
		height: 100px;
		z-index: 2;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.nav-button-container {
		display:inline-flex;
		align-items: center;
		gap:10px;
	}

	.nav-button {
		border: solid 1px white;
		padding: 5px 20px;
		height:70px;
		border-radius:5px;
		color:white;
		background-color:rgba(0,0,0,0);
		display:inline-flex;
		align-items:center;
		transition:all 100ms ease;
		cursor:pointer;
	}

	.nav-button:hover {
		transform: scale(1.05);
	}

	.nav-button:active {
		transform: scale(0.95);
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

	.profile-wrapper {
		margin-right:10px;
	}

	.profile {
		width: 55px;
		height: 55px;
		/* background-color:white; */
		border-radius: 50%;
		/* padding-bottom:100%; */
		margin-right:20px;
		background-image: url('/Farag_Mohamed.jpg');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center center;
	}

	.profile-wrapper .material-icons {
		transition: all 150ms ease;
	}

	/* .profile-wrapper:hover .material-icons {
		transform: translate(0, 12%);
	} */

	.arrow-up {
		transform: rotate(180deg);
	}

	.admin-button {
		background-color:darkred;
		padding:0 20px;
		font-size:small;
		text-decoration:none;
	}
</style>
