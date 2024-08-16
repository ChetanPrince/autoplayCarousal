// document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    // const totalDuration = 20; 
    // const durationPerElement = totalDuration / slides.length; 
   
    let counter = 0;

slides.forEach((slide, index) => {

    slide.style.left = `${index * 100}%`

})
const slideImage = () =>{
    slides.forEach(
        (slide)=>{
            slide.style.transform =`translateX(-${counter * 100}%)`
        }
    )
}
   const goPrev = ()=>{
    counter--;
    slideImage();
   }

   const goNext = ()=>{
    counter++;
    slideImage();
   }


   slideImage();

    // });
