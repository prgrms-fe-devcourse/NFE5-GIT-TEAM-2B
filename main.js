import { auth } from './auth/index.js';
import { setBoardDataList, setRankData } from './lib/dom/data.js';
import { setDate } from './lib/dom/render.js';
import { bindingEvent } from './lib/event/listener.js';

function init() {
  // 이벤트 바인딩
  bindingEvent();

  // 게시판
  setBoardDataList('freeBoard');

  // // 랭킹
  setRankData('team');
  setRankData('personal');
  setDate();

  // 로그인
  auth.init();
}

document.addEventListener('DOMContentLoaded', init);
