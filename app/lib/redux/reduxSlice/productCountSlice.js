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
    setAddCount(state, action) {
      const id = action.payload;

      const exist = state.countList.find((item) => item.id === id);

      if (exist) {
        exist.quantity += 1;
      } else {
        state.countList.push(id);
      }
    },

    setRemoveCount(state, action) {
      const id = action.payload;
      const exist = state.countList.find((item) => item.id === id);

      if (exist && exist.quantity > 1) {
        exist.quantity -= 1;
      }
    },
  },
});

export const { setAddCount, setRemoveCount } = productCountSlice.actions;
export default productCountSlice.reducer;
