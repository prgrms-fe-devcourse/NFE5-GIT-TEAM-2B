export const createRank = (data) => {
  return /* html */ `
    <div class="${data.rank === 1 ? "isFirst" : "rankingdatas"}">
   <div class="userInfo">
     <p class="ranking ">${data.rank}</p>
     <img
       class="userImg"
       src=${data.userSrc}
       alt="유저"
     />
     <p class="nickname">${data.nickname}</p>
     ${
       data.medalSrc
         ? `<img class="medalImg" src="${data.medalSrc}" alt="메달" />`
         : `<div class="medalImg"></div>`
     }
   </div>
   <div class="rankingRise">
     <img class="upAndDownImg" src=${data.riseSrc} alt="상승" />
     <span class="riseNumber ">${data.riseRank}</span>
   </div>
   </div>
`;
};

export const createBoard = (data) => {
  return /* html */ `<div class="comunityContents">
    <span class="postTag">${data.tag}</span>
    <p class="postTitle">${data.title}</p>
    <span class="createdDate">${data.createdAt}</span>
  </div>
  `;
};
