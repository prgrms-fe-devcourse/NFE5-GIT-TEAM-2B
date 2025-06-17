const imgData = [
  {
    id: 1,
    src: "slide01",
    alt: "눈물",
  },
  {
    id: 2,
    src: "slide02",
    alt: "열일",
  },
  {
    id: 2,
    src: "slide03",
    alt: "뒤짐",
  },
];

const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: true,
  speed: 1000,
  parallax: true,
  pagination: {
    el: ".pagination",
    bulletClass: "bullet",
    bulletActiveClass: "is-active",
    renderBullet: function (index, className) {
      return /* html */ `
  <span class="${className}">
  <img src-="./assets/swiperTest/${data[index].src}" alt="${data[index].alt}"/>
  </span>
      `;
    },
  },
});

swiper
  .on("slideChange", function (e) {
    document.querySelector(".swiper-wrapper").classList.remove("is-active");
  })
  .on("slideChangeTransitionEnd", function () {
    document.querySelector(".swiper-wrapper").classList.remove("is-active");
  });
