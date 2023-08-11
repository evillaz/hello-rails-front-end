import { configureStore } from '@reduxjs/toolkit';
import greetingSlice from './Greetings/GreetingsSlice';

export const store = configureStore({
  reducer: {
    greetings: greetingSlice,
  },
});