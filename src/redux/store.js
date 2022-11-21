import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './slice/cartSlice';
import counterReducer from './slice/counter';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    counter: counterReducer,
  },
});

export default store;
