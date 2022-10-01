import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth(state) {
      state.auth = !state.auth;
    },
  },
});

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
