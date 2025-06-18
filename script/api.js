export const getRankData = async () => {
  try {
    const response = await fetch("http://localhost:3001/rank");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    throw error;
  }
};

export const renderRank = async () => {
  try {
    const data = await getRankData();
    let rankingContents;
    data.forEach((item) => {
      let rankingItems = document.createElement("div");
      rankingItems = /* html */ `
       <div class="${item.rank === 1 ? "is-first" : "ranking-items"}">
      <div class="user-info">
        <p class="ranking ">${item.rank}</p>
        <img
          class="user-img"
          src=${item.userSrc}
          alt="유저"
        />
        <p class="nickname">${item.nickname}</p>
        ${
          item.medalSrc
            ? `<img class="medal-img" src="${item.medalSrc}" alt="메달" />`
            : `<div class="medal-img"></div>`
        }
      </div>
      <div class="ranking-rise">
        <img class="up-and-down-img" src=${item.riseSrc} alt="상승" />
        <span class="rise-number">${item.riseRank}</span>
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
    console.error("데이터 로딩 실패:", err);
  }
};
