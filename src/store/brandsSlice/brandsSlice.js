import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBrands = createAsyncThunk("brands/fetchBrands", async () => {
  const { data } = await axios.get("http://localhost:5000/api/v1/brand");
  return data;
});

const brandsSlice = createSlice({
  name: "brands",
  initialState: {
    isLoadingBrand: false,
    brands: [],
    checkBrand: null,
    errorBrand: null,
  },
  reducers: {
    toggleBrand: (state, action) => {
      state.checkBrand = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBrands.pending, (state) => {
        state.isLoadingBrand = true;
        state.errorBrand = null;
      })
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.isLoadingBrand = false;
        state.brands = action.payload;
      })
      .addCase(fetchBrands.rejected, (state, action) => {
        state.isLoadingBrand = false;
        state.errorBrand = action.payload;
      });
  },
});

export const { toggleBrand } = brandsSlice.actions;

export default brandsSlice.reducer;
