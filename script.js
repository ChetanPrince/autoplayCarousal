// document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    const totalDuration = 48; 
    const durationPerElement = totalDuration / slides.length; 
   
    let counter = 0;

slides.forEach((slide, index) => {
    
    // slide.style.display = "block";
    slide.style.left = `${index * 100}%`;

    slide.classList.add("anim")
    slide.style.animationDuration = `${durationPerElement}s`;
    // slide.style.animationDelay = `${index * durationPerElement}s`;


})
