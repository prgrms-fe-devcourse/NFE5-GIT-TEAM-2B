import { getFreeBoardData, getRankData, getGroupBoardData } from "./getApi.js";

export const renderRank = async () => {
  try {
    const data = await getRankData();
    let rankingContents;

    data.forEach((item) => {
      let rankingItems = document.createElement("div");
      rankingItems = /* html */ `
         <div class="${item.rank === 1 ? "isFirst" : "rankingItems"}">
        <div class="userInfo">
          <p class="ranking ">${item.rank}</p>
          <img
            class="userImg"
            src=${item.userSrc}
            alt="유저"
          />
          <p class="nickname">${item.nickname}</p>
          ${
            item.medalSrc
              ? `<img class="medalImg" src="${item.medalSrc}" alt="메달" />`
              : `<div class="medalImg"></div>`
          }
        </div>
        <div class="rankingRise">
          <img class="upAndDownImg" src=${item.riseSrc} alt="상승" />
          <span class="riseNumber ">${item.riseRank}</span>
        </div>
        </div>
  `;
      if (item.isTeam) {
        rankingContents = document.querySelector("#team");
      } else {
        rankingContents = document.querySelector("#personal");
      }
      rankingContents.insertAdjacentHTML("beforeend", rankingItems);
    });
  } catch (err) {
    throw Error("데이터 로딩 실패:", err);
  }
};

export const renderFreeBoard = async () => {
  try {
    let coummunityBox = document.querySelector(".comunityContentsBox");
    console.log(coummunityBox);
    const data = await getFreeBoardData();
    data.forEach((item) => {
      let communityContents = document.createElement("div");
      communityContents = /* html */ `<div class="comunityContents">
          <span class="postTag">${item.tag}</span>
          <p class="postTitle">${item.title}</p>
          <span class="createdDate">${item.createdAt}</span>
        </div>
        `;
      coummunityBox.insertAdjacentHTML("beforeend", communityContents);
    });
  } catch (error) {
    throw Error("데이터 로딩 실패:", error);
  }
};

export const renderGroupBoard = async () => {
  try {
    let coummunityBox = document.querySelector(".comunityContentsBox");
    console.log(coummunityBox);
    const data = await getGroupBoardData();
    data.forEach((item) => {
      let communityContents = document.createElement("div");
      communityContents = /* html */ `<div class="comunityContents">
          <span class="postTag">${item.tag}</span>
          <p class="postTitle">${item.title}</p>
          <span class="createdDate">${item.createdAt}</span>
        </div>
        `;
      coummunityBox.insertAdjacentHTML("beforeend", communityContents);
    });
  } catch (error) {
    throw Error("데이터 로딩 실패:", error);
  }
};
