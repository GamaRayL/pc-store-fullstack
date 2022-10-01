import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

export const selectedTypeSlice = createSlice({
  name: "selectedType",
  initialState,
  reducers: {
    selectType: (_, action) => action.payload,
  },
});

export const { selectType } = selectedTypeSlice.actions;
export default selectedTypeSlice.reducer;
