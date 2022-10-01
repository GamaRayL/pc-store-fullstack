import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  devices: [
    {
      id: 1,
      name: "Процессор AMD Ryzen 5 5600G OEM",
      price: 13490,
      rating: 5,
      img: "https://static.nix.ru/images/AMD-Ryzen-5-5600G-5313412245.jpg?good_id=531341&width=500&height=500&view_id=2245",
    },
    {
      id: 2,
      name: "Процессор Intel Core i5-11400F OEM",
      price: 11490,
      rating: 5,
      img: "https://static.nix.ru/images/INTEL-Core-i5-11400F-5034622245.jpg?good_id=503462&width=draft&height=draft&view_id=2245",
    },
    {
      id: 3,
      name: "Оперативная память Kingston FURY Beast KF436C17BBA/8 8 Гб DDR4",
      price: 3190,
      rating: 5,
      img: "https://img.05.ru/resize/__BGNWYnUY8KXEuPEHC3AB3CubWaucrBPUpXl0jHdig//rs:fit:909:261:0:0/q:100/bG9jYWw6Ly8vdXBsb2FkL2libG9jay8wMDAwMDE5MjUzNC8xLmpwZw",
    },
    {
      id: 4,
      name: "Материнская плата ASRock A320M-DVS R4.0",
      price: 3690,
      rating: 5,
      img: "https://avatars.mds.yandex.net/get-mpic/4493022/img_id1659598665725933291.png/orig",
    },
    {
      id: 5,
      name: "Видеокарта Asus GeForce RTX 3080Ti (ROG-STRIX-RTX3080TI-O12G-GAMING) 12 Гб",
      price: 106790,
      rating: 5,
      img: "https://avatars.mds.yandex.net/get-mpic/4904293/img_id8163180769553891233.jpeg/orig",
    },
    {
      id: 6,
      name: "Видеокарта Palit GeForce RTX 3060",
      price: 47890,
      rating: 5,
      img: "https://avatars.mds.yandex.net/get-mpic/5177817/img_id11625942219370129.png/orig",
    },
    {
      id: 7,
      name: "Видеокарта Palit GeForce RTX 3060",
      price: 47890,
      rating: 5,
      img: "https://avatars.mds.yandex.net/get-mpic/5177817/img_id11625942219370129.png/orig",
    },
    {
      id: 8,
      name: "Видеокарта Palit GeForce RTX 3060",
      price: 47890,
      rating: 5,
      img: "https://avatars.mds.yandex.net/get-mpic/5177817/img_id11625942219370129.png/orig",
    },
    {
      id: 9,
      name: "Видеокарта Palit GeForce RTX 3060",
      price: 47890,
      rating: 5,
      img: "https://avatars.mds.yandex.net/get-mpic/5177817/img_id11625942219370129.png/orig",
    },
    {
      id: 10,
      name: "Видеокарта Palit GeForce RTX 3060",
      price: 47890,
      rating: 5,
      img: "https://avatars.mds.yandex.net/get-mpic/5177817/img_id11625942219370129.png/orig",
    },
    {
      id: 11,
      name: "Видеокарта Palit GeForce RTX 3060",
      price: 47890,
      rating: 5,
      img: "https://avatars.mds.yandex.net/get-mpic/5177817/img_id11625942219370129.png/orig",
    },
    {
      id: 12,
      name: "Видеокарта Palit GeForce RTX 3060",
      price: 47890,
      rating: 5,
      img: "https://avatars.mds.yandex.net/get-mpic/5177817/img_id11625942219370129.png/orig",
    },
    {
      id: 13,
      name: "Видеокарта Palit GeForce RTX 3060",
      price: 47890,
      rating: 5,
      img: "https://avatars.mds.yandex.net/get-mpic/5177817/img_id11625942219370129.png/orig",
    },
    {
      id: 14,
      name: "Видеокарта Palit GeForce RTX 3060",
      price: 47890,
      rating: 5,
      img: "https://avatars.mds.yandex.net/get-mpic/5177817/img_id11625942219370129.png/orig",
    },
    {
      id: 15,
      name: "Видеокарта Palit GeForce RTX 3060",
      price: 47890,
      rating: 5,
      img: "https://avatars.mds.yandex.net/get-mpic/5177817/img_id11625942219370129.png/orig",
    },
    {
      id: 16,
      name: "Видеокарта Palit GeForce RTX 3060",
      price: 47890,
      rating: 5,
      img: "https://avatars.mds.yandex.net/get-mpic/5177817/img_id11625942219370129.png/orig",
    },
    {
      id: 17,
      name: "Видеокарта Palit GeForce RTX 3060",
      price: 47890,
      rating: 5,
      img: "https://avatars.mds.yandex.net/get-mpic/5177817/img_id11625942219370129.png/orig",
    },
    {
      id: 18,
      name: "Видеокарта Palit GeForce RTX 3060",
      price: 47890,
      rating: 5,
      img: "https://avatars.mds.yandex.net/get-mpic/5177817/img_id11625942219370129.png/orig",
    },
    {
      id: 19,
      name: "Видеокарта Palit GeForce RTX 3060",
      price: 47890,
      rating: 5,
      img: "https://avatars.mds.yandex.net/get-mpic/5177817/img_id11625942219370129.png/orig",
    },
    {
      id: 20,
      name: "Видеокарта Palit GeForce RTX 3060",
      price: 47890,
      rating: 5,
      img: "https://avatars.mds.yandex.net/get-mpic/5177817/img_id11625942219370129.png/orig",
    },
  ],
};

export const deviceSlice = createSlice({
  name: "devices",
  initialState,
  reducers: {
    setDevice(state, action) {
      state.devices = action.payload;
    },
  },
});

export const { setDevice } = deviceSlice.actions;

export default deviceSlice.reducer;
