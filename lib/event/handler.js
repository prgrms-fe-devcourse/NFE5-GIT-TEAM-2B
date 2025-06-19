import { addClass, removeClass } from "../utils/attribute.js";
import { setRankData, setBoardDataList } from "../dom/data.js";
import { getNode } from "../utils/getNode.js";

export const handleMenuIsactive = (e) => {
  const menu = document.querySelectorAll(".menu >li");
  const pick = e.target;
  if (pick.tagName !== "LI") return;
  menu.forEach((li) => {
    removeClass(li, "is-menu-active");
  });
  addClass(pick, "is-menu-active");
};

export const handleBoardButton = (e) => {
  const pick = e.target;
  getNode(".comunityContentsBox").innerHTML = "";
  if (pick.tagName !== "BUTTON") return;
  if (pick.id === "group-recruitment") {
    setBoardDataList("groupBoard");
  } else {
    setBoardDataList("freeBoard");
  }
};
