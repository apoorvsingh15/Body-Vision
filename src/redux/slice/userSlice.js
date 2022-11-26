import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userEmail: '',
  userToken: '',
};

export const cartSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInSuccess: (state, action) => {
      state.userEmail = action.payload.userEmail;
      state.userToken = action.payload.token;
    },
    logout: (state) => {
      state.userEmail = '';
      state.userToken = '';
    },
  },
});

// Action creators are generated for each case reducer function
export const { signInSuccess, logout } = cartSlice.actions;

export default cartSlice.reducer;
