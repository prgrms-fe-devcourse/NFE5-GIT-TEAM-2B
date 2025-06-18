import { renderFreeBoard, renderRank } from "./script/api.js";
//메뉴바
const nav = document.querySelector(".menu");

const handleMenuIsactive = (e) => {
  const menu = document.querySelectorAll(".menu >li");
  const pick = e.target;
  if (pick.tagName !== "LI") return;

  menu.forEach((li) => {
    li.classList.remove("is-menu-active");
  });
  pick.classList.add("is-menu-active");
};

nav.addEventListener("click", handleMenuIsactive);

// 초기화
renderRank();
renderFreeBoard();
