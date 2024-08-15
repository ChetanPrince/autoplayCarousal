
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll("img");
    const durationPerElement = 8; // Duration for each image in seconds

    images.forEach((image, index) => {
        image.classList.add("anim"); // Add the animation class to each image
        image.style.animationDelay = `${index * durationPerElement}s`; // Set the delay for each image
    });
});
