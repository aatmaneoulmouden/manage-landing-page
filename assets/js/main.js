/**
 * Header menu 
 */
const openMenuBtn = document.querySelector('#open-mobile-menu');
const closeMenuBtn = document.querySelector('#close-mobile-menu');
const menu = document.querySelector('#menu');

openMenuBtn.addEventListener('click', () => {
    openMenuBtn.classList.add('hidden');
    menu.classList.remove('hidden');
});

closeMenuBtn.addEventListener('click', () => {
    openMenuBtn.classList.remove('hidden');
    menu.classList.add('hidden');
})

/**
 * Testimonials slider
 */
var swiper = new Swiper(".testimonialSwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});