document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".container img");
    const totalDuration = 48; // Total duration for the entire sequence (48s)
    const durationPerElement = totalDuration / images.length; // Duration per image based on total sequence time

    images.forEach((image, index) => {
        image.classList.add("anim"); // Add the animation class to each image
        image.style.animationDuration = `${totalDuration}s`; // Set the full duration for each image
        image.style.animationDelay = `${index * durationPerElement}s`; // Stagger the start time for each image

    });
});
