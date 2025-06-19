import { auth } from './auth/index.js';
import { setBoardDataList, setRankData } from './lib/dom/data.js';
import { setDate } from './lib/dom/render.js';
import { bindingEvent } from './lib/event/listener.js';
document.addEventListener('DOMContentLoaded', init);

function init() {
  bindingEvent();
  setBoardDataList('freeBoard');
  setRankData('team');
  setRankData('personal');
  setDate();

  auth.init();
}
