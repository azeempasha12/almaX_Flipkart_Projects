import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices";  // Correct import

export const store = configureStore({
  reducer: {
    cart: cartReducer,  // Correct slice key
  },
});
