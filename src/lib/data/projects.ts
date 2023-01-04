import { Project } from '$lib/data/models';
import { IGTools } from '$lib/data/IGTools';

export const projects = [
	IGTools,
	new Project(
		'BookKay',
		'/images/IGTools.png',
		'Reading and Writing platform',
		'',
		'This was the first web project I made with intention of helping me and my friends study IGCSE more effectively. I used html, css with vannila javascript to design these websites and hard coded certain data.',
		[]
	)
];
