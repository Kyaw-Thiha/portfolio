import { Project } from '$lib/data/models';

export const Portfolio = new Project(
	'Portfolio Website',
	'/images/Portfolio/Portfolio.png',
	'Portfolio website showcasing all my projects',
	'/',
	`<h2>Description</h2>
    <p>
        This is my portfolio website I made within about 3 days. I made it with an intention of digitalising all my previous projects
        and showcasing them for future references. 
     </p>

     

     <h2>Technologies Used</h2>
     <p>
        The entire website was just a small single page application coded with svelte.js. <br/>
        This is directly hosted in vercel in order for everyone to browse to.
     </p>
     `,
	['html', 'css', 'svelte', 'vercel']
);
