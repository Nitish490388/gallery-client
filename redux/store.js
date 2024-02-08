import { configureStore } from "@reduxjs/toolkit";
import imageSlices from "./slices/imageSlices.js";
import createImageSlice from "./slices/createImageSlice.js";
import userSlice from "./slices/userSlice.js";
import memberSlices from "./slices/memberSlices.js";

const store = configureStore({
  reducer: {
    gallery: imageSlices,
    create: createImageSlice,
    user: userSlice,
    members: memberSlices
  },
});

export default store;