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

/**
 * Newsletter functionality
 */

const newsletterInput = document.querySelector('#newsletter-input');
const errorPlaceholder = document.querySelector('#error-placeholder');
const formSubmitBtn = document.querySelector('#submit-btn');

const validateInput = (inputValue) => {
    if (inputValue.length == 0) {
        newsletterInput.classList.remove('border-very-dark-blue');
        newsletterInput.classList.add('border-red', 'text-red');
        errorPlaceholder.textContent = errors.empty;
    } else if (inputValue.length > 0 && !emailRegex.test(inputValue)) {
        newsletterInput.classList.remove('border-very-dark-blue');
        newsletterInput.classList.add('border-red', 'text-red');
        errorPlaceholder.textContent = errors.invalid;
    } else {
        newsletterInput.classList.remove('border-red', 'text-red');
        newsletterInput.classList.add('border-very-dark-blue');
        errorPlaceholder.textContent = "";
    }
}

let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let errors = {
    empty: "Please insert an email",
    invalid: "Please insert a valid email",
}

newsletterInput.addEventListener('focusout', () => {
    validateInput(newsletterInput.value);
});

formSubmitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    validateInput(newsletterInput.value);
});