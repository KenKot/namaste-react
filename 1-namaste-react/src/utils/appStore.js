import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  //slices

  // for each slice we have a different reducer, which is responsible
  //   for updating this store

  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
