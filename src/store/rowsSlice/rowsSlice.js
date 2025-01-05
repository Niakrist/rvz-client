import { createSlice } from "@reduxjs/toolkit";

const rowsSlice = createSlice({
  name: "rows",
  initialState: {
    isLoadingRows: false,
    rows: [
      {
        id: 1,
        name: "Однорядные",
        title: "Однорядные подшипники",
        description: "Однорядные подшипники",
        url: "/odnoryadnye",
      },
      {
        id: 2,
        name: "Двухрядные",
        title: "Двухрядные подшипники",
        description: "Двухрядные подшипники",
        url: "/dvuhryadnye",
      },
    ],
    checkRow: null,
    errroRows: null,
  },
  reducers: {
    toggleRow: (state, action) => {
      state.checkRow = action.payload;
    },
  },
});

export const { toggleRow } = rowsSlice.actions;

export default rowsSlice.reducer;
