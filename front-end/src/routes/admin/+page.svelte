<script lang="ts">
    import Table from '$lib/components/Table.svelte';
</script>


<div class="big-container">
    <h2>Dashboard</h2>
    <div class="user-history-container">
        <h3>User history</h3>
        <div class="user-table-container">
            <Table/>
        </div>
    </div>  
    <div class="some-graph">
        <h3>Some graph</h3>
    </div>
</div>


<style>
    :root {
	}

	.big-container {
		padding-top: 100px;
		height: calc(100% - 100px);
		display: grid;
        gap:40px;
        grid-template-columns: 1fr 8fr 5fr 1fr;
        grid-template-rows: 1fr 2fr 2fr;
	}

    .big-container h2 {
        grid-column: 2/4;
        grid-row: 1/2;
        justify-self:center;
    }

    .user-history-container {
        height:500px;
        grid-column: 2/3;
        grid-row: 2/3;
        /* width:600px; */
        display:flex;
        flex-direction:column;
        align-items:center;
        border: 1px solid black;
    }

    .user-table-container {
        /* transform:scale(0.8); */
        display:flex;
        justify-content:center;
        overflow-y: auto;
    }

    .some-graph {
        height: 500px;
        /* width: 700px; */
        grid-column: 3/4;
        grid-row: 2/3;
        display:flex;
        flex-direction:column;
        align-items:center;
        border: 1px solid black;
    }
</style>