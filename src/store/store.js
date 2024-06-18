import { configureStore } from "@reduxjs/toolkit";
import cursorStateReducer from "./dataSlice";

const store = configureStore({
  reducer: {
    cursor: cursorStateReducer,
  },
});

export default store;
