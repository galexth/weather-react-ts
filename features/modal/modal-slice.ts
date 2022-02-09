import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ModalState = {
  isOpen: boolean;
  title: string;
  message?: string;
};

export type ShowPayload = {
  title: string;
  message?: string;
};

const initialState: ModalState = {
  isOpen: false,
  title: "",
  message: "",
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    show: (state, action: PayloadAction<ShowPayload>) => {
      state.isOpen = true;
      state.title = action.payload.title;
      state.message = action.payload.message;
    },
    close: (state) => {
      state.isOpen = false;
      state.title = "";
      state.message = "";
    },
  },
});

export const { show, close } = modalSlice.actions;

export default modalSlice.reducer;
