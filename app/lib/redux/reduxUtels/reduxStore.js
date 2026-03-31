import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../reduxSlice/productSlice"


export const store = configureStore({
    name:"pritiMart",
    reducer:{
        product: productSlice
    }
})