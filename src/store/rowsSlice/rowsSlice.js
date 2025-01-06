import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRows = createAsyncThunk("rows/fetchRows", async () => {
  const { data } = await axios.get("http://localhost:5000/api/v1/row");
  return data;
});

const rowsSlice = createSlice({
  name: "rows",
  initialState: {
    isLoadingRows: false,
    rows: [],
    checkRow: null,
    errroRows: null,
  },
  reducers: {
    toggleRow: (state, action) => {
      state.checkRow = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRows.pending, (state) => {
        state.isLoadingRows = true;
        state.errroRows = null;
      })
      .addCase(fetchRows.fulfilled, (state, action) => {
        state.isLoadingRows = false;
        state.rows = action.payload;
      })
      .addCase(fetchRows.rejected, (state, action) => {
        state.isLoadingRows = false;
        state.errroRows = action.payload;
      });
  },
});

export const { toggleRow } = rowsSlice.actions;

export default rowsSlice.reducer;
