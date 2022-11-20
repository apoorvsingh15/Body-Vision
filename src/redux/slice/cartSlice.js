import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: {},
};

export const cartSlice = createSlice(
  {
    name: 'cart',
    initialState,
    reducers: {
      addToCart: () => { },
      deleteFromCart: () => { },

    },
  },
);

// Action creators are generated for each case reducer function
export const { } = cartSlice.actions;

export default cartSlice.reducer;
