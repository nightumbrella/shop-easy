import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { product } from "../../product";

const wish =
  localStorage.getItem("wishlist") !== null
    ? JSON.parse(localStorage.getItem("wishlist"))
    : [];

const initialState = {
  wishlist: wish,
};

const WishlistReducer = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addWishlist: (state, { payload }) => {
      const existingProducts = state.wishlist.find(
        (wishlist) => wishlist.id === payload
      );
      const findData = product.find((p) => p.id === payload);

      if (existingProducts) {
        state.wishlist = state.wishlist.filter((wish) => wish.id !== payload);
      } else {
        state.wishlist.push(findData);
      }

      localStorage.setItem(
        "wishlist",
        JSON.stringify(state.wishlist.map((item) => item))
      );
    },
  },
});

export default WishlistReducer.reducer;
export const { addWishlist } = WishlistReducer.actions;
export const UseWishlist = () => useSelector((state) => state.wishlist);
