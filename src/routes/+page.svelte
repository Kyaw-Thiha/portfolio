<script>
	import profile from '$lib/images/profile.jpg';
	import { projects } from '$lib/data/projects';
	import MyButton from '$lib/components/myButton.svelte';

	const today = new Date();
	const birthDate = new Date('2004/01/19');

	var age = today.getFullYear() - birthDate.getFullYear();
	var m = today.getMonth() - birthDate.getMonth();
	if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
		age--;
	}
</script>

<svelte:head>
	<title>Kyaw Thiha</title>
	<meta name="description" content="Portfolio Website of Kyaw Thiha @ Kevin" />
</svelte:head>

<section class="flex flex-row items-center justify-center">
	<img width="400" class="rounded-2xl" src={profile} alt="My Profile" />
	<div class="ml-12">
		<h2 class="text-5xl mb-4 font-semibold">Mingalabar 👋</h2>
		<p class="text-2xl leading-relaxed">
			My name is <b>Kevin</b>. I am a {age} years old who loves finding way to solve problems around
			me by using technology.
		</p>
	</div>
</section>

<section id="projects" class="mt-20">
	<h2 class="text-4xl mb-12 text-center">My Projects</h2>

	<div class="project-cards grid grid-cols-2 gap-12">
		{#each projects as project}
			<div class="h-full shadow-card rounded-3xl px-4 py-4">
				<h3 class="text-3xl mb-4 text-center font-semibold">{project.name}</h3>
				<div class="flex items-center justify-center">
					<img class="h-[250px]" src={project.image} alt={project.name} />
				</div>
				<div class="text-center flex flex-col mt-2">
					<h4 class="text-center text-lg mb-4">{project.description}</h4>
					<a href={`/projects/${project.name}`}> <MyButton text={'Learn More'} /></a>
				</div>
			</div>
		{/each}
	</div>
</section>
