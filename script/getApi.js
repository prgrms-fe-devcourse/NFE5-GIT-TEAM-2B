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
export const getFreeBoardData = async () => {
  try {
    const response = await fetch("http://localhost:3001/freeBoard");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    throw error;
  }
};
