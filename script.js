const featured = document.querySelector("#featured-speakers  #speaker-container");
const hamburger = document.querySelector('#hamb');
const navBar = document.querySelector('#mobile-navbar');
const body = document.querySelector('body');
const headline = document.querySelector('#headline');




const speakers = [{
    name: 'Elon Musk',
    title: 'Founder & CEO',
    description: 'Elon Reeve Musk FRS is a naturalized American business magnate and investor. He is the founder, CEO, and Chief Engineer at SpaceX; angel investor, CEO, and product architect of Tesla, Inc.; founder of The Boring Company; and co-founder of Neuralink and OpenAI.',
    image: './assets/elon.jpg',
    class: 'speaker1',
},
{
    name: 'Jeff Bezos',
    title: 'Founder & CEO',
    description: 'Jeffrey Preston Bezos is an American entrepreneur, media proprietor, investor, computer engineer, and commercial astronaut. He is the founder, executive chairman and former president and CEO of Amazon.',
    image: './assets/jeff.jpeg',
    class: 'speaker2',
},
{
    name: 'Mark Zuckerberg',
    title: 'Facebook Co-Founder & CEO',
    description: 'Mark Elliot Zuckerberg is an American media magnate, internet entrepreneur, and philanthropist. He is known for co-founding the social media website Facebook and its parent company Meta Platforms, of which he is the chairman, chief executive officer, and controlling shareholder.',
    image: './assets/mark.jpg',
    class: 'speaker3',
},
{
    name: 'Kara Swisher',
    title: 'Co-Founder of Recode',
    description: 'Kara Anne Swisher is an American journalist. She is a contributing editor at New York, the host of the podcast Sway, and the co-host of the podcast Pivot. From 2018 to 2022, she was an opinion writer for The New York Times, before re-joining Vox Media.',
    image: './assets/Kara.jpg',
    class: 'speaker4',
},
{
    name: 'Robert Scoble',
    title: 'Technological Evangelist',
    description: 'Robert Scoble is an American blogger, technical evangelist, and author. Scoble is best known for his blog, Scobleizer, which came to prominence during his tenure as a technology evangelist at Microsoft.',
    image: './assets/robert.jpg',
    class: 'speaker5',
},
{
    name: 'Dave Winer',
    title: ' American Software Developer',
    description: 'Dave Winer is an American software developer, entrepreneur, and writer who resides in New York City. Winer is noted for his contributions to outliners, scripting, content management, and web services, as well as blogging and podcasting. ',
    image: './assets/dave.jpg',
    class: 'speaker6',
},
];

function populateSpeakers(speaker){
        featured.innerHTML += `<article class="${speaker.class} speaker">
  <div class="speaker-img">
      <img src="${speaker.image}" alt="">
  </div>
        <div class="speaker-desc">
            <h3>${speaker.name}</h3>
            <h4>${speaker.title}</h4>
            <hr>
            <p>${speaker.description}</p>
        </div>
        </article>`;
}


function createSpeakers() {
    for (let i = 0; i < speakers.length; i++) {
        populateSpeakers(speakers[i]);
    }
}

createSpeakers();





hamburger.addEventListener('click', () => {
    headline.classList.toggle('active');
    hamburger.classList.toggle('active');
    navBar.classList.toggle('active');
    body.classList.toggle('active');
});

document.querySelectorAll('.mobile-nav-link').forEach((link) => link.addEventListener('click', () => {
    headline.classList.remove('active');
    hamburger.classList.remove('active');
    navBar.classList.remove('active');
    body.classList.remove('active');
}));