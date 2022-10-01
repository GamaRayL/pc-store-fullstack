import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../store/userSlice";
import authReducer from "../store/authSlice";
import brandsReducer from "../store/brandSlice";
import typesReducer from "../store/typeSlice";
import selectedTypeReducer from "../store/selectedTypeSlice";
import deviceReducer from "../store/deviceSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    brands: brandsReducer,
    types: typesReducer,
    selectedType: selectedTypeReducer,
    device: deviceReducer,
  },
});
