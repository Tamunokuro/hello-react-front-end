import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: null,
  message: '',
  created_at: '',
  updated_at: '',
  pending: true,
};

export const fetchGreeting = createAsyncThunk(
  'greeting/fetchGreeting',
  async () => {
    const response = await fetch('http://127.0.0.1:3000/api/v1/greetings');
    const data = await response.json();
    return data;
  },
);

const greetingSlice = createSlice({
  initialState,
  name: 'greeting',
  extraReducers: (builder) => builder
    .addCase(fetchGreeting.fulfilled, (_, action) => ({ ...action.payload, pending: false })),
});

export default greetingSlice.reducer;
