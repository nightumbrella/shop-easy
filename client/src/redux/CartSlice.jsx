import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  cart: [],
  amount: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const existingProducts = state.cart.find((p) => p.id === payload.id);
      if (existingProducts) {
        state.amount += 1;
      } else {
        state.cart.push(payload);
      }
    },
  },
});

export default CartSlice.reducer;
export const { addToCart } = CartSlice.actions;
export const UseCart = () => useSelector((state) => state.cart);
