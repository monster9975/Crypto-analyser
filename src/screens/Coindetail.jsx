import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Snackbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import Loading from "../components/Loading";
import { add } from "../FEATURES/cart/CartSlice";
import { getCoin } from "../FEATURES/Coins/CoinSlice";



const Coindetail = () => {
  const { coin, isLoading, isError, isSuccess } = useSelector(
    (state) => state.coins
  );
 console.log(coin);
 
  const { id } = useParams();
  const dispatch = useDispatch();

  // Handle Add To Cart

  const handleAddToCart = (coin) => {
    // const isCoinAlreadyInCart = cartItems.find((item) => item.id === coin.id);
    // const cartItems = cartItems(); // Get the current cart items
    // if (!isCoinAlreadyInCart) {
      dispatch(add(coin));
      setOpen(true);
    // }
  };

  // Snack Bar with material ui

  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    dispatch(getCoin(id));
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (!coin.id) {
    return (
      <Container sx={{ padding: "80px 0px" }}>
        <Typography variant="h4" textAlign={"center"} color={"error"}>
          Something Went Wrong...
        </Typography>
      </Container>
    );
  }

  return (
    <Container
      sx={{
        padding: "10px 0px",
        border: "1px solid grey",
        margin: "100px 150px",
      }}
    >
      <Card
        x={{
          padding: "10px 0px",
          border: "1px solid grey",
          margin: "100px 200px",
        }}
      >
        <CardMedia />
        <img src={coin.image.small} alt="" />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Name : {coin.id}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            Description : {coin.description.en}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Symbol : {coin.symbol}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Price : {coin.market_data.current_price.usd}$
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="secondary">
            <a className="aa" target="_blank" href={coin.links.homepage[0]}>
              Official Website
            </a>
          </Button>

          <Button
            variant="contained"
            color="success"
            onClick={() => handleAddToCart(coin)}
          >
            Add To Cart
          </Button>
        </CardActions>
      </Card>
      <div>
        <Snackbar
          open={open}
          autoHideDuration={5000}
          onClose={handleClose}
          message="Item Added To Cart"
        />
      </div>

    </Container>
  );
};

export default Coindetail;


  
