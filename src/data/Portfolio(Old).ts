import { Project } from "./models";

export const Portfolio = new Project(
  "Portfolio (Old) Website",
  "/images/Portfolio/Portfolio.png",
  "Portfolio website showcasing all my projects",
  "/",
  `<h2>Description</h2>
    <p>
        This is my first portfolio website I designed in the first week of January 2023. I made it with an intention of digitalising all my previous projects
        and showcasing them for future references. 
     </p>

     

     <h2>Technologies Used</h2>
     <p>
        The entire website was just a small single page application coded with svelte.js. <br/>
        This is directly hosted in vercel in order for everyone to browse to.
     </p>

     <img src="/images/Portfolio/Portfolio-Project-List.png"/>
     <img src="/images/Portfolio/Portfolio-Project-1.png"/>
     <img src="/images/Portfolio/Portfolio-Project-2.png"/>
     <img src="/images/Portfolio/Portfolio-Project-3.png"/>
     `,
  ["html", "css", "svelte", "vercel"],
);
