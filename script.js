document.addEventListener("DOMContentLoaded",()=>{
    const container = document.querySelector(".container");
    const images = container.querySelectorAll("img");
    const count = 0;
    images.forEach(image=>{
        image.classList.add("hide");
    })

})