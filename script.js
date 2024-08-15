document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".container img");
    const totalDuration = 48; 
    const durationPerElement = totalDuration / images.length; 

    // images.forEach((image, index) => {
    //     // image.classList.add("anim"); 
        
    //     image.style.animationDuration = `${durationPerElement}s`; // Stagger the start time for each image
    //     image.style.animationDelay = `${index * durationPerElement}s`; // Stagger the start time for each image
        
    // });
    for(let i=0; i<images.length; i++){
        images[i].style.animationDuration = `${durationPerElement}s`; // Stagger the start time for each image
        images[i].style.animationDelay = `${i * durationPerElement}s`; // Stagger the start time for each image

    }
});
