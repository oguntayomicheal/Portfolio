const projectData = [
    {
        name : "Multi-Post Stories Gain+Glory",
        description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        featuredImage : "./images/Project-images/Snapshoot_Portfolio.png",
        technologies : {lang1 : "ruby", lang2 : "html", lang3 : "css",lang4 :  "javascript"},
        liveLink : " https://mike-devloper.github.io/Portfolio-Mobile/",
        sourceLink : "https://github.com/Mike-devloper/Portfolio-Mobile",
    },
    {
      name : "Multi-Post Stories Gain+Glory",
      description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
      featuredImage : "./images/Project-images/Snapshoot_Portfolio.png",
      technologies : {lang1 : "ruby", lang2 : "html", lang3 : "css",lang4 :  "javascript"},
      liveLink : " https://mike-devloper.github.io/Portfolio-Mobile/",
      sourceLink : "https://github.com/Mike-devloper/Portfolio-Mobile",
  },
  {
    name : "Multi-Post Stories Gain+Glory",
    description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage : "./images/Project-images/Snapshoot_Portfolio.png",
    technologies : {lang1 : "ruby", lang2 : "html", lang3 : "css",lang4 :  "javascript"},
    liveLink : " https://mike-devloper.github.io/Portfolio-Mobile/",
    sourceLink : "https://github.com/Mike-devloper/Portfolio-Mobile",
},
{
  name : "Multi-Post Stories Gain+Glory",
  description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  featuredImage : "./images/Project-images/Snapshoot_Portfolio.png",
  technologies : {lang1 : "ruby", lang2 : "html", lang3 : "css",lang4 :  "javascript"},
  liveLink : " https://mike-devloper.github.io/Portfolio-Mobile/",
  sourceLink : "https://github.com/Mike-devloper/Portfolio-Mobile",
},
{
  name : "Multi-Post Stories Gain+Glory",
  description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  featuredImage : "./images/Project-images/Snapshoot_Portfolio.png",
  technologies : {lang1 : "ruby", lang2 : "html", lang3 : "css",lang4 :  "javascript"},
  liveLink : " https://mike-devloper.github.io/Portfolio-Mobile/",
  sourceLink : "https://github.com/Mike-devloper/Portfolio-Mobile",
},
{
  name : "Multi-Post Stories Gain+Glory",
  description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  featuredImage : "./images/Project-images/Snapshoot_Portfolio.png",
  technologies : {lang1 : "ruby", lang2 : "html", lang3 : "css",lang4 :  "javascript"},
  liveLink : " https://mike-devloper.github.io/Portfolio-Mobile/",
  sourceLink : "https://github.com/Mike-devloper/Portfolio-Mobile",
},
]

  document.querySelector('.project_large_screen').innerHTML = projectData.map(
      (info) => `
      <div class="grid-container">
          <div class="grid-item1"></div>
              <div class="grid-item">
                  <div class="center1">
                      <h3 class="work_title">${info.name}</h3>
                      <div class="boxed_flex">
                          <div class="boxed">${info.technologies.lang1}</div>
                          <div class="boxed">${info.technologies.lang2}</div>
                          <div class="boxed">${info.technologies.lang3}</div>
                          <div class="boxed">${info.technologies.lang4}</div>
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

for (let i = 0; i <= projectData.length; i += 1) {
  if (i % 2 === 1) {
    document.querySelectorAll('.grid-container')[i].classList.add('order');
  }
}     


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
                        <div class="boxed_pop">${info.technologies.lang3}</div>
            </div>
          </div>

          <div class="desk_pop_btn">
            <div class="desk_poplinks">
            <a href="${info.liveLink}" class="desk_pop_button">
              See Live
              <img src="./icons/popup/live_Icon.png" alt="live site icon" class="pop_icon"/>
            </a>
               <br>
            <a href="${info.sourceLink}" class="desk_pop_button">
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
             <a href="${info.liveLink}" class="pop_button">
            See Live
            <img src="./icons/popup/live_Icon.png" alt="live site icon" class="pop_icon"/>
            </a>
            <br>
            <a href="${info.sourceLink}" class="pop_button">
            See Source
            <img src="./icons/popup/Icon_GitHub.png" alt="github icon" class="pop_icon"/></a>
        </div>
        </div>

    </div>
</div>
`,
  )
  .join('');


document.querySelectorAll('.See_Project').forEach((See_Project) => {
    See_Project.addEventListener('click', () => {
      document.querySelectorAll('.project_background').forEach((project_background) => {
        project_background.style.display = 'block';
      });
    });
  });



document.querySelectorAll('.close').forEach((close) => {
    close.addEventListener('click', () => {
      document.querySelectorAll('.project_background').forEach((project_background) => {
        project_background.style.display = 'none';
      });
    });
  });

