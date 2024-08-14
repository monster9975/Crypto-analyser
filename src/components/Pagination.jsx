import { Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
// import { Pagination } from "@material-ui/core";

const CryptoCoins = () => {
  const [coins, setCoins] = useState([]);
  const [page, setPage] = useState(1);
  const [coinsPerPage, setCoinsPerPage] = useState(10);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const fetchCoins = async () => {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    const data = await response.json();
    setCoins(data);
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  const indexOfLastCoin = page * coinsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
  const currentCoins = coins.slice(indexOfFirstCoin, indexOfLastCoin);

  return (
    <div>
      {currentCoins.map((coin) => (
        <div key={coin.id}>
          <h2>{coin.name}</h2>
          <p>Price: {coin.current_price}</p>
        </div>
      ))}
      <Pagination
        count={Math.ceil(coins.length / coinsPerPage)}
        page={page}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default CryptoCoins;
