import { configureStore } from "@reduxjs/toolkit";
import apiCrudReducer from "./Slices/ApiDataSlice/ApiDataSlice";

export const store = configureStore({
  reducer: {
    data: apiCrudReducer,
  },
});
