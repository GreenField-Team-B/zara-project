import {configureStore} from '@reduxjs/toolkit';
import user from './userSlice.js';
import products from './productSlice.js'

const store = configureStore({
    reducer: {
      user,
    products

    }
  })

export default store;
