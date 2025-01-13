import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchLoads = createAsyncThunk("loads/fetchLoads", async () => {
  const { data } = await axios.get("http://localhost:5000/api/v1/load");
  return data;
});
export const createAsyncLoad = createAsyncThunk(
  "loads/createAsyncLoad",
  async (load, { rejectWithValue }) => {
    const token = localStorage.getItem("token");

    if (!token) {
      return rejectWithValue("Token not found");
    }
    axios.defaults.headers.common["Authorization"] = token;
    const { data } = await axios.post(
      "http://localhost:5000/api/v1/load",
      load
    );
    return data;
  }
);

const loadsSlice = createSlice({
  name: "loads",
  initialState: {
    isLoadingLoads: false,
    loads: [],
    checkLoad: null,
    errorLoads: null,
    isLoadingLoad: false,
    load: {},
    errorLoad: null,
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
      })
      .addCase(createAsyncLoad.pending, (state) => {
        state.isLoadingLoad = true;
        state.errorLoad = null;
      })
      .addCase(createAsyncLoad.fulfilled, (state, action) => {
        state.isLoadingLoad = false;
        state.load = action.payload;
      })
      .addCase(createAsyncLoad.rejected, (state, action) => {
        state.isLoadingLoad = false;
        state.errorLoad = action.payload;
      });
  },
});

export const { toggleLoad } = loadsSlice.actions;

export default loadsSlice.reducer;
