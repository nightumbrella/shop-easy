import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { product } from "../../product";

const initialState = {
  wishlist: [],
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
      
      state.wishlist.push(findData);
    },
  },
});

export default WishlistReducer.reducer;
export const { addWishlist } = WishlistReducer.actions;
export const UseWishlist = () => useSelector((state) => state.wishlist);
