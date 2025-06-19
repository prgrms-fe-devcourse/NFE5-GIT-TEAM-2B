import { addClass, removeClass } from "../css/attribute.js";
import { setApiData } from "../dom/data.js";
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
    setApiData("groupBoard");
  } else {
    setApiData("freeBoard");
  }
  return;
};
