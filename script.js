document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".container img");
    const totalDuration = 20; 
    const durationPerElement = totalDuration / images.length; 
    // function animationloop(){

        images.forEach((image, index) => {
                image.classList.add("anim"); 
                image.style.animationDuration = `${durationPerElement}s`; 
                image.style.animationDelay = `${index * durationPerElement}s`; 
                console.log(index)
                setTimeout(()=>{
                    image.classList.remove("anim")
                }, durationPerElement * 1000);
      
        });
    // }
    // animationloop();

    });
