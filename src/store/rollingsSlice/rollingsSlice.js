import { createSlice } from "@reduxjs/toolkit";

const rollingsSlice = createSlice({
  name: "rollings",
  initialState: {
    isLoadingRollings: false,
    rollings: [
      {
        id: 1,
        name: "Шариковые",
        title: "Шариковые подшипники",
        description: "Шариковые подшипники",
        url: "/sharikovye",
      },
      {
        id: 2,
        name: "Роликовые",
        title: "Роликовые подшипники",
        description: "Роликовые подшипники",
        url: "/rolikovye",
      },
      {
        id: 3,
        name: "Игольчатые",
        title: "Игольчатые подшипники",
        description: "Игольчатые подшипники",
        url: "/igolchatye",
      },
      {
        id: 4,
        name: "Шарнирные",
        title: "Шарнирные подшипники",
        description: "Шарнирные подшипники",
        url: "/sharnirnyye",
      },
    ],
    checkRolling: null,
    errorRollings: null,
  },
  reducers: {
    toogleRolling: (state, action) => {
      state.checkRolling = action.payload;
    },
  },
});

export const { toogleRolling } = rollingsSlice.actions;

export default rollingsSlice.reducer;
