import { configureStore } from '@reduxjs/toolkit';
import greetingSlice from './greeting/greetingSlice';

const store = configureStore({
  reducer: {
    greeting: greetingSlice,
  },
});

export default store;
