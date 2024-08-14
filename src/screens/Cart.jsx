import { Box, Card, Container, Grid, Typography } from "@mui/material";
import React from "react";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import CartItemWithQuantity from "../components/CartItemWithQuantity";

const Cart = () => {
  const { cartItems} = useSelector((state) => state.cart);

  
  const total = cartItems.reduce(
    (p, c) => p + c.market_data.current_price.inr ,
    0
  );

  if (cartItems.length === 0)
     {
    return (
      <Container sx={{ padding: "80px 0px" }}>
        <Typography variant="h3">No Item In Your Cart</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ padding: "80px 0px" }}>
      <Typography variant="h5">Your Cart : </Typography>
      <Box sx={{ margin: "40px 0px" }}>
        <Grid container spacing={4}> 
          {cartItems.map((cartItem) => (
            <CartItemWithQuantity key={cartItem.id} cartItem={cartItem} />
          ))}
     
        </Grid>
      </Box>
    </Container>
  );
};

export default Cart;
