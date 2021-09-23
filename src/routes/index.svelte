<script context="module">
	export async function load({ page }) {
		let limit = 200;
		const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
		const res = await fetch(url);
		const data = await res.json();
		const loadedPokemon = data.results.map((data, index) => {
			return {
				name: data.name,
				id: index + 1,
				image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
					index + 1
				}.png`
			};
		});

		return { props: { pokemon: loadedPokemon } };
	}
</script>

<script>
	import PokemanCard from '../components/pokemanCard.svelte';
	export let pokemon;

	let searchTerm = '';
	let filteredPokemon = [];

	$: {
		if (searchTerm) {
			filteredPokemon = pokemon.filter((pokeman) =>
				pokeman.name.toLowerCase().includes(searchTerm.toLowerCase())
			);
		} else {
			filteredPokemon = [...pokemon];
		}
	}
</script>

<svelte:head>
	<title>SvelteKit Pokedex</title>
</svelte:head>

<div class="head">
	<h1>SvelteKit Pokedex</h1>
</div>

<input type="text" bind:value={searchTerm} placeholder="Search Pokemon" />

<div class="body">
	{#each filteredPokemon as pokeman}
		<PokemanCard {pokeman} />
	{/each}
</div>
