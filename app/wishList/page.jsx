"use client";

import { IoShareSocial } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../lib/api/fetchProduct";
import { useEffect } from "react";


const page = () => {
  const dispatch = useDispatch()

const {product} =  useSelector((state)=> state.product);
console.log(product)

useEffect(()=>{
  if(!product || product.length === 0){
    fetchProduct(dispatch)
  }
})


const wishId = useSelector((state) => state.wishSlice.wishId);
console.log(wishId)

const savedProducts = product.filter((item)=> item.id === wishId)
console.log(savedProducts)



  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="w-[90%] h-full  py-5!">
        <div className="w-full  md:h-50  flex flex-col sm:flex-row justify-center sm:justify-between gap-2 items-start sm:items-center p-3!">
          <div className="flex justify-center items-center  p-2! md:p-4! gap-3 md:gap-5!">
            <div className="text-2xl md:text-3xl text-[#81c408] bg-[#82c40841]  p-2! rounded-full ">
              <FaRegHeart />
            </div>
            <div className="w-full ">
              <h2 className=" text-lg md:text-xl xl:text-2xl font-semibold">
                My Wishlist
              </h2>
              <p className="text-sm xl:text-lg">
                You have <span>10</span> items in your wishlist
              </p>
            </div>
          </div>
          <div>
            <button
              className="flex justify-center hover:bg-[#ffb524] hover:text-white
             hover:border-white text-[#81c408] items-center cursor-pointer px-2! 
              md:text-[16px] md:px-5! py-1! md:py-2! text-[11px] md:text-sm
              gap-3 rounded-md outline-none border border-[#81c408] transition-all duration-300"
            >
              <span className="text-lg md:text-xl">
                <IoShareSocial />
              </span>
              Share Wishlist
            </button>
          </div>
        </div>

        <div className="w-full h-full border rounded-md border-gray-200 p-2!">
          <div className="p-2!  md:px-5! border-b border-gray-400 flex justify-between items-center">
            <div className="flex flex-row gap-2 font-semibold text-sm md:text-[16px]">
              <input
                type="checkbox"
                id="selectAll"
                className="cursor-pointer"
              />
              <label htmlFor="selectAll" className="cursor-pointer">
                Select All
              </label>
            </div>
            <button
              className="px-3! text-sm md:text-[16px] py-1! cursor-pointer hover:text-white
               hover:bg-red-500 text-red-500 bg-red-200 rounded-md outline-none border-red-600
               transition-all duration-300 font-semibold"
            >
              Clear All
            </button>
          </div>

          <div>Product Lists</div>

        </div>
      </div>
    </div>
  );
};

export default page;

// green text-[#81c408]
// golden bg-[#ffb524]
// gray bg-[#F4F6F8]
