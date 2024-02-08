import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosClient from "../../src/utils/axiosClient";

const initialState = {
  member: null,
  status: 'idle'
}

export const getMembers = createAsyncThunk("/user/getAllUser", async () => {
  try {
    const response = await axiosClient.get("/user/getmembers");
    console.log(response);
    return response.data.result;
  } catch (error) {
    throw error;
  }
})

const memberSlice = createSlice({
  name: "members",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMembers.fulfilled, (state, action) => {
      state.member = action.payload;
      state.status = 'succeeded';
    })
      .addCase(getMembers.pending, (state, action) => {
        state.member = action.payload;
        state.status = 'loading';
      })
      .addCase(getMembers.rejected, (state, action) => {
        state.member = action.payload;
        state.status = 'failed';
      })
  }
})

export default memberSlice.reducer;