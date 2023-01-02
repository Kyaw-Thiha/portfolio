class Project {
	name: string;
	image: string;
	description: string;
	detail: string;

	constructor(name, image, description, detail) {
		this.name = name;
		this.image = image;
		this.description = description;
		this.detail = detail;
	}
}

export const projects = [
	new Project(
		'IGTools',
		'/images/IGTools.png',
		'Past Paper and Helper Tools for IGCSE',
		'This was the first web project I made with intention of helping me and my friends study IGCSE more effectively. I used html, css with vannila javascript to design these websites and hard coded certain data.'
	),
	new Project(
		'BookKay',
		'/images/IGTools.png',
		'Reading and Writing platform',
		'This was the first web project I made with intention of helping me and my friends study IGCSE more effectively. I used html, css with vannila javascript to design these websites and hard coded certain data.'
	)
];
