import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += item.quantity;
        existingItem.totalPrice += item.price * item.quantity;
      } else {
        state.items.push({
          ...item,
          totalPrice: item.price * item.quantity,
        });
      }

      state.totalQuantity += item.quantity;
      state.totalAmount += item.price * item.quantity;
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items.find((i) => i.id === itemId);

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalAmount -= existingItem.totalPrice;
        state.items = state.items.filter((i) => i.id !== itemId);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
    setCartFromLocalStorage: (state, action) => {
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
      state.totalAmount = action.payload.totalAmount;
    },
  },
});

export const { addToCart, removeFromCart, clearCart, setCartFromLocalStorage } = cartSlice.actions;
export default cartSlice.reducer;
