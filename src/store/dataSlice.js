import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
};

const cursorState = createSlice({
  name: "cursor",
  initialState,
  reducers: {
    showCursor: (state) => {
      state.status = true;
    },
    hideCursor: (state) => {
      state.status = false;
    },
  },
});

export const { showCursor, hideCursor } = cursorState.actions;

export default cursorState.reducer;
