import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosClient from "../../src/utils/axiosClient.js";

export const addImage = createAsyncThunk(
  "/gallery/createImages",
  async (body) => {
    const { images } = body;
    const response = await axiosClient.post("/gallery/createImages", { images })
    return response.data.result;
  }
);

const initialState = {
  status: 'idle',
  error: null
};

const createImageSclice = createSlice({
  name: "createImage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addImage.pending, (state) => {
      state.status = 'pending'
    })
      .addCase(addImage.fulfilled, (state) => {
        state.status = "succeeded"
      })
      .addCase(addImage.rejected, (state) => {
        state.status = "rejected"
      })
  }
});

export default createImageSclice.reducer;