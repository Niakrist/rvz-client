import { createSlice } from "@reduxjs/toolkit";

const brandsSlice = createSlice({
  name: "brands",
  initialState: {
    isLoadingBrand: false,
    brands: [
      {
        id: 1,
        name: "ГОСТ",
        title: "Подшипники ГОСТ",
        description: "Подшипники ГОСТ",
        url: "/gost",
      },
      {
        id: 2,
        name: "ISO",
        title: "Подшипники ISO",
        description: "Подшипники ISO",
        url: "/iso",
      },
    ],
    checkBrand: null,
    errorBrand: null,
  },
  reducers: {
    toogleBrand: (state, action) => {
      state.checkBrand = action.payload;
    },
  },
});

export const { toogleBrand } = brandsSlice.actions;

export default brandsSlice.reducer;
