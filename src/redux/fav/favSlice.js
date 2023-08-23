import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const favSlice = createSlice({
  name: "fav",
  initialState,
  reducers: {
    addProductFavourites: (state, action) => {
      state.items.push({
        ...action.payload,
      });
    },
    removeProductFavourites: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProductFavourites, removeProductFavourites } =
  favSlice.actions;

export default favSlice.reducer;
