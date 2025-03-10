import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./reducers/modalSlice";

const store = configureStore({
  reducer: {
    modal: modalReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export default store;
