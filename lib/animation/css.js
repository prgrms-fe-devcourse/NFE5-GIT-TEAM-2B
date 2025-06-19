export const setListAnimation = (element) => {
  element.style.opacity = 0;
  element.style.transform = "translateY(20px)";
  element.style.animation = "fadeSlideIn 3s ease forwards";
};
