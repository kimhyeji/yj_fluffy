var swiper = new Swiper(".mySwiper-1", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
  rotate: 50,
  stretch: 0,
  depth: 100,
  modifier: 1,
  slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

var swiper = new Swiper(".mySwiper-2", {
  effect: "cards",
  grabCursor: true,
});

// catrgory-swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// SideBar
    function sideBar__show() {
    $('.mobile-sideBar').addClass('active'); 
    }

    function sideBar__hide() {
    $('.mobile-sideBar').removeClass('active'); 
    }


    function sideBar__init() {
    $('.btn_sideBar').click(function() {
        sideBar__show();
    });
    
    $('.clear').click(function() {
        sideBar__hide();
    });
    }

    sideBar__init();