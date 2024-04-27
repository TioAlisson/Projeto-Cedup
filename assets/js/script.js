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
    },
  },
});
