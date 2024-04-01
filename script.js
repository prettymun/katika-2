document.addEventListener("DOMContentLoaded", function() {
    var navbarToggle = document.querySelector(".navbar-toggler");
    var navbarCollapse = document.querySelector(".navbar-collapse");
    var contentSection = document.querySelector('.content-section');

    navbarToggle.addEventListener("click", function() {
        navbarCollapse.classList.toggle("show");
        contentSection.classList.toggle('hide-content');
    });
});

// script.js

document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelector('.slides');
    const slideWidth = document.querySelector('.slide').clientWidth;
    let slideIndex = 0;

    function slideNext() {
        if (slideIndex < slides.children.length - 1) {
            slideIndex++;
        } else {
            slideIndex = 0;
        }
        slides.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
    }

    function slidePrev() {
        if (slideIndex > 0) {
            slideIndex--;
        } else {
            slideIndex = slides.children.length - 1;
        }
        slides.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
    }

    setInterval(slideNext, 3000); // Auto slide every 3 seconds
});

