import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const existingProducts = state.cart.find((p) => p.id === payload.id);
      if (existingProducts) {
        return;
      } else {
        state.cart.push(payload);
      }
    },
  },
});
