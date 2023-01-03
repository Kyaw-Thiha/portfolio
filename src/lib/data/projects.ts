class Project {
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

export const projects = [
	new Project(
		'IGTools',
		'/images/IGTools.png',
		'Past Paper and Helper Tools for IGCSE',
		'https://kyaw-thiha.github.io/IGtools/',
		`<h2>Description</h2>
		<p>
			This was the first web project I made around 2019 with intention of helping me and my friends study IGCSE more effectively.
		 	I used html, css with vannila javascript to design these websites and hard coded certain data.
		 </p>

		 <p>The main features of the website were 
		 <ul>
		 	<li>Browsing and obtaining past papers</li>
			<li>Practising business studies key terms</li>
			<li>Looking up computer science pre-release solutions</li>
		 </ul>
		 </p> 
		 
		 <h2>Feature Details</h2>
		 <h3>Past Papers</h3>
		 <p>
		 	The main aim of this feature was to simplify the process of browsing past papers. 
			Most paperpaper websites at that time were filled with ads and the 'raw' paper codes were hard to understand and navigate. <br/>
			So, I decided to use a much more intuitive side bar to navigate between subjects and tabs to select between different seasons.
			Then, I created links for each papers the actual past paper resource hosted on a different website. <br/>
			The funny thing was I manually copy and pasted all these past paper as I wasn't using any frameworks and didn't know I could
			just loop and render them. Thus, it was very time-consuming and exhausting for me but at least I got it done.
		 </p>
		 <h3>Business Key Term Practice</h3>
		 <p>
		 	The feature's purpose was to allow students to practise their business studies definitions. 
			It was achieved by allowing students to enter the key terms and programmatically check if the student was correct or not. <br/>
			For each key term, I checked if the user answer contain certain key words and their synonyms and output correct if all key words are present. </br>
			Remarkably, this was most likely my first time using javascript.
		 </p>
		 <h3>Computer Science Pre-Release</h3>
		 <p>
		 	This feature helped students obtain past paper pre-release solutions. Pre-release materials were IGCSE computer science practical questions that asked 
			the student to program given tasks. The question was given out ahead for students to prepare before exam and thus, is called pre-release. <br/>
			For each pre-release questions per past paper, I wrote up well-commented solutions in python on a code hosting website known as repl.it and 
			linked it back in my website. Thus, students could search specific solution based on year and season and follow the link to my python code on repl.it.
		 </p>

		 <h2>Lessons Learned</h2>
		 <p>
		 	Being my first 'real' programming project, I learned a lot about web design and how the process of writing codes and deploying these codes work. <br/>
			In hindsight evaluation, I should have better researched about web designing beforehand as programming a content-heavy website of such scale without any
			frontend frameworks was inefficient and made my codes extremely hard to maintain and further develop. 	<br/>
			Most importantly, I also learned that <b>'Great things are not created by great people but by great teams'</b> because working this as a solo project took
			a lot of my time, and lack of idea from different people meant the UI I designed felt somewhat lacking in nature. 
		 </p>
		 `,
		['html', 'css', 'javascript', 'python']
	),
	new Project(
		'BookKay',
		'/images/IGTools.png',
		'Reading and Writing platform',
		'',
		'This was the first web project I made with intention of helping me and my friends study IGCSE more effectively. I used html, css with vannila javascript to design these websites and hard coded certain data.',
		[]
	)
];
