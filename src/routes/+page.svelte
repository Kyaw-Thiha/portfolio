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

<section class="mt-8 flex flex-col items-center justify-center md:mt-0 md:flex-row">
	<img width="400" class="rounded-2xl" src={profile} alt="My Profile" />
	<div class="mt-4 text-center md:ml-12 md:mt-0 md:text-left">
		<h2 class="mb-4 text-5xl font-semibold">Mingalabar 👋</h2>
		<p class="text-2xl leading-relaxed">
			My name is <b>Kevin</b>. I am a {age} years old who loves finding way to solve problems around
			me by using technology.
		</p>
	</div>
</section>

<section id="projects" class="mt-20">
	<h2 class="mb-12 text-center text-4xl">My Projects</h2>

	<div class="project-cards grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
		{#each projects as project}
			<div class="h-full rounded-3xl px-4 py-4 shadow-card">
				<h3 class="mb-4 text-center text-3xl font-semibold">{project.name}</h3>
				<div class="flex items-center justify-center">
					<img
						class="h-[250px] object-cover md:object-contain"
						src={project.image}
						alt={project.name}
					/>
				</div>
				<div class="mt-2 flex flex-col text-center">
					<h4 class="mb-4 text-center text-lg">{project.description}</h4>
					<a href={`/projects/${project.name}`}> <MyButton text={'Learn More'} /></a>
				</div>
			</div>
		{/each}
	</div>
</section>
