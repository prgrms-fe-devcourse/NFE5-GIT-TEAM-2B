import { getApiData } from "../api/getApi.js";
import { renderBoard, renderRank } from "./render.js";

export const setRankData = async (endpoint) => {
  const response = await getApiData(endpoint);
  renderRank(response);
};

export const setBoardDataList = async (endpoint) => {
  const response = await getApiData(endpoint);
  renderBoard(response);
};
