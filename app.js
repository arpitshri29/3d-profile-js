const container = document.querySelector('.container');
const profile = document.getElementById('profile');

// Animation
container.addEventListener("mousemove", e => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
    profile.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`
});

//
container.addEventListener("mouseenter", e =>{
   profile.style.transition = 'none';
});

// Reset profile to default
container.addEventListener("mouseleave", e => {
    profile.style.transition = 'all 0.5s ease';
   profile.style.transform = `rotateX(0deg) rotateY(0deg)`
});