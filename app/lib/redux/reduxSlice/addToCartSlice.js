import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";

const getAddToCart = () => {
  if (typeof window !== "undefined") {
    const savedCart = localStorage.getItem("addToCartList");
    return savedCart ? JSON.parse(savedCart) : [];
  }
  return [];
};

const addToCartSlice = createSlice({
  name: "addToCart",
  initialState: {
    cartList: getAddToCart(),
  },
  reducers: {
    addToCartProduct(state, action) {
      const products = action.payload;

      if (!state.cartList.includes(products)) {
        state.cartList.push(products);
      }
    },
    removeProduct(state, action) {
      if (state.cartList.some((items) => items.id === action.payload)) {
        console.log(action.payload);

        state.cartList = state.cartList.filter(
          (item) => item.id !== action.payload,
        );
      }
    },
    setAddCount(state, action) {
      const id = action.payload;
      const exist = state.cartList.find((item) => item.id === id);
      if (exist) {
        exist.quantity += 1;
      } else {
        state.countList.push(id);
      }
    },

    setRemoveCount(state, action) {
      const id = action.payload;
      const exist = state.cartList.find((item) => item.id === id);

      if (exist && exist.quantity > 1) {
        exist.quantity -= 1;
      }
    },
  },
});

export const { addToCartProduct, removeProduct, setAddCount, setRemoveCount } = addToCartSlice.actions;
export default addToCartSlice.reducer;
