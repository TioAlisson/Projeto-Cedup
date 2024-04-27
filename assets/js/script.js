var swiper = new Swiper(".equipe", {
  slidesPerView: 2,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  effect: "slide",
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".btn-next",
    prevEl: ".btn-prev",
  },
  breakpoints: {
    400: {
        slidesPerView: 2,
        spaceBetween: 10,
        centeredSlides: false,
    },
    900: {
      slidesPerView: 4,
      spaceBetween: 26,
      centeredSlides: false,
    },
  },
});

var swiper = new Swiper(".galeria", {
  slidesPerView: 1,
  spaceBetween: 1,
  centeredSlides: true,
  loop: true,
  effect: "slide",
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: ".btn-next-galeria",
    prevEl: ".btn-prev-galeria",
  },
  breakpoints: {
    400: {
        slidesPerView: 2,
        spaceBetween: 10,
        centeredSlides: false,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 24,
      centeredSlides: false,
    },
  },
});
