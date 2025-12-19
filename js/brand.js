document.addEventListener("DOMContentLoaded", function () {
  // Selector changed from '.brands-slider' to '.rd-brands-slider'
  new Swiper(".rd-brands-slider", {
    // Enable centered slides (key for the effect)
    centeredSlides: true,
    // Number of slides visible at once (adjust based on screen size/design)
    slidesPerView: 5,
    // Space between slides
    spaceBetween: 40,
    // Make the slider loop infinitely
    loop: true,

    // Define different settings for various screen sizes
    breakpoints: {
      // When window width is >= 320px (mobile)
      320: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      // When window width is >= 640px (tablet)
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      // When window width is >= 1024px (desktop)
      1024: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },

    // Auto-Play (Optional, but common for logo sliders)
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
});
