<script context="module">
	export async function load({ page }) {
		const id = page.params.id;
		const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
		const res = await fetch(url);
		const pokeman = await res.json();
		return { props: { pokeman } };
	}
</script>

<script>
	import { fade } from 'svelte/transition';

	export let pokeman;
	const type = pokeman.types[0].type.name;
</script>

<div class="container" transition:fade>
	<h1>{pokeman.name}</h1>
	<p>
		Type: <strong>{type}</strong> | Height: <strong>{pokeman.height}</strong> | Weight:
		<strong>{pokeman.weight}</strong>
	</p>
	<img src={pokeman.sprites['front_default']} alt={pokeman.name} />
</div>
