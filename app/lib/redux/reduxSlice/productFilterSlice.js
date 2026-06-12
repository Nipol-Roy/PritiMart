import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: ["phone", 'furniture'],
  priceRange: {
    min: 0,
    max: 500,
    targetPrice: 5000,
  },
  rating: ["3"],
  discount: ["30"],
  availability: ["outOfStock"],
  brand: ["Calvin Klein"],
};

const productFilterSlice = createSlice({
  name: "productFilterSlice",
  initialState,
  reducers: {
    setCategorys(state, action) {
      const value = action.payload;
      if (state.category.includes(value)) {
        state.category = state.category.filter((item) => item !== value);
      } else {
        state.category.push(value);
      }
    },
    setBrand(state, action) {
      const value = action.payload;
      if (state.brand.includes(value)) {
        state.brand = state.brand.filter((item) => item !== value);
      } else {
        state.brand.push(value);
      }
    },
    setPriceRange(state, action) {
      const {type, value} = action.payload;
      if(type === "target"){
        state.priceRange.targetPrice = Number(value)
      }
      if(type === "min"){
        state.priceRange.min = Number(value)
      }
      if(type == "max"){
        state.priceRange.max = Number(value)
      }


    },
    setRating(state, action) {
      const value = action.payload;
      if (state.rating.includes(value)) {
        state.rating = state.rating.filter((item) => item !== value);
      } else {
        state.rating.push(value);
      }
    },
    setDiscount(state, action) {
      const value = action.payload;
      if (state.discount.includes(value)) {
        state.discount = state.discount.filter((item) => item !== value);
      } else {
        state.discount.push(value);
      }
    },
    setAvailability(state, action) {
      const value = action.payload;
      if (state.availability.includes(value)) {
        state.availability = state.availability.filter(
          (item) => item !== value,
        );
      } else {
        state.availability.push(value);
      }
    },
  },
});

export const {
  setCategorys,
  setAvailability,
  setBrand,
  setDiscount,
  setPriceRange,
  setRating,
} = productFilterSlice.actions;

export default productFilterSlice.reducer;