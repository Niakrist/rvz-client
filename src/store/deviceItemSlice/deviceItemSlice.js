import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDeviceItem = createAsyncThunk(
  "deviceItem/fetchDeviceItem",
  async (url) => {
    const { data } = await axios.get(
      `http://localhost:5000/api/v1/device/${url}`
    );
    return data;
  }
);

const deviceItemSlice = createSlice({
  name: "deviceItem",
  initialState: {
    isLoadingDeviceItem: false,
    deviceItem: "",
    errroDeviceItem: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDeviceItem.pending, (state) => {
        state.isLoadingDeviceItem = true;
        state.errroDeviceItem = null;
      })
      .addCase(fetchDeviceItem.fulfilled, (state, action) => {
        state.isLoadingDeviceItem = false;
        state.deviceItem = action.payload;
      })
      .addCase(fetchDeviceItem.rejected, (state, action) => {
        state.isLoadingDeviceItem = true;
        state.errroDeviceItem = action.payload;
      });
  },
});

export default deviceItemSlice.reducer;
