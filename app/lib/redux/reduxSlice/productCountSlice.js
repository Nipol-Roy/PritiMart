import { createSlice } from "@reduxjs/toolkit";

const getCountList = () => {
  if (typeof window !== "undefined") {
    const savedCart = localStorage.getItem("addToCartList");
    return savedCart ? JSON.parse(savedCart) : [];
  }
};

const initialState = {
  countList: getCountList(),
};

const productCountSlice = createSlice({
  name: "countSlice",
  initialState,
  reducers: {
    removeCart(state, action) {
      const id = action.payload;
      state.countList = state.countList.filter((item) => item.id !== id);
    },
   
  },
});

export const { setAddCount, setRemoveCount, removeCart } =
  productCountSlice.actions;
export default productCountSlice.reducer;
