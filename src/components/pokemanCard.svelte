<script>
	import { fade } from 'svelte/transition';
	export let pokeman;
</script>

<a class="pokeman" href={`/pokemon/${pokeman.id}`} transition:fade>
	<img src={pokeman.image} alt={pokeman.name} />
	<h2>{pokeman.id}. {pokeman.name}</h2>
</a>
