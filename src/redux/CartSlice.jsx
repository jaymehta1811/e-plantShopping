import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItem(state, action) {
      const existing = state.items.find(
        item => item.id === action.payload.id
      );

      if (!existing) {
        state.items.push({ ...action.payload, quantity: 1 });
        state.totalQuantity++;
      }
    },

    removeItem(state, action) {
      const item = state.items.find(i => i.id === action.payload);
      state.totalQuantity -= item.quantity;
      state.items = state.items.filter(i => i.id !== action.payload);
    },

    updateQuantity(state, action) {
      const { id, type } = action.payload;
      const item = state.items.find(i => i.id === id);

      if (type === "increment") {
        item.quantity++;
        state.totalQuantity++;
      }

      if (type === "decrement") {
        item.quantity--;
        state.totalQuantity--;
        if (item.quantity === 0) {
          state.items = state.items.filter(i => i.id !== id);
        }
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
