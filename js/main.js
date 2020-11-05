var mySwiper = new Swiper('.swiper-container.speciality__content', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})

var mySwiper2 = new Swiper('.swiper-container.gallery', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 'auto',

  pagination: {
    el: '.swiper-pagination-two-slider',
  },
})

// burger menu

const burger = document.querySelector('.burger');
const header = document.querySelector('.hero__header');

burger.addEventListener('click', () => {
  burger.classList.toggle('burger--active');
  header.classList.toggle('header--active');
});