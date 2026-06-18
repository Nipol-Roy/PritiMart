import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../reduxSlice/productSlice";
import productfilterSlice from "../reduxSlice/productFilterSlice"
import wishCartSlice from "../reduxSlice/wishlistSlice"


export const store = configureStore({
    name:"pritiMart",
    reducer:{
        product: productSlice,
        productFilter: productfilterSlice,
        wishSlice: wishCartSlice
    }
})