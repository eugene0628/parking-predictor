<script>
	export let data  = [
			{
				UID : 1,
				createdAt : "2023-11-02 18:28:45",
				USER : 1,
                rec_garage:  "TEMP",
                rec_avail_1: 390,
                rec_travel_time_1: 3,
                rec_avail_2: 390,
                rec_travel_time_2: 3,
                rec_avail_3: 390,
                rec_travel_time_3: 3,
			},
			{
				UID : 1,
				createdAt : "2023-11-02 18:28:45",
				USER : 1,
                rec_garage:  "TEMP",
                rec_avail_1: 390,
                rec_travel_time_1: 3,
                rec_avail_2: 390,
                rec_travel_time_2: 3,
                rec_avail_3: 390,
                rec_travel_time_3: 3,
			},
		];
</script>

<table>
	<thead>
		<tr>
			{#each Object.keys(data[0]) as columnHeading}
				<th>{columnHeading}</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each Object.values(data) as row}
			<tr>
				{#each Object.values(row) as cell}
					<td>{cell}</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>

<style>
	table,
	th,
	td {
		border: 1px solid;
		border-collapse: collapse;
		margin-bottom: 10px;
	}

	table {
		/* border: 2px solid #A40808; */
		background-color: white;
		width: 100%;
		text-align: center;
		border-collapse: collapse;
	}
	table td,
	table th {
		border: 1px solid #aaaaaa;
		padding: 3px 2px;
	}
	table tbody td {
		font-size: 13px;
	}
	table tr:nth-child(even) {
		background: white;
	}
	table thead {
		background: grey;
        position: sticky;
        top: 0;
	}
	table thead th {
		font-size: 15px;
		font-weight: bold;
		color: #ffffff;
		text-align: center;
		/* border-left: 2px solid #A40808; */
	}
	table thead th:first-child {
		border-left: none;
	}
</style>
