import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './slice/cartSlice';
import userReducer from './slice/userSlice';
import counterReducer from './slice/counter';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    counter: counterReducer,
  },
});

export default store;
