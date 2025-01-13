import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRollings = createAsyncThunk(
  "rollings/fetchRollings",
  async () => {
    const { data } = await axios.get("http://localhost:5000/api/v1/rolling");
    return data;
  }
);

export const createRolling = createAsyncThunk(
  "rollings/createRolling",
  async (rolling, { rejectWithValue }) => {
    const token = `Bearer ${localStorage.getItem("token")}`;
    if (!token) {
      return rejectWithValue("Token not found");
    }

    axios.defaults.headers.common["Authorization"] = token;

    const { data } = await axios.post(
      "http://localhost:5000/api/v1/rolling",
      rolling
    );
    return data;
  }
);

const rollingsSlice = createSlice({
  name: "rollings",
  initialState: {
    isLoadingRollings: false,
    rollings: [],
    checkRolling: null,
    errorRollings: null,
    isLoadingRolling: false,
    rolling: {},
    errorRolling: null,
  },
  reducers: {
    toggleRolling: (state, action) => {
      state.checkRolling = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRollings.pending, (state) => {
        state.isLoadingRollings = true;
        state.errorRollings = null;
      })
      .addCase(fetchRollings.fulfilled, (state, action) => {
        state.isLoadingRollings = false;
        state.rollings = action.payload;
      })
      .addCase(fetchRollings.rejected, (state, action) => {
        state.isLoadingRollings = false;
        state.errorRollings = action.payload;
        state.errorRolling = null;
      })
      .addCase(createRolling.pending, (state) => {
        state.isLoadingRolling = true;
      })
      .addCase(createRolling.fulfilled, (state, action) => {
        state.isLoadingRolling = false;
        state.rolling = action.payload;
      })
      .addCase(createRolling.rejected, (state, action) => {
        state.isLoadingRolling = false;
        state.errorRolling = action.payload;
      });
  },
});

export const { toggleRolling } = rollingsSlice.actions;

export default rollingsSlice.reducer;
