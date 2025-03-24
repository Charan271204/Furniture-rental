document.addEventListener('DOMContentLoaded', function () {
    const reviewBoxes = document.querySelectorAll('.review-box');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.5 
    });

    reviewBoxes.forEach(box => {
        observer.observe(box); 
    });
});
reviewBoxes.forEach((box, index) => {
    box.style.transitionDelay = `${index * 0.2}s`; 
    observer.observe(box);
});
