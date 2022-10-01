import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  types: [
    { id: 1, name: "Видеокарты", img: "images/video-card.svg" },
    { id: 2, name: "Процессоры", img: "images/cpu-chip.svg" },
    { id: 3, name: "Материнские платы", img: "images/motherboard.svg" },
    { id: 4, name: "Оперативная память", img: "images/ram-memory.svg" },
    { id: 5, name: "Корпуса", img: "images/computer.svg" },
    { id: 6, name: "Блоки питания", img: "images/power-supply.svg" },
    { id: 7, name: "Жесткие диски", img: "images/hard-disk.svg" },
    { id: 8, name: "Твердотельные накопители", img: "images/ssd.svg" },
  ],
};

export const typeSlice = createSlice({
  name: "types",
  initialState,
  reducers: {
    setType(state, action) {
      state.types = action.payload;
    },
  },
});

export const { setType } = typeSlice.actions;

export default typeSlice.reducer;
