import axios from "axios";
// import "dotenv/config";

const params = {
  headers: {
    Authorization: "Bearer " + process.env.REACT_APP_API_TOKEN,
  },
};

export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(process.env.REACT_APP_API_URL + url, params);
  return data;
};
