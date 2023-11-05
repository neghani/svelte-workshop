<script>
	import Product from './components/product.svelte';
	import { goto } from '$app/navigation';

	let items;

	async function dataFetch() {
		const res = await fetch('https://dummyjson.com/products');
		const raw = await res.json();
		items = raw;
	}

	dataFetch();

	function onSelectChange(e) {
		goto('/cart/' + e.target.value);
	}
</script>

<div style="display: flex;">
	<div>
		<h1>Products</h1>

		{#if items}
			{#each items.products as item, i}
				<Product {item} />
			{/each}
		{:else}
			<p>No Items</p>
		{/if}
	</div>
	<div>
		<select on:change={onSelectChange} name="asdf" id="234">
			<option value="">Select One</option>
			<option value="asdfjhskdfl">Cart 1</option>
			<option value="2">Cart 2</option>
		</select>
	</div>
</div>
