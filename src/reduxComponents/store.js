import React from 'react';
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import theAmountReducer from './thePersonSlice'

export default configureStore({
  reducer: {counter: counterReducer, amountOfPersons: theAmountReducer}
})