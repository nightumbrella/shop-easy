import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  modal: false,
};

const ModalReducer = createSlice({
  name: "modal",
  initialState,
  reducers: {
    changeModal: (state, action) => {
      if (state.modal) {
        state.modal = false;
      } else {
        state.modal = true;
      }
    },
  },
});

export default ModalReducer.reducer;
export const {changeModal} = ModalReducer.actions;
export const UseModal = () => useSelector((state) => state.modal);
