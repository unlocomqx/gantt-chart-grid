<script lang="ts">
	import { getBarSize, getMonthSize, getQuarterSize } from '$lib/utils';
	import Icon from '@iconify/svelte';

	let { data } = $props();
	let { months, quarters, bars, min_year, max_year } = data;

	const years = Array.from({ length: max_year - min_year + 1 }, (_, i) => min_year + i);
	let view = $state<'month' | 'quarter'>('quarter');
	let zoom = $state(36);
</script>

<div class="flex gap-4">
	<div class="join mb-10">
		<input aria-label="View by month" bind:group={view} class="join-item btn" name="options" type="radio"
					 value="month" />
		<input aria-label="View by Quarter" bind:group={view} class="join-item btn" name="options" type="radio"
					 value="quarter" />
	</div>
	<div class="join">
		<button class="btn join-item" onclick={() => zoom -= 2}>
			<Icon class="text-2xl" icon="ic:baseline-zoom-out" />
		</button>
		<button class="btn join-item" onclick={() => zoom += 2}>
			<Icon class="text-2xl" icon="ic:baseline-zoom-in" />
		</button>
	</div>
</div>

<div class="grid grid-rows-2" style:grid-template-columns="repeat({years.length * 365}, auto)">
	{#each years as year, year_index (year)}
		{#if view === 'month'}
			{#each months as month, index (month)}
				{@const { start, span } = getMonthSize(year, index + 1, min_year)}
				<div class="text-xs mx-2 mb-4 text-center"
						 style:grid-column="{start} / span {span}"
						 style:grid-row="1 / 1"
						 style:width="{zoom}px"
				>
					<span class="max-w-full text-ellipsis">{month}</span>
				</div>
				<div class="border-1 border-cyan-500 z-1 opacity-50" style:grid-row="1 / -1"
						 style:grid-column="{start} / span 1"></div>
			{/each}
		{:else}
			{#each quarters as quarter, index (quarter)}
				{@const { start, span } = getQuarterSize(year, index + 1, min_year)}
				<div class="text-xs mx-2 mb-4 text-center"
						 style:grid-column="{start} / span {span}"
						 style:grid-row="1 / 1"
						 style:width="{zoom}px"
				>
					<span class="max-w-full text-ellipsis">{quarter}</span>
				</div>
				<div class="border-1 border-cyan-500 z-1 opacity-50" style:grid-row="1 / -1"
						 style:grid-column="{start} / span 1"></div>
			{/each}
		{/if}
		<div class="border-1 border-red-500 z-1 opacity-50" style:grid-row="1 / -1"
				 style:grid-column="{year_index * 365 + 1} / span 1"></div>
	{/each}

	{#each bars as bar (bar.id_sep)}
		{@const { start, span } = getBarSize(bar, min_year)}
		<div class="flex items-center justify-center h-12 bg-cyan-400"
				 style:grid-row="2 / span 1"
				 style:grid-column="{start} / span {span}"
		>
			{bar.id_sep}
		</div>
	{/each}
</div>
