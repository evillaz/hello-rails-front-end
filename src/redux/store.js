import { configureStore } from '@reduxjs/toolkit';
import greetingSlice from './Greetings/GreetingsSlice';

const store = configureStore({
  reducer: {
    greetings: greetingSlice,
  },
});

export default store;
