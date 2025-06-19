const URL = "http://localhost:3001";

export const getRankData = async () => {
  try {
    const response = await fetch(`${URL}/rank`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    throw error;
  }
};
export const getFreeBoardData = async () => {
  try {
    const response = await fetch(`${URL}/freeBoard`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    throw error;
  }
};

export const getGroupBoardData = async () => {
  try {
    const response = await fetch(`${URL}/groupBoard`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    throw error;
  }
};
