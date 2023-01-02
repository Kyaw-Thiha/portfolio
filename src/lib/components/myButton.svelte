<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let text: String;
	function onClick() {
		dispatch('onClick', {});
	}
</script>

<button on:click={onClick} class="btn ">
	<p>{text}</p>
</button>

<style lang="scss" scoped>
	.btn {
		display: inline-block;
		background-color: #081f2d;
		border-radius: 16px;
		border: 1px solid #081f2d;
		color: white;
		font-size: 20px;
		padding: 8px 24px;
		cursor: pointer;
		transition: 0.3s;

		p {
			font-weight: 600;
			margin: 0;
		}
	}

	.btn:hover {
		background-color: white;
		color: #081f2d;
		border-color: #081f2d;
		transition: 0.3s;
	}
</style>
