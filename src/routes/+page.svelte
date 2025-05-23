<script lang="ts">
	import { getBarSize, getMonthSize } from '$lib/utils';

	let { data } = $props();
	let { years, months, bars, min_year } = data;
</script>

<div class="grid grid-rows-2" style:grid-template-columns="repeat({years.length * 365}, auto)">
	{#each years as year (year)}
		{#each months as month, index (month)}
			{@const { start, span } = getMonthSize(year, index + 1, min_year)}
			<div class="mx-2 mb-4" style:grid-column-start={start} style:grid-column-end={start + span} style:grid-row="1 / 1">
				{month}
			</div>
			<div class="border-1 border-cyan-500" style:grid-row="1 / -1" style:grid-column="{start} / span 1"></div>
		{/each}
	{/each}

	{#each bars as bar (bar.id_sep)}
		{@const { start, span } = getBarSize(bar, min_year)}
		<div class="flex items-center justify-center h-12 bg-cyan-400"
				 style:grid-row="2 / span 1"
				 style:grid-column-start={start}
				 style:grid-column-end={start + span}
		>
			{bar.id_sep}
		</div>
	{/each}
</div>
