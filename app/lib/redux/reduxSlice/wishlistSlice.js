import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishId: [],
};

const wishSlice = createSlice({
  name: "wishCartSlice",
  initialState,
  reducers: {
    toggleWish(state, action){
        const id = action.payload;
        const exist = state.wishId.includes(id);

        if(exist){
           state.wishId = state.wishId.filter((item)=> item !== id);
        }else{
            state.wishId.push(id)
        }
    },

    setWishList(state, action){
        state.wishId = action.payload
    }
  },
});

export const { toggleWish, setWishList } = wishSlice.actions;
export default wishSlice.reducer;

