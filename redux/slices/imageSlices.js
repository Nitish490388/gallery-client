// imageSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosClient from "../../src/utils/axiosClient.js";
// Define the initial state
const initialState = {
  images: [],
  status: 'idle',
  error: null,
};

// Define the async thunk to fetch images
export const fetchImages = createAsyncThunk('image/fetchImages', async (_, { getState }) => {
  try {


    const response = await axiosClient.get("/gallery/getImages");
    return response.data.result; // Assuming the API response is an array of images
  } catch (error) {
    throw error;
  }
});

// Create the slice
const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {}, // You can add additional reducers here if needed
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.images = action.payload;
      })
      .addCase(fetchImages.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Export the reducer
export default imageSlice.reducer;
