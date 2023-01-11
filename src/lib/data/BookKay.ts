import { Project } from '$lib/data/models';

export const BookKay = new Project(
	'BookKay',
	'/images/BookKay/BookKay.png',
	'Book Creator and Reader',
	'https://bookkay.onrender.com',
	`<h2>Description</h2>
    <p>
        This was the second web project I made during the COVID pandemic in mid 2020 with aim to encourage young people to 
        read and write books. I used python django framework for the backend server and used the Vue js framework for the frontend.
     </p>

     <p>The main features of the website were 
     <ul>
        <li>Creating books and publishing them to shop</li>
        <li>Recommending and listing books to reader</li>
        <li>Reading the books in interactive UI</li>
     </ul>
     </p> 

     <h2>Technologies Used</h2>
     <h3>Frontend</h3>  
     <p>
        The frontend of the website was created as a single page application using Vue.js framework. <br/>
        Vue js was further augmented by the UI meta framework known as Quasar js which had pre-built UI components that I was able to 
        utilize in order to create a consistent experience across the website. <br/>
        Once each development version is completed, quasar would be used to 'compile' the files into a compressed production-ready format,
        which would then be hosted on a free static hosting service from render.com. <br/>
        All the code were version controlled using github.
     </p>

     <h3>Backend</h3>  
     <img src="/images/BookKay/BookKay-Admin.png"/>
     
     <p>
        The backend of the website was written in python using the django framework. <br/>
        It was connected to a postgresql database in order to store data while the user generated images were stored on an image cdn <br/>
        All these data were exposed to the frontend using secure REST API endpoints.
     </p>

     <img src="/images/BookKay/BookKay-API.png"/>

     <p>
        Once each development version is completed, docker was used to 'containerise' the codes and host on the heroku free tier 
        (when it used to exist. Now the server is no longer hosted)<br/>
        All the code were version controlled using github.
     </p>
     
     <h2>Feature Details</h2>
     <h3>Creating books</h3>
     <img src="/images/BookKay/BookKay-Editor.png" alt="Past Paper"/>
     <p>
         This editor was used to type in stories in order to create books. Although I initially used a custom built editor(as shown in photo above), 
         I ended up using editor.js due to the block system it has as well as its modularity. <br/>
         One of the main standout features of the editor was the ability to go 'Zen Mode' to help with concentrating on the work at hand. <br/>
         There were also other helping features such as the shortcut hotkeys to navigate.
     </p>

     <h3>Book Recommendation</h3>
     <img src="/images/BookKay/BookKay-Recommendation.png" alt="Past Paper"/>
     <p>
         Based on the genres of previous books read by the user, the server automatically recommends specific type of books to the user.
         Moreover, there were also 'Best of the Day' books which were the books most read for that particular day.
     </p>

     <h3>Book Reader</h3>
     <img src="/images/BookKay/BookKay-Reading.png" alt="Past Paper"/>
     <p>
        This reader was the hardest part of this website and was built over many tedious iterations. <br/>
        The main problem was that user generated books were stored in a single text on database but the library I was using (StPageFlip)
        needed this long text to be sliced into different pages. This was further complicated by the need for the website to be
        responsive for all different devices. <br/>
        My initial solution was to try putting each word one after another until the page overflows, and thus create a new page.
        But the problem with this was that I was too unperformant to the point where certain books took up to 2 minutes 
        in order to load up. <br/>
        Finally, the approach that worked was seperating this long user generated text into blocks(sort of like paragraphs), and 
        adding each block by block until it overflows. Once it overflows, the subblocks from the overflowed text will be added until
        they too overflows and only then, would each words be added.
        This ended up speeding up the loading time to be nearly instantaneous.</br>
     </p>

     <p>
        There was also an experimental feature known as the computer visioned gesture control added to this reader.
        By opening the camera, users were able to control the page navigation using hand gestures (palm open and close) and thus,
        allowed much easier accessibility. <br/>
        There were also other minor features like using hotkeys to navigate between pages and a dictionary built using a wordbank.
     </p>
     

     <h2>Lessons Learned</h2>
     <p>
         The main lesson I learned here was the business side of software development. <br/>
         I started this project with a real intention of making this a real-world website that would be able to encourage young people 
         to spend more of their time writing and reading. <br/>
         However, as I worked more and more, I noticed the lack of interest garnered by my project, so I ended up carrying out a
         product/market analysis and that was when I found of that my website value proposition was weak compared to major players
         in the market like Wattpad. <br/> 
         I also learned about the importance of planning out designs ahead as the lack of planning delays my efforts by quite a huge 
         margin. <br/>
         Nonetheless, it gave me invaluable experience of fully developing a real-world website from scratch and it is these experiences
         that further enable me to make better decisions in my future projects.
     </p>
     `,
	['html', 'scss', 'vue', 'quasar', 'django', 'python']
);
