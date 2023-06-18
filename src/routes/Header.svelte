<script>
	import MyButton from '$lib/components/myButton.svelte';
</script>

<header class="flex h-16 justify-between">
	<div class="ml-4 flex items-center md:ml-8">
		<a
			class="rounded px-3 py-2 text-black transition-all hover:bg-[#081f2d] hover:text-white"
			href="/"
		>
			Kevin @ Kyaw Thiha
		</a>
	</div>

	<nav />

	<div class="mr-4 flex items-center md:mr-8">
		<a href="/#projects">
			<MyButton text="Projects" />
		</a>
	</div>
</header>
