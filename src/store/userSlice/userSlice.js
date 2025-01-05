import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuth: true,
    user: {
      name: "name",
      email: "1@2.ru",
    },
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
