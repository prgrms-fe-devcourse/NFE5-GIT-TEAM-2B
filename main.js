import { getRankData, renderRank } from "./script/api.js";

const nav = document.querySelector(".menu");
// 메뉴바
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

//api 가져옴

renderRank();

// 화면에 뿌리는 방법
// 1. 요소 만들기
