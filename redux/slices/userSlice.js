import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosClient from "../../src/utils/axiosClient";

const initialState = {
  user: null,
}

export const getUser = createAsyncThunk("/user/getUser", async (_, { getState }) => {
  try {
    const response = await axiosClient.get("/user/getUser");
    console.log(response);
    return response.data.result;
  } catch (error) {
    throw error;
  }
})

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.user = action.payload
    })
  }
})

export default userSlice.reducer;