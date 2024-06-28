jQuery(document).ready(function () {
  var swiper = new Swiper("#js-gallery-swiper", {
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    slidesPerView: 4,
    spaceBetween: 0,
    speed: 3000,
  });
});
