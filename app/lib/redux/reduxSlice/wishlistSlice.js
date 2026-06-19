import { createSlice } from "@reduxjs/toolkit";

const getInitialWish = ()=>{
    if(typeof window !== "undefined"){
        const saved = localStorage.getItem("wishList");
        return saved ? JSON.parse(saved) : []
    }
    
}

const initialState = {
  wishId: getInitialWish(),
};

const wishSlice = createSlice({
  name: "wishCartSlice",
  initialState,
  reducers: {
    toggleWish(state, action) {
      const id = action.payload;
      const exist = state.wishId.includes(id);

      if (exist) {
        state.wishId = state.wishId.filter((item) => item !== id);
      } else {
        state.wishId.push(id);
      }
    },

  },
});

export const { toggleWish, setWishList } = wishSlice.actions;
export default wishSlice.reducer;
