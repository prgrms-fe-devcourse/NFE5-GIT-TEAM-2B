import { getNode } from "../utils/getNode.js";
import { createBoard, createRank } from "./create.js";

export const renderRank = (rankList) => {
  let rankingContents;
  rankList.forEach((item) => {
    if (item.isTeam) {
      rankingContents = document.querySelector("#team");
    } else {
      rankingContents = document.querySelector("#personal");
    }
    rankingContents.insertAdjacentHTML("beforeend", createRank(item));
  });
};

export const renderBoard = (boardList) => {
  boardList.forEach((item) => {
    let coummunityBox = getNode(".comunityContentsBox");
    coummunityBox.insertAdjacentHTML("beforeend", createBoard(item));
  });
};
