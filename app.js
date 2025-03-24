document.addEventListener('DOMContentLoaded', function () {
    const reviewBoxes = document.querySelectorAll('.review-box');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // Stop observing once the animation is triggered
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the element is visible
    });

    reviewBoxes.forEach(box => {
        observer.observe(box); // Start observing each review box
    });
});
reviewBoxes.forEach((box, index) => {
    box.style.transitionDelay = `${index * 0.2}s`; // Adds 0.2s delay between each box
    observer.observe(box);
});
