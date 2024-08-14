import React, { useState } from "react";
import CartItem from "./CartItem";
import { color } from "framer-motion";

const CartItemWithQuantity = ({ cartItem }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const total = cartItem?.market_data.current_price.inr * quantity;
  return (
    <div>
      <CartItem cartItem={cartItem} />
      {/* <input
        
        type="number"
        value={quantity}
        onChange={handleQuantityChange}
        min="1"
      /> */}
      {/* <p className="ppp">
        <b>Total</b>: {total.toFixed(2)} INR
      </p> */}
    </div>
  );
};

export default CartItemWithQuantity;
