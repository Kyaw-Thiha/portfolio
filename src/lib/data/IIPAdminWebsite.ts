import { Project } from '$lib/data/models';

export const IIPAdminWebsite = new Project(
	'IIP Website',
	'/images/IIPFunFair/IIPFunFair.png',
	'School Website',
	'https://iip-website.vercel.app/',
	`<h2>Description</h2>
     <p>
        This was the first ever project where I led a team of my 7 friends to collaborate on designing and coding the website. 
        Being a group project meant that I face several new challenges which I had to overcome. 
        For instance, sharing codes proved quite difficult as collaborating through github branches was technically too
        complex for the team members. Thus, we ended up using Visual Studio Live Share in conjunction with ngrok. <br/>
     </p>

     <p>The main features of the website were 
     <ul>
        <li>Browsing through products and shops</li>
        <li>Registering shops</li>
        <li>Preordering products</li>
     </ul>
     </p> 

     <h2>Technologies Used</h2>
     <p>
        The website was decided to be coded using Astro.js as it allows team members with only basic html/css knowledge to
        comfortably collaborate while I could use more advanced frameworks like React by taking advantage of Astro's 
        island architecture. 
        The UI styling was empowered with tailwind classes which allowed us to quickly iterate on different designs. 
        More advanced UI in the alumni page was built using shadcn/ui design. <br/>
     </p>
     <img src="/images/IIPFunFair/IIPFunFair-Figma.png"/>
     
     <h2>Planning & Collaboration</h2>
     <h3>Wireframing on Figma</h3>
     <img src="/images/IIPFunFair/IIPFunFair-Carousal.png" alt="Past Paper"/>
     <p>
        Collaboration with different people meant that it was necessary to design the individual pages on Figma before
        coding it. 
        The real-time collaboration feature of Figma allowed us to collectively work on the designs and make tweaks.
        The prototyping feature also allowed us to show the website to our principal and receive feedbacks before 
        starting to program.
     </p>

     <h3>Collaboration</h3>
     <h4>Discord</h4>
     <img src="/images/IIPFunFair/IIPFunFair-ProductDetail.png" alt="Product Detail"/>
     <p>
        To ensure that the communication between team members was streamlined and everyone was on the same page,
        we decided on creating a discord server where we would share resources and make announcements as to who
        is working on what in order to prevent task duplication.
        We would also make frequent meetings on the voice channel of the server to discuss our progress and
        short-term goals. <br/>
     </p>

     <h4>Notion</h4>
     <img src="/images/IIPFunFair/IIPFunFair-ProductDetail.png" alt="Product Detail"/>
     <p>
        Being a de facto project lead, it was necessary for me to plan out and delegate tasks for each team members.
        Thus, I decided to rely on Notion in order to jot down the long-term goals before splitting them into
        individual tasks which me and other team members could choose to take care of. <br/>
     </p>

     <h4>Code Collaboration</h4>
     <img src="/images/IIPFunFair/IIPFunFair-ProductDetail.png" alt="Product Detail"/>
     <p>
        This code collaboration was proven to be the most difficult challenge we faced collaborating through github 
        branches was technically too complex for the team members.
        Thus, we decided on using VS Code share on my laptop so that other members can hop into my workspace.
        The dev server was made public using ngrok in order to allow everyone to see the real-time changes.
     </p>
     
     <h2>Page Highlights</h2>
     <h3>Home Page</h3>
     <img src="/images/IIPFunFair/IIPFunFair-Preorder.png" alt="Register"/>
     <p>
        The home page where users are linked to all essential pages.
     </p>

     <h3>Alumni Page</h3>
     <img src="/images/IIPFunFair/IIPFunFair-Preorder.png" alt="Register"/>
     <p>
        Displays the list of alumni from the server and, allows full-text searching and filtering.
     </p>

     <h3>Our Team Page</h3>
     <img src="/images/IIPFunFair/IIPFunFair-Preorder.png" alt="Register"/>
     <p>
        Displays the names and images of the team members who worked on this website
     </p>

     <h2>Lessons Learned</h2>
     <p>
        Being the first project in which I had to lead and work with a team, I quickly learned
        the importance of effective communication skills. I had to make frequent discussions with my team
        members in order to coordinate our tasks. <br/>
        I also learned about how powerful delegation can be.
        By asking my team members to choose on work on individual pages, I was able to concentrate on
        complex UI elements like language translator as well as overall layouts.
     </p>
     `,
	['html', 'css', 'tailwind', 'astro', 'react']
);
