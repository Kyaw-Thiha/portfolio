import { Project } from '$lib/data/models';

export const IIPFunFair = new Project(
	'IIP Fun Fair',
	'/images/IIPFunFair/IIPFunFair.png',
	'School Fun Fair Website',
	'https://iip-funfair.onrender.com/',
	`<h2>Description</h2>
      <p>
        This was an informational website for my school's Christmas fun fair which also accepted pre-orders for the shops that were
        sold by the students. It was made in December of 2022.<br/>
        Remarkably, I managed to finish this website within a span of about <b>5 days</b> and for the first time ever, had my project 
        being utilized in real life with over <b>270 users</b> and <br>30 shops</br> registered by the day of the fun fair.
     </p>

     <p>The main features of the website were 
     <ul>
        <li>Browsing through products and shops</li>
        <li>Registering shops</li>
        <li>Preordering products</li>
     </ul>
     </p> 

     <h2>Technologies Used</h2>
     <h3>Frontend</h3>
     <p>
        The frontend was coded using Vue js with the help of Quasar framework. My prior experience with this tech stack as well as 
        the pre-built UI components of Quasar, contributed heavily towards me finishing this project within 5 days. 
        Moreover, the flexibility of the frameworks meant that I was able to repivot and add new features easily as needed 
        by my fellow friends. <br/>
     </p>

     <p>
        I also planned out many of my UI designs and architectures ahead which further prevented visual bugs and helped in accelerating
        the development.
     </p>
     <img src="/images/IIPFunFair/IIPFunFair-Figma.png"/>

     <h3>Backend</h3>
     <img src="/images/IIPFunFair/IIPFunFair-Supabase.png"/>
     <p>
        The necessity for a short development time meant that for the backend, I opted for a simple solution of using supabase.
        This was a service built on top of Postgresql and had an intuitive UI for data management as well as many pre-built functionalities
        like authentication.
     </p>
     
     <h2>Feature Details</h2>
     <h3>Browsing Through Products</h3>
     <img src="/images/IIPFunFair/IIPFunFair-Carousal.png" alt="Past Paper"/>
     <p>
        A carousal of 5 randomly chosen products for users to look through. These products are randomised every time the page is refreshed.
     </p>
     <img src="/images/IIPFunFair/IIPFunFair-Search.png" alt="Past Paper"/>
     <p>
        The list of all available products with the a feature to text search through them based on product name or description.
     </p>

     <h3>Registering Products</h3>
     <img src="/images/IIPFunFair/IIPFunFair-Register.png" alt="Register"/>
     <p>
        An easy registration of products by only filling up a form which result an automatic creation of well-designed product page.
     </p>
     <img src="/images/IIPFunFair/IIPFunFair-ProductDetail.png" alt="Product Detail"/>

     <h3>Preordering Products</h3>
     <img src="/images/IIPFunFair/IIPFunFair-Preorder.png" alt="Register"/>
     <p>
        A seamless preordering experience for students to buy the products.
     </p>
     <img src="/images/IIPFunFair/IIPFunFair-Invoice.png" alt="Product Detail"/>
     

     <h2>Lessons Learned</h2>
     <p>
        Being the first project that ended up being used by hundreds of people, I learned the importance of having strong security and
        validation rules as some users made fake preorders in order to troll around. <br/>
        I also learned the importance of monitoring the backend data as I was able to compile these to quickly identify bugs and 
        patch them up. <br/>
        Most importantly though, I learned that our inital ideas may not be the best and we must always be ready to <b>pivot</b>. 
        My initial idea was to use a full-fledged ticket system but after testing it, I found out its lack of practicality as the 
        students felt that it was unnecessarily complex. 
        So, I brainstormed back and thought of this more informational approach with pre-order support which eventually worked out
        quite sucessfully.
     </p>
     `,
	['html', 'css', 'vue', 'quasar', 'supabase']
);
