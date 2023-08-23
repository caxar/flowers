import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";
import favReducer from "./fav/favSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    fav: favReducer,
  },
});
