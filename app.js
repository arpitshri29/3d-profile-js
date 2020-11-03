const container = document.querySelector('.container');
const profile = document.getElementById('profile');
const name = document.getElementById('name');
const image = document.getElementById('image');
const description = document.getElementById('description');


// Animation
container.addEventListener("mousemove", e => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
    profile.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`
});

// Animate on hover
container.addEventListener("mouseenter", e =>{
   profile.style.transition = 'none';

   name.style.transform =  'translateZ(150px)';
   name.style.textShadow = '0 2px 3px rgba(0,0,0,.3)';

   image.style.transform =  'translateZ(150px)';

   description.style.transform =  'translateZ(150px)';
   description.style.textShadow = '0 2px 3px rgba(0,0,0,.3)';
});

// Reset profile to default
container.addEventListener("mouseleave", e => {
    profile.style.transition = 'all 0.5s ease';
    profile.style.transform = `rotateX(0deg) rotateY(0deg)`;

    name.style.transform =  'translateZ(0px)';
    name.style.textShadow = 'none';

    image.style.transform =  'translateZ(0px)';

    description.style.transform =  'translateZ(0px)';
    description.style.textShadow = 'none';
});