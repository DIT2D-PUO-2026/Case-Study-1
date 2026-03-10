
document.addEventListener("DOMContentLoaded", () => {
    const hero = document.querySelector(".hero");
    const bg = document.querySelector(".hero-bg");

    if (!hero || !bg) {
        return;
    }

    let latestX = 0;  
    let latestY = 0;  
    let frameRequested = false;  

    const updateBackground = () => {  
        frameRequested = false;  
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