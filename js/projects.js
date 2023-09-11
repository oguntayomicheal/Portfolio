const projectData = [
  {
    name : "Crypto Hub",
    description : "A web application for users to check out crypto coins and see current details about each coins. Crypto data is been fetched from an API which helps update the details to the current one.",
    featuredImage : "./images/Project-images/Crypto_hub.png",
    technologies : {lang1 : "React & Redux", lang2 : "HTML/CSS", lang3 : "JavaScript"},
    liveLink : "https://lighthearted-palmier-bad876.netlify.app/",
    sourceLink : "https://github.com/oguntayomicheal/Crypto-Hub",
},

  {
    name : "Budget App",
    description : "Budget-App is a mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.",
    featuredImage : "./images/Project-images/budget_app.png",
    technologies : {lang1 : "Ruby on Rails", lang2 : "RSPEC", lang3 : "PostgreSQL"},
    liveLink : "https://budget-app-jvqh.onrender.com/",
    sourceLink : "https://github.com/oguntayomicheal/Budget-App",
  },


  {
      name : "Space Travelers Hub",
      description : "A single web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions",
      featuredImage : "./images/Project-images/Space_travelers.png",
      technologies : {lang1 : "React & Redux", lang2 : "HTML/CSS", lang3 : "JavaScript"},
      liveLink : "https://space-travelers-react-project.vercel.app/",
      sourceLink : "https://github.com/Masouma864/Space-Travelers-React-Project",
  },

{
  name : "Book Store",
  description : "The Bookstore single page application allows users to store books with the book title and author.",
  featuredImage : "./images/Project-images/Bookstore.png",
  technologies : {lang1 : "React & Redux", lang2 : "HTML/CSS", lang3 : "JavaScript"},
  liveLink : "https://dashing-bombolone-c5308d.netlify.app/",
  sourceLink : "https://github.com/Mike-devloper/Portfolio-Mobile",
},
{
  name : "Science Fun Facts",
  description : "This is a website for learners to check out Science Facts, famous scientists, and also ongoing scientific research works.",
  featuredImage : "./images/Project-images/Sci_facts.png",
  technologies : {lang1 : "HTML", lang2 : "CSS", lang3 : "JavaScript"},
  liveLink : "https://elaborate-llama-b5dc77.netlify.app/",
  sourceLink : "https://github.com/oguntayomicheal/Module-1-Microverse-Capstone-project-",
},
{
  name : "Math magicians",
  description : "Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to-Make simple calculations and also, read a random math-related quote",
  featuredImage : "./images/Project-images/Math_magicians.png",
  technologies :{lang1 : "HTML", lang2 : "CSS", lang3 : "JavaScript"},
  liveLink : "https://incredible-creponne-1c94a4.netlify.app/",
  sourceLink : "https://github.com/oguntayomicheal/math-magicians",
},
]

  document.querySelector('.project_large_screen').innerHTML = projectData.map(
      (info) => `
      <div class="grid-container">
          <div class="grid-item1"><img src= ${info.featuredImage} class="snapshoot1" alt="project image"/> 
          </div>
              <div class="grid-item">
                  <div class="center1">
                      <h3 class="work_title">${info.name}</h3>
                      <div class="boxed_flex">
                         <div class="boxed">${info.technologies.lang1}</div>
                          <div class="boxed">${info.technologies.lang2}</div>
                          <div class="boxed">${info.technologies.lang3}</div>
                      </div>
                    <form action="work.html">
                          <button type="button" class="button2 See_Project btn1">See Project</button>
                    </form> 
                </div>
          </div>
      </div>
 `,
 )
.join('');


document.querySelector('.project').innerHTML = projectData.map(
    (info) =>  `
    <div class="project_background">
    <div class="project-container">
        <div class="img_close">
            <div class="close"><img src="./icons/popup/Disabled_close.png" alt="close icon"> </div>
            <div class="img_fit"><img src= ${info.featuredImage} class="snapshoot" alt="project image"/> </div>
        </div>

        <div class="title_tech_flex">
          <div class="title_tech">
            <h2 class="project_tittle">${info.name}</h2>
            <div class="boxed_flex_pop">
                        <div class="boxed_pop">${info.technologies.lang1}</div>
                        <div class="boxed_pop">${info.technologies.lang2}</div>
                        <div class="boxed_pop">${info.technologies.lang3}</div>
            </div>
          </div>

          <div class="desk_pop_btn">
            <div class="desk_poplinks">
            <a href="${info.liveLink}" class="desk_pop_button" target="_blank">
              See Live
              <img src="./icons/popup/live_Icon.png" alt="live site icon" class="pop_icon"/>
            </a>
               <br>
            <a href="${info.sourceLink}" class="desk_pop_button" target="_blank">
               See Source
                <img src="./icons/popup/Icon_GitHub.png" alt="github icon" class="pop_icon"/></a>
             </div>
          </div>

        </div>

        <div class="description">
        <p class="pop_description">${info.description}</p>
        </div>
        <div class="pop_button_center">
        <div class="poplinks">
             <a href="${info.liveLink}" class="pop_button" target="_blank">
            See Live
            <img src="./icons/popup/live_Icon.png" alt="live site icon" class="pop_icon"/>
            </a>
            <br>
            <a href="${info.sourceLink}" class="pop_button" target="_blank">
            See Source
            <img src="./icons/popup/Icon_GitHub.png" alt="github icon" class="pop_icon"/></a>
        </div>
        </div>

    </div>
</div>
`,
  )
  .join('');


  // Popup window
for (let i = 0; i <= projectData.length; i++) {
  const See_Project = Array.from(document.querySelectorAll('.See_Project'));
  const popup = Array.from(document.querySelectorAll('.project_background'));

  const AllSee_Project = See_Project.map((button, i) => [button, popup[i]]);
  AllSee_Project.forEach((each) => {
    each[0].addEventListener('click', () => {
      each[1].style.display = 'block';
    });
  });
}

document.querySelectorAll('.close').forEach((close) => {
    close.addEventListener('click', () => {
      document.querySelectorAll('.project_background').forEach((project_background) => {
        project_background.style.display = 'none';
      });
    });
  });

  
