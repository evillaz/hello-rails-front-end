import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGreeting = createAsyncThunk(
  'greeting/fetchGreeting',
  async () => {
    try {
      const response = await axios.get(
        'http://localhost:3000/api/random_greeting',
      );
      return response.data.greeting;
    } catch (error) {
      return error.message;
    }
  },
);

const initialState = {
  isLoading: true,
  error: null,
};

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchGreeting.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchGreeting.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        greeting: action.payload,
      }))
      .addCase(fetchGreeting.rejected, (state, action) => ({
        ...state,
        error: action.payload,
        isLoading: false,
      }));
  },
});

export default greetingSlice.reducer;
