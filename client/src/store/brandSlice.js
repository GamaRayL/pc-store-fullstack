import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brands: [
    { id: 1, name: "Palit" },
    { id: 2, name: "AMD" },
    { id: 3, name: "Intel" },
    { id: 4, name: "Kingston" },
    { id: 5, name: "ASRock" },
    { id: 6, name: "Asus" },
  ],
};

export const brandSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {
    setBrand(state, action) {
      state.brands = action.payload;
    },
  },
});

export const { setBrand } = brandSlice.actions;

export default brandSlice.reducer;
