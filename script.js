document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    const totalDuration = 48; 
    const durationPerElement = totalDuration / slides.length; 

    let currentSlide = 0;

    const showSlide = (index) => {
        // Reset all slides
        slides.forEach(slide => {
            slide.classList.remove("anim");
            slide.style.opacity = 0;
        });

        // Show the current slide
        slides[index].classList.add("anim");
        slides[index].style.opacity = 1;

        // Set the next slide to show after the current one
        setTimeout(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }, durationPerElement * 1000);
    };

    // Start the slideshow with the first slide
    showSlide(currentSlide);
});

// document.addEventListener("DOMContentLoaded", function() {
//     const slides = document.querySelectorAll(".slide");
//     const totalDuration = 20;
//     const durationPerElement = totalDuration / slides.length;

//     let currentSlide = 0;

//     const showSlide = () => {
//         // Reset all slides
//         slides.forEach((slide, index) => {
//             slide.style.opacity = 0;
//             slide.style.visibility = 'hidden';
//             slide.style.transform = `translateX(100%)`;
//         });

//         // Show and animate the current slide
//         slides[currentSlide].style.visibility = 'visible';
//         slides[currentSlide].style.opacity = 1;
//         slides[currentSlide].style.transform = `translateX(0%)`;

//         // Move the next slide into position (off-screen, ready to slide in)
//         const nextSlide = (currentSlide + 1) % slides.length;
//         slides[nextSlide].style.transform = `translateX(-100%)`;

//         // Calculate the next slide index
//         currentSlide = nextSlide;
//     };

//     // Initialize the first slide
//     showSlide();

//     // Set interval to change the slide after each durationPerElement time
//     setInterval(showSlide, durationPerElement * 1000);
// });
