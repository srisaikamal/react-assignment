import axios from "axios";

export const getAllQuestions = async (count) => {
  const data = await axios.get(
    `https://api.stackexchange.com/2.2/search/advanced?page=${count}&pagesize=20&o%20rder=desc&sort=activity&site=stackoverflow`
  );
  return data?.data?.items;
};
