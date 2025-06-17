import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

export const initCarousel = new Swiper(".swiper", {
  loop: true,
  autoplay: true,
  speed: 1000,
  parallax: true,
});
