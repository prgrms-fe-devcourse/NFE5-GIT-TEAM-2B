import { setBoardDataList, setRankData } from "./lib/dom/data.js";
import { bindingEvent } from "./lib/event/listener.js";
document.addEventListener("DOMContentLoaded", init);

function init() {
  bindingEvent();
  console.log("init 실행됨");
  setBoardDataList("freeBoard");
  setRankData("team");
  setRankData("personal");
}
