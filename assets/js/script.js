let hamburger = document.querySelector('.hamburger-menu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-active');
});

let bookmark = document.querySelector('.bookmark');
let navCollapse = document.querySelector('.header-nav__collapse');
bookmark.addEventListener('click', () => {
  bookmark.classList.toggle('is-active');
  navCollapse.classList.toggle('is-active');
});

var swiper = new Swiper("#swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
    
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    620: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    920: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

var swiper2 = new Swiper("#swiper2", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
    
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    920: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});