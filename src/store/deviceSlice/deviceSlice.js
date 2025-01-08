import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDevice = createAsyncThunk(
  "device/fetchDevice",
  async (params) => {
    const { data } = await axios.get("http://localhost:5000/api/v1/device/", {
      params: params,
    });
    return data;
  }
);

const deviceSlice = createSlice({
  name: "device",
  initialState: {
    isLoasdinDevice: false,
    devices: [],
    page: 1,
    count: 0,
    limit: 16,
    errorDevice: null,
  },
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setTotalCount: (state, action) => {
      state.totalCount = action.payload;
    },
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
  },
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

export const { setPage, setTotalCount, setLimit } = deviceSlice.actions;

export default deviceSlice.reducer;
