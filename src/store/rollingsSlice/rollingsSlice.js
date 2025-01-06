import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRollings = createAsyncThunk(
  "rollings/fetchRollings",
  async () => {
    const { data } = await axios.get("http://localhost:5000/api/v1/rolling");
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
      });
  },
});

export const { toggleRolling } = rollingsSlice.actions;

export default rollingsSlice.reducer;
