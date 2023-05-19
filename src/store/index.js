import { configureStore } from "@reduxjs/toolkit";
import adminLoginSlice from "../slice/admin/adminLoginSlice";
const store = configureStore({
  reducer: {
    adminLoginReducer: adminLoginSlice,
  },
});

export default store;
