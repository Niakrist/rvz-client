import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./userSlice/userSlice";
import deviceSlice from "./deviceSlice/deviceSlice";
import brandsSlice from "./brandsSlice/brandsSlice";
import loadsSlice from "./loadsSlice/loadsSlice";
import rollingsSlice from "./rollingsSlice/rollingsSlice";
import rowsSlice from "./rowsSlice/rowsSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    devices: deviceSlice,
    brands: brandsSlice,
    loads: loadsSlice,
    rollings: rollingsSlice,
    rows: rowsSlice,
  },
});
