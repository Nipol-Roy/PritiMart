import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../reduxSlice/productSlice";
import productfilterSlice from "../reduxSlice/productFilterSlice"


export const store = configureStore({
    name:"pritiMart",
    reducer:{
        product: productSlice,
        productFilter: productfilterSlice
    }
})