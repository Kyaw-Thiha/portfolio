import { Project } from "./models";

export const AceGrader = new Project(
  "AceGrader",
  "/images/IIPWebsite/IIPWebsite.png",
  "AI-Powered Automatic Grader",
  "https://ace-grader.vercel.app/",
  `<h2>Description</h2>
     <p>
     This was my inaugural group project where I took the helm as team leader, guiding a group of seven talented friends in
     a collaborative effort to design and code a captivating website. Embarking on a collective endeavor brought forth a
     range of novel challenges that required my problem-solving skills and resilience.
     Beyond the technical aspects, this project provided all eight of us with a valuable opportunity to learn programming
     and further develop our teamwork abilities. Particularly for those planning to pursue a computer science major in
     university, the real-world project experiences gained were invaluable. <br/>
     </p>

     <h2>Technologies Used</h2>
     <p>
        The website was coded using Astro.js as it allows team members with only basic html/css knowledge to
        comfortably collaborate while I could use more advanced frameworks like React by taking advantage of Astro's
        island architecture.
        The UI styling was empowered with tailwind classes which allowed us to quickly iterate on different designs.
        More advanced UI in the alumni page was built using shadcn/ui design. <br/>
     </p>

     <h2>Planning & Collaboration</h2>
     <h3>Wireframing on Figma</h3>
     <img src="/images/IIPWebsite/IIPWebsite-Figma_1.png" alt="Figma-1"/>
     <img src="/images/IIPWebsite/IIPWebsite-Figma_2.png" alt="Figma-2"/>
     <img src="/images/IIPWebsite/IIPWebsite-Figma_3.png" alt="Figma-3"/>
     <p>
        Collaboration with different people meant that it was necessary to design the individual pages on Figma before
        coding it.
        The real-time collaboration feature of Figma allowed us to collectively work on the designs and make tweaks.
        The prototyping feature also allowed us to show the website to our principal and receive feedbacks before
        starting to program.
     </p>

     <h3>Collaboration</h3>
     <h4>Discord</h4>
     <img src="/images/IIPWebsite/IIPWebsite-Discord.png" alt="Discord"/>
     <p>
        To ensure that the communication between team members was streamlined and everyone was on the same page,
        we decided on creating a discord server where we would share resources and make announcements as to who
        is working on what in order to prevent task duplication.
        We would also make frequent meetings on the voice channel of the server to discuss our progress and
        short-term goals. <br/>
     </p>

     <h4>Notion</h4>
     <img src="/images/IIPWebsite/IIPWebsite-Notion.png" alt="Notion"/>
     <p>
        Being a de facto project lead, it was necessary for me to plan out and delegate tasks for each team members.
        Thus, I decided to rely on Notion in order to jot down the long-term goals before splitting them into
        individual tasks which me and other team members could choose to take care of. <br/>
     </p>

     <h4>Code Collaboration</h4>
     <p>
        This code collaboration was proven to be the most difficult challenge we faced collaborating through github
        branches was technically too complex for the team members.
        Thus, we decided on using VS Code share on my laptop so that other members can hop into my workspace.
        The dev server was made public using ngrok in order to allow everyone to see the real-time changes.
     </p>

     <h2>Page Highlights</h2>
     <h3>Home Page</h3>
     <img src="/images/IIPWebsite/IIPWebsite-Home_1.png" alt="Home Page-1"/>
     <img src="/images/IIPWebsite/IIPWebsite-Home_2.png" alt="Home Page-2"/>
     <p>
        The home page where users are linked to all essential pages.
     </p>

     <h3>Alumni Page</h3>
     <img src="/images/IIPWebsite/IIPWebsite-Alumni.png" alt="Alumni"/>

     <h3>Our Team Page</h3>
     <img src="/images/IIPWebsite/IIPWebsite-OurTeam_1.png" alt="Our Team-1"/>
     <img src="/images/IIPWebsite/IIPWebsite-OurTeam_2.png" alt="Our Team-2"/>
     <img src="/images/IIPWebsite/IIPWebsite-OurTeam_3.png" alt="Our Team-3"/>

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
  ["html", "css", "tailwind", "astro", "react"],
);
