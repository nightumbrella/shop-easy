import { configureStore } from "@reduxjs/toolkit";
import ModalReducer from "../redux/modalSLice";

export const store = configureStore({
  reducer: {
    modal: ModalReducer,
  },
});
