import { Card, Container, Grid, Pagination, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CardItem from "./CardItem";
import { useDispatch, useSelector } from "react-redux";
import { getTrendingCoins } from "../FEATURES/Coins/CoinSlice";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
  const { coins, isLoading } = useSelector((state) => state.coins);

  const { user, message, isError, isSuccess } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTrendingCoins());

    if (!user) {
      navigate("/login");
    }

    if (isError && message) {
      window.alert(message);
    }
  }, [user, isError, message]);

  // useEffect(() => {
  //   if(isSuccess) {
  //     setCoins(coins);
  //   }
  // }, [isSuccess, coins]);

  //
  const [searchTerm, setSearchTerm] = useState("");
  const [fittleredCoin, setfittleredCoin] = useState([]);
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const filteredCoins = coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setfittleredCoin(filteredCoins);
  };

  //pagination
  const [page, setPage] = useState(1);
  const coinsPerPage = 9;

  const indexOfLastCoin = page * coinsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
  const isFilter = fittleredCoin.length === 0 ? coins : fittleredCoin
  const currentCoins = isFilter?.slice(indexOfFirstCoin, indexOfLastCoin);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Container sx={{ padding: "70px 0px " }}>
      <Typography variant="h3" textAlign={"center"} sx={{margin:"20px"}}>
        TOP TRENDING COINS
      </Typography>
      <TextField
        label="Search Coin"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearch}
        sx={{ width: "100%", marginBottom: "20px" }}
      />
      <Card sx={{ margin: "20px 0px" }}>
        <Grid container spacing={3}>
          {currentCoins?.map((coin) => (
            <CardItem key={coin.id} coin={coin} />
          ))}
        </Grid>
      </Card>
      <Pagination
        count={Math.ceil(coins?.length / coinsPerPage)}
        page={page}
        onChange={handlePageChange}
        variant="outlined"
        color="primary"
      />
    </Container>
  );
};

export default Dashboard;
