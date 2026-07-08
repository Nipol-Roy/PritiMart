import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: [],
  priceRange: {
    min: 0,
    max: 0,
    targetPrice: 0,
  },
  rating: [],
  discount: [],
  availability: [],
  brand: [],
  searchValue: "apple",
};

const productFilterSlice = createSlice({
  name: "productFilterSlice",
  initialState,
  reducers: {
    setCategorys(state, action) {
      const value = action.payload;

      if (Array.isArray(value)) {
        state.category = value;
        return;
      }

      if (state.category.includes(value)) {
        state.category = state.category.filter((item) => item !== value);
      } else {
        state.category.push(value);
      }
    },

    setBrand(state, action) {
      const value = action.payload;

      const exist = state.brand.some(
        (item) => item.toLowerCase() === value.toLowerCase(),
      );

      if (exist) {
        state.brand = state.brand.filter(
          (item) => item.toLowerCase() !== value.toLowerCase(),
        );
      } else {
        state.brand.push(value);
      }
    },

    setPriceRange(state, action) {
      const { type, value } = action.payload;
      if (type === "target") {
        state.priceRange.targetPrice = Number(value);
      }
      if (type === "min") {
        state.priceRange.min = Number(value);
      }
      if (type == "max") {
        state.priceRange.max = Number(value);
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
    setClearFilters(state, action) {
      state.category = [];
      state.priceRange = {
        min: 0,
        max: 0,
        targetPrice: 0,
      };
      state.rating = [];
      state.discount = [];
      state.availability = [];
      state.brand = [];
    },
    setSearch(state, action) {
      state.searchValue = action.payload;
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
  setClearFilters,
  setSearch,
} = productFilterSlice.actions;

export default productFilterSlice.reducer;
