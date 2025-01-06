import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDevice = createAsyncThunk("device/fetchDevice", async () => {
  const { data } = await axios.get("http://localhost:5000/api/v1/device");
  return data;
});

const deviceSlice = createSlice({
  name: "device",
  initialState: {
    isLoasdinDevice: false,
    devices: [],
    count: 0,
    errorDevice: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDevice.pending, (state) => {
        state.isLoasdinDevice = true;
        state.errorDevice = null;
      })
      .addCase(fetchDevice.fulfilled, (state, action) => {
        state.isLoasdinDevice = false;
        state.devices = action.payload.rows;
        state.count = action.payload.count;
      })
      .addCase(fetchDevice.rejected, (state, action) => {
        state.isLoasdinDevice = false;
        state.errorDevice = action.payload;
      });
  },
});

export default deviceSlice.reducer;
