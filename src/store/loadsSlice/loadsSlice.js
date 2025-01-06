import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchLoads = createAsyncThunk("loads/fetchLoads", async () => {
  const { data } = await axios.get("http://localhost:5000/api/v1/load");
  return data;
});

const loadsSlice = createSlice({
  name: "loads",
  initialState: {
    isLoadingLoads: false,
    loads: [],
    checkLoad: null,
    errorLoads: null,
  },
  reducers: {
    toggleLoad: (state, action) => {
      state.checkLoad = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLoads.pending, (state) => {
        state.isLoadingLoads = true;
        state.errorLoads = null;
      })
      .addCase(fetchLoads.fulfilled, (state, action) => {
        state.isLoadingLoads = false;
        state.loads = action.payload;
      })
      .addCase(fetchLoads.rejected, (state, action) => {
        state.isLoadingLoads = false;
        state.errorLoads = action.payload;
      });
  },
});

export const { toggleLoad } = loadsSlice.actions;

export default loadsSlice.reducer;
