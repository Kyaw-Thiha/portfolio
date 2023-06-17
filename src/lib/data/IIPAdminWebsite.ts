import { Project } from '$lib/data/models';

export const IIPAdminWebsite = new Project(
	'IIP Admin Website',
	'/images/IIPFunFair/IIPFunFair.png',
	'School Admin Website',
	'https://iip-admin-website.vercel.app/',
	`<h2>Description</h2>
     <p>     
         I had the privilege of developing the admin dashboard for managing crucial content such as alumni profiles 
         and announcements for the esteemed IIP school website. Leveraging the power of the T3 stack, built with 
         Next.js (React), trpc, and tailwind, I was able to create a highly efficient admin platform within a 
         remarkably short timeframe. <br/>
     </p>

     <h2>Technologies Used</h2>
     <p>
         The admin website was meticulously crafted utilizing the powerful T3 stack, comprising Next.js (React), trpc, 
         and tailwind. 
         This efficient technology stack facilitated rapid development, enabling me to complete the admin platform in 
         just one month. The frontend user interface was meticulously constructed using shadcn/ui components and 
         templates, seamlessly integrated with the flexibility of tailwind. The database, hosted on planetscale, was 
         effortlessly accessed through the fully-typesafed prisma ORM. To interact with the database, the trpc framework 
         provided a secure and reliable means of communication.
     </p>
     <img src="/images/IIPFunFair/IIPFunFair-Figma.png"/>
     
     <h2>Feature details</h2>
     <h3>Alumni</h3>
     <img src="/images/IIPFunFair/IIPFunFair-Preorder.png" alt="Register"/>
     <p>
        The alumni and their classes can be added, edited and deleted.
     </p>

     <h3>Announcements</h3>
     <img src="/images/IIPFunFair/IIPFunFair-Preorder.png" alt="Register"/>
     <p>
         The announcements can be added, edited and deleted.
     </p>

     <h2>Lessons Learned</h2>
     <p>
      Working with Next.js marked my first foray into coding both the frontend and backend within the same codebase, 
      thanks to the powerful server-side rendering (SSR) capabilities it offers. 
      This approach allowed me to seamlessly integrate frontend and backend logic, resulting in a cohesive and 
      efficient development process. 
      Leveraging the benefits of the Prisma ORM and trpc, I gained a deep appreciation for the significance of 
      end-to-end type safety. This comprehensive approach helped mitigate data-related issues commonly encountered 
      with traditional REST APIs, ensuring a more robust and reliable system overall.
     </p>
     `,
	['next.js', 'tailwind', 'prisma', 'trpc']
);
