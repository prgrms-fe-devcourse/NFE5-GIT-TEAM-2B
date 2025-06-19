import { getDate } from "../utils/date.js";
import { getNode } from "../utils/getNode.js";
import { createBoard, createRank } from "./create.js";

export const renderRank = (rankList, endpoint) => {
  let rankingContents =
    endpoint === "team" ? getNode("#team") : getNode("#personal");
  rankList.forEach((item, index) => {
    rankingContents.insertAdjacentHTML("beforeend", createRank(item, index));
  });
};

export const renderBoard = (boardList) => {
  boardList.forEach((item) => {
    let coummunityBox = getNode(".comunityContentsBox");
    coummunityBox.insertAdjacentHTML("beforeend", createBoard(item));
  });
};

export const setDate = () => {
  const dateTag = getNode(".updatedDate");
  dateTag.textContent = getDate();
};
