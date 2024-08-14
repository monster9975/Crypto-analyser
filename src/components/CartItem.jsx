import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { remove } from "../FEATURES/cart/CartSlice";
import { useDispatch } from "react-redux";
import CartItemWithQuantity from "./CartItemWithQuantity";

const CartItem = ({ cartItem, updateQuantity }) => {
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(remove(id));
  };
    const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const total = cartItem?.market_data.current_price.inr * quantity;
  
  

  return (
    <Grid item xs={1} sm={12} sx={{width:"500px"}} >
      <Card>
        <CardMedia sx={{ height:"100px" ,width:"100px" }} image={cartItem?.image?.large} />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {cartItem.name}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Price : {cartItem?.market_data.current_price.inr.toLocaleString()} INR
          </Typography>
          <Typography  color="black" variant="body1">
            <input
        
        type="number"
        value={quantity}
        onChange={handleQuantityChange}
        min="1"
        
       />
      <h5 className="ppp">
        <b>Total</b>: {total.toLocaleString()} INR
      </h5>
           
            
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => handleRemove(cartItem.id)}
            size="small"
            variant="contained"
            color="error"
          >
            Remove
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CartItem;
