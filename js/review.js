const clientReviewsSwiper = new Swiper(".ClientReviews", {
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: "#ClientReviewsCustomNext",
    prevEl: "#ClientReviewsCustomPrev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    }
  },
});

const ClientReviewsSliderNext = document.getElementById(
  "ClientReviews-slider-next"
);
const ClientReviewsSliderPrev = document.getElementById(
  "ClientReviews-slider-prev"
);
const ClientReviewsCustomNext = document.getElementById(
  "ClientReviewsCustomNext"
);
const ClientReviewsCustomPrev = document.getElementById(
  "ClientReviewsCustomPrev"
);

ClientReviewsCustomNext.addEventListener("click", () => {
  ClientReviewsSliderNext.click();
});

ClientReviewsCustomPrev.addEventListener("click", () => {
  ClientReviewsSliderPrev.click();
});
