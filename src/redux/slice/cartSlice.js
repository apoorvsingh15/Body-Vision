import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const cartSlice = createSlice(
  {
    name: 'cart',
    initialState,
    reducers: {
      addToCart: (state, action) => {
        state.items = [...state.items, action.payload];
      },
      deleteFromCart: (state) => {
        state.items = [];
      },

    },
  },
);

// Action creators are generated for each case reducer function
export const { addToCart, deleteFromCart } = cartSlice.actions;

export default cartSlice.reducer;
