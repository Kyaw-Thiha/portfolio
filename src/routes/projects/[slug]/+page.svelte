<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section class="project">
	<h1>{data.project?.name}</h1>
	<div class="img-container"><img src={data.project?.image} alt={data.project?.name} /></div>

	<p>{data.project?.detail}</p>
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
			}
		}

		p {
			margin-top: 32px;
			font-size: 20px;
			text-align: justify;
		}
	}
</style>
