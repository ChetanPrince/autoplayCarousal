// document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    const totalDuration = 48; 
    const durationPerElement = totalDuration / slides.length; 
   
    let counter = 0;

slides.forEach((slide, index) => {

    slide.style.left = `${index * 100}%`;

})

for(let i = 0; i<slides.length; i++){
    slides[i].classList.add("anim")
    
    setTimeout(()=>{
        slides[i].classList.remove("anim");
        slides[i].style.display = "none";
    
    }, durationPerElement*1000)
}


    // slide.style.animationDuration = `${durationPerElement}s`;
    // slide.style.animationDelay = `${index * durationPerElement}s`;



