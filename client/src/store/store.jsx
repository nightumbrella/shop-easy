import { configureStore } from "@reduxjs/toolkit";
import ModalReducer from "../redux/modalSLice";
import WishlistSlice from "../redux/WishlistSlice";

export const store = configureStore({
  reducer: {
    modal: ModalReducer,
    wishlist: WishlistSlice,
  },
});
