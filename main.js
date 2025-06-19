import { getGroupBoardData } from "./script/getApi.js";
import {
  renderFreeBoard,
  renderGroupBoard,
  renderRank,
} from "./script/renderApi.js";

// 초기화
const init = () => {
  renderRank();
  renderFreeBoard();
};

init();

//메뉴바
const nav = document.querySelector(".menu");

const handleMenuIsactive = (e) => {
  const menu = document.querySelectorAll(".menu >li");
  console.log(menu);
  const pick = e.target;
  if (pick.tagName !== "LI") return;

  menu.forEach((li) => {
    li.classList.remove("is-menu-active");
  });
  pick.classList.add("is-menu-active");
};

nav.addEventListener("click", handleMenuIsactive);

// 게시판 버튼

const boardButtons = document.querySelector(".buttonBox");
console.log(boardButtons);

const handleBoardButton = (e) => {
  const pick = e.target;
  console.log(pick);
  if (pick.tagName !== "BUTTON") return;
  console.log(boardButtons);
  if (pick.id === "group-recruitment") {
    document.querySelector(".comunityContentsBox").innerHTML = "";
    renderGroupBoard();
  } else {
    document.querySelector(".comunityContentsBox").innerHTML = "";
    renderFreeBoard();
  }
  return;
};
boardButtons.addEventListener("click", handleBoardButton);
