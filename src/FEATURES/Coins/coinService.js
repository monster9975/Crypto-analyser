import axios, { Axios } from "axios";

const fetchCoins = async () => {
  try {
    const res = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200"
    );
    console.log("response", res);

    return res.data;
  } catch (error) {
    console.error("error fetching");
    throw error;
  }
};

const fetchCoin = async (id) => {
  const res = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
  console.log(res.data);
  
  return res.data;

  // console.log(id);
};
const coinService = {
  fetchCoins,
  fetchCoin,
};
export default coinService;

