import { createSlice } from "@reduxjs/toolkit";

const loadsSlice = createSlice({
  name: "loads",
  initialState: {
    isLoadingLoads: false,
    loads: [
      {
        id: 1,
        name: "Радиальные",
        title: "Радиальные подшипники",
        description: "Радиальные подшипники",
        url: "/radialnye",
      },
      {
        id: 2,
        name: "Упорные",
        title: "Упорные подшипники",
        description: "Упорные подшипники",
        url: "/upornye",
      },
      {
        id: 3,
        name: "Радиально-упорные",
        title: "Радиально-упорные подшипники",
        description: "Радиально-упорные подшипники",
        url: "/radialno-upornye",
      },
    ],
    checkLoad: null,
    errorLoads: null,
  },
  reducers: {
    toggleLoad: (state, action) => {
      state.checkLoad = action.payload;
    },
  },
});

export const { toggleLoad } = loadsSlice.actions;

export default loadsSlice.reducer;
