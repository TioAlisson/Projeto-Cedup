AOS.init({disable: 'mobile'});

var swiper = new Swiper(".equipe", {
  slidesPerView: 2,
  spaceBetween: 10,
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

Fancybox.bind("[data-fancybox]", {
});

// NAVBAR FIXED > 10
//use window.scrollY
let scrollpos = window.scrollY;
let header = document.getElementById("menu");

function add_class_on_scroll() {
    header.classList.add("compressed");
}

function remove_class_on_scroll() {
    header.classList.remove("compressed");
}

window.addEventListener('scroll', function(){ 
    //Here you forgot to update the value
    scrollpos = window.scrollY;

    if(scrollpos > 10){
        add_class_on_scroll();
    }
    else {
        remove_class_on_scroll();
    }
});

// SELECT CURSOS
document.addEventListener("DOMContentLoaded", function () {
  const cursosSelector = document.getElementById('cursosSelector');
  const tabContent = document.getElementById('cursosContent');

  cursosSelector.addEventListener('change', function (event) {
      const selectedValue = event.target.value;

      const tabPanes = tabContent.querySelectorAll('.tab-pane');
      tabPanes.forEach(function (tabPane) {
          tabPane.classList.remove('show', 'active');
      });
      
      const targetTabPane = document.getElementById(selectedValue);
      if (targetTabPane) {
          targetTabPane.classList.add('show', 'active');
      }
  });
});document.addEventListener("DOMContentLoaded", function () {
    const cursosSelector = document.getElementById('cursosSelector');
    const tabContent = document.getElementById('cursosContent');

    cursosSelector.addEventListener('change', function (event) {
        const selectedValue = event.target.value;

        const tabPanes = tabContent.querySelectorAll('.tab-pane');
        tabPanes.forEach(function (tabPane) {
            tabPane.classList.remove('show', 'active');
        });
        
        const targetTabPane = document.getElementById(selectedValue);
        if (targetTabPane) {
            targetTabPane.classList.add('show', 'active');
        }
    });
});
