import { createBoard, createRank } from "./create.js";

export const renderRank = (target, data) => {
  target.insertAdjacentHTML("beforeend", createRank(data));
};

export const renderBoard = (target, data) => {
  target.insertAdjacentHTML("beforeend", createBoard(data));
};
