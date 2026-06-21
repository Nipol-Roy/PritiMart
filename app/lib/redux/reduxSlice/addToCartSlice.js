import { createSlice } from "@reduxjs/toolkit";


const getAddToCart = ()=>{
    if(typeof window !== "undefined"){
        const savedCart = localStorage.getItem("addToCartList");
        return savedCart ? JSON.parse(savedCart) : [];
    }
    return []
}

const addToCartSlice = createSlice({
    name: "addToCart",
    initialState:{
        cartList: getAddToCart() ,
        quantity:[]
    },
    reducers:{

    }
})