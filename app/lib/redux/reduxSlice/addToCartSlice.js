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
       
    },
    reducers:{
        addToCartProduct(state , action){
            const products = action.payload;

            if(!state.cartList.includes(products)){
                state.cartList.push( products)
            }
        },
        removeProduct(state, action){
            if(state.cartList.includes(action.payload.id)){
                state.cartList.filter((item)=> item !== action.payload.id)
            }
        }

    }
})

export const {addToCartProduct, removeProduct} = addToCartSlice.actions;
export default addToCartSlice.reducer