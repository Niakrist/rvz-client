import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuth: false,
    user: null,
  },
  reducers: {
    toggleAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    addUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { toggleAuth, addUser } = userSlice.actions;

export default userSlice.reducer;
