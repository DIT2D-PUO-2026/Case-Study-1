const hero = document.querySelector(".hero");
const bg = document.querySelector(".hero-bg");

hero.addEventListener("mousemove",(e)=>{

const x = (window.innerWidth/2 - e.clientX)/40;
const y = (window.innerHeight/2 - e.clientY)/40;

bg.style.transform = `translate(${x}px, ${y}px) scale(1.1)`;

});