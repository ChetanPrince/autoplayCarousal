
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".container img");
    const totalDuration = 1200000;
    const durationPerElement = totalDuration/images.length;

    images.forEach((image, index)=>{
        image.classList.add("anim");
        setTimeout(()=>{
            // image.classList.remove("anim");
            
        }, index*durationPerElement)
    })

    // for(let i= 0; i<images.length; i++){
    //     images[i].classList.remove("hide");
        
    //      setTimeout(()=>{
    //         images[i].classList.add("hide");
    //      }, i * durationPerElement)}
  });

  //animation duration has to be set to a value and that value has to be devided by total length of images
  //set duration variable to total duration divided by length of images
//    then set that duration value  to style property of each image
// but need to find out how to start each element's starting point and ending point