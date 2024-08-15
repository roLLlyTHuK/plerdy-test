const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 16,
  breakpoints: {
    1440: {
      slidesPerView: 4,
      spaceBetween: 8
    }
  },

  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});