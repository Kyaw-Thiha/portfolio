<script lang="ts">
	import MyButton from '$lib/components/myButton.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section class="project">
	<h1>{data.project?.name}</h1>
	<div class="img-container"><img src={data.project?.image} alt={data.project?.name} /></div>
	<div class="btn-container">
		<a href={data.project?.link} target="_blank"> <MyButton text="Visit Website" /> </a>
	</div>

	<p class="project-detail">
		{@html data.project?.detail}
	</p>
</section>

<style lang="scss" scoped>
	.project {
		h1 {
			font-size: 64px;
			font-weight: 600;
		}

		.img-container {
			display: flex;
			align-items: center;
			justify-content: center;

			img {
				width: 700px;
				border-radius: 25px;
			}
		}

		.btn-container {
			margin-top: 32px;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.project-detail {
			margin-top: 64px;
		}

		.project-detail > :global(h2) {
			font-size: 32px;
		}

		.project-detail > :global(h3) {
			font-weight: 400;
			font-size: 28px;
		}

		.project-detail > :global(p) {
			font-size: 20px;
			text-align: justify;
			font-weight: 300;
		}
	}
</style>
