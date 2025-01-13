import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRows = createAsyncThunk("rows/fetchRows", async () => {
  const { data } = await axios.get("http://localhost:5000/api/v1/row");
  return data;
});

export const createAsyncRow = createAsyncThunk(
  "rows/createRow",
  async (row, { rejectWithValue }) => {
    console.log("row", row);

    const token = `Bearer ${localStorage.getItem("token")}`;
    if (!token) {
      return rejectWithValue("Token not found");
    }
    axios.defaults.headers.common["Authorization"] = token;

    const { data } = await axios.post("http://localhost:5000/api/v1/row", row);
    return data;
  }
);

const rowsSlice = createSlice({
  name: "rows",
  initialState: {
    isLoadingRows: false,
    rows: [],
    checkRow: null,
    errroRows: null,
    isLoadingRow: false,
    row: {},
    errorRow: null,
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
      })
      .addCase(createAsyncRow.pending, (state) => {
        state.isLoadingRow = true;
        state.errorRow = null;
      })
      .addCase(createAsyncRow.fulfilled, (state, action) => {
        state.isLoadingRow = false;
        state.row = action.payload;
      })
      .addCase(createAsyncRow.rejected, (state, action) => {
        state.isLoadingRow = false;
        state.errorRow = action.payload;
      });
  },
});

export const { toggleRow } = rowsSlice.actions;

export default rowsSlice.reducer;
