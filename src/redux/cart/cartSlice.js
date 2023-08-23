import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPriceTest: 0,
  totalDiscount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductCart: (state, action) => {
      const findItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      // При добавении объекта через reduce вычисляем общию сумму
      // по price и count каждого добавленного объекта
      state.totalDiscount = state.items.reduce((sum, current) => {
        return current.price.newPrice - current.price.oldPrice + sum;
      }, 0);
    },
    countItemDown: (state, action) => {
      const findItem = state.items.find((item) => item.id === action.payload);
      if (findItem) {
        findItem.count--;
      }
    },
    removeProductCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearProductItems: (state) => {
      state.items = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addProductCart,
  removeProductCart,
  countItemDown,
  clearProductItems,
} = cartSlice.actions;

export default cartSlice.reducer;
