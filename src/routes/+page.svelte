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
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="hero">
	<img class="profile-img" src={profile} alt="My Profile Image" />
	<div class="hero-text">
		<h2>Mingalabar 👋</h2>
		<p>
			My name is <b>Kevin</b>. I am a {age} years old who loves finding way to solve problems around
			me by using technology.
		</p>
	</div>
</section>

<section id="projects" class="projects">
	<h2>My Projects</h2>

	<div class="project-cards">
		{#each projects as project}
			<div class="project-card">
				<div class="project-card-container">
					<div class="project-card-contents">
						<h3>{project.name}</h3>
						<img src={project.image} alt={project.name} />
						<h4>{project.description}</h4>
						<div class="btn">
							<a href={`/projects/${project.name}`}> <MyButton text={'Learn More'} /></a>
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<style lang="scss" scoped>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	.hero {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		.profile-img {
			width: 400px;
			border-radius: 32px;
		}

		.hero-text {
			margin-left: 48px;

			h2 {
				color: black;
				font-size: 60px;
				font-weight: 600;
			}

			p {
				font-size: 24px;
			}
		}
	}

	.projects {
		margin-top: 48px;

		h2 {
			font-size: 40px;
		}

		.project-cards {
			width: 100%;
			margin-top: 32px;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			flex-wrap: wrap;

			.project-card {
				width: 50%;

				.project-card-container {
					display: flex;
					flex-direction: row;
					justify-content: center;
					align-items: center;

					.project-card-contents {
						border-radius: 32px;
						box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
						padding: 0 16px;
					}
				}

				h3 {
					font-size: 32px;
					text-align: center;
				}

				img {
					width: 300px;
				}

				h4 {
					font-size: 16px;
					text-align: center;
				}

				.btn {
					text-align: center;
					margin-bottom: 18px;
					margin-top: 12px;
				}
			}
		}
	}
</style>
