
document.addEventListener("DOMContentLoaded", () => {
    const hero = document.querySelector(".hero");
    const bg = document.querySelector(".hero-bg");

    if (!hero || !bg) {
        return;
    }

    let latestX = 0;  
    let latestY = 0;  

        const updateBackground = () => {  
            frameRequested = false;
        };

        // Check user's motion preference
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (!prefersReducedMotion) { 
        bg.style.transform = `translate(${latestX}px, ${latestY}px) scale(1.1)`;  
    };  

    const handlePointerMove = (e) => {  
        latestX = (window.innerWidth / 2 - e.clientX) / 40;  
        latestY = (window.innerHeight / 2 - e.clientY) / 40;  

        if (!frameRequested) {  
            frameRequested = true;  
            window.requestAnimationFrame(updateBackground);  
        }  
    };  

    hero.addEventListener("pointermove", handlePointerMove);
});