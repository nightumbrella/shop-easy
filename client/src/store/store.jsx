import { configureStore } from "@reduxjs/toolkit";
import ModalReducer from "../redux/modalSLice";
import WishlistSlice from "../redux/WishlistSlice";
import CartSlice from "../redux/CartSlice";

export const store = configureStore({
  reducer: {
    modal: ModalReducer,
    wishlist: WishlistSlice,
    cart: CartSlice,
  },
});
