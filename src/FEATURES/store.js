import { configureStore } from "@reduxjs/toolkit";
import coinReducer from "../FEATURES/Coins/CoinSlice";
import authReducer from "../FEATURES/Auth/AuthSlice"
import cartReducer from "../FEATURES/cart/CartSlice"


const store = configureStore({
  reducer: {
    coins: coinReducer,
    auth :authReducer,
    cart : cartReducer

  },
});

export default store;
