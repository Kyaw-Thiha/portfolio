export class Project {
	name: string;
	image: string;
	description: string;
	link: string;
	detail: string;
	technologies: string[];

	constructor(name, image, description, link, detail, technologies) {
		this.name = name;
		this.image = image;
		this.description = description;
		this.link = link;
		this.detail = detail;
		this.technologies = technologies;
	}
}
