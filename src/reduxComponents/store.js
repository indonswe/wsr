import React from 'react';
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import theAmountReducer from './thePersonSlice'
import updateFooterSlice from './updateFooterSlice';
import productReducer from './productSlice';

export default configureStore({
  reducer: {counter: counterReducer,
     persons: theAmountReducer,
      textUpdate: updateFooterSlice,
    products: productReducer}
})