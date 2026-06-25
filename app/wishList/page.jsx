"use client";

import { IoShareSocial } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../lib/api/fetchProduct";
import { useEffect } from "react";
import { setAddCount } from "../lib/redux/reduxSlice/productCountSlice";

import Image from "next/image";
import Link from "next/link";
import {
  toggleWish,
  clearWishlist,
} from "../lib/redux/reduxSlice/wishlistSlice";
import { addToCartProduct } from "../lib/redux/reduxSlice/addToCartSlice";

const page = () => {
  const dispatch = useDispatch();

  const { product } = useSelector((state) => state.product);
  useEffect(() => {
    if (!product || product.length === 0) {
      fetchProduct(dispatch);
    }
  }, [product, dispatch]);

  const { cartList } = useSelector((state) => state.addToCart);
  console.log(cartList);

  const wishId = useSelector((state) => state.wishSlice.wishId);

  const savedProducts = product?.filter((item) => wishId.includes(item.id));

  const handleRemoveAll = () => {
    dispatch(clearWishlist());
    localStorage.removeItem("wishList");
  };

  const handleCart = (carts) => {
    if (!carts) return;

    dispatch(addToCartProduct(carts));
    dispatch(toggleWish(carts.id));
    dispatch(setAddCount(carts));
  };

  const handleToggleWish = (itemId) => {
    dispatch(toggleWish(itemId));
  };
  useEffect(() => {
    localStorage.setItem("wishList", JSON.stringify(wishId));
  }, [wishId]);

  useEffect(() => {
    localStorage.setItem("addToCartList", JSON.stringify(cartList));
  }, [cartList]);

  return (
    <div className=" w-full flex justify-center items-center">
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
                You have <span className="font-bold">( {wishId.length} )</span>{" "}
                items in your wishlist
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

        <div className="w-full h-full rounded-md  border-gray-200 border p-2!">
          <div className="p-2!  md:px-5!  flex justify-between items-center">
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
              onClick={() => handleRemoveAll()}
              className="px-3! text-sm md:text-[16px] py-1! cursor-pointer hover:text-white
               hover:bg-red-500 text-red-500 bg-red-200 rounded-md outline-none border-red-600
               transition-all duration-300 font-semibold"
            >
              Clear All
            </button>
          </div>

          <div className=" h-full min-h-[70vh] mt-3! rounded-md p-2!  md:px-5!">
            <div
              className={`${savedProducts.length == 0 ? "flex" : "hidden"} border-t border-gray-200  justify-center items-center font-bold text-lg text-gray-400 w-full h-[80vh]`}
            >
              <Link
                href="/product"
                className="text-lg border px-3! rounded-md cursor-pointer py-2!"
              >
                Shop Now
              </Link>
            </div>

            {savedProducts.map((item, idx) => {
              const discountPercentage = item.discountPercentage / 100;
              const discountPrice = (
                item.price -
                item.price * discountPercentage.toFixed(2)
              ).toFixed(2);
              return (
                <div
                  key={idx}
                  className=" w-full  flex gap-2 py-2! border-t border-gray-200"
                >
                  <div className="w-full  py-1! flex gap-3 justify-start items-center ">
                    <div className="flex justify-start items-center  gap-5">
                      <input type="checkbox" className="pr-2! cursor-pointer" />
                      <Link
                        href={`/product/${item.id}`}
                        className="relative w-17.5 h-17.5 border border-gray-200 rounded-md bg-gray-100"
                      >
                        <Image
                          width={70}
                          height={70}
                          className=" scale-80    object-cover object-center"
                          src={item?.images[0]}
                          alt="product image"
                        />
                      </Link>
                    </div>
                    <div className="flex flex-col relative md:flex-row justify-center items-start md:justify-between md:items-center  w-full">
                      <div className=" w-full  h-full md:px-2! px-1! flex  justify-start gap-10 items-center ">
                        <div className=" w-50">
                          <h2 className="text-[12px] md:text-[16px] w-full font-bold text-[#81c408] line-clamp-1">
                            {item.title}
                          </h2>
                          <div className="w-full  flex justify-start items-center gap-4 text-gray-600">
                            <div className="text-[12px] md:text-sm font-semibold line-clamp-1  ">
                              {item.category}
                            </div>
                            <div
                              className={`text-[12px] md:text-sm line-clamp-1 font-semibold ${!item.brand ? "hidden" : "flex justify-start items-center"}`}
                            >
                              #{item.brand}
                            </div>
                          </div>
                          <div className="text-[#ffb524] text-[12px] md:text-sm  flex justify-between md:justify-start items-center gap-1 md:gap-4 w-full">
                            <div className="font-bold">${discountPrice}</div>
                            <div className="line-through font-bold">
                              ${item.price}
                            </div>
                            <div
                              className={`h-full  px-1! text-[13px] text-[#81c408]  rounded-md md:hidden flex   items-center  justify-center 
                                      ${
                                        item.availabilityStatus == "In Stock"
                                          ? " text-[#82c408d7]"
                                          : item.availabilityStatus ==
                                              "Low Stock"
                                            ? " text-[#ffb524]"
                                            : " text-gray-700"
                                      }
                                  `}
                            >
                              {item.availabilityStatus}
                            </div>
                          </div>
                        </div>

                        <div
                          className={`h-full w-35 py-1! text-sm  rounded-md md:flex  hidden    items-center  justify-center 
                               ${
                                 item.availabilityStatus == "In Stock"
                                   ? " text-[#82c408d7]"
                                   : item.availabilityStatus == "Low Stock"
                                     ? " text-[#ffb524]"
                                     : " text-gray-700"
                               }`}
                        >
                          {item.availabilityStatus}
                        </div>
                      </div>

                      <div className=" md:w-1/3 h-10 pr-3! w-full flex gap-5 justify-between sm:justify-end items-center">
                        <button
                        onClick={() =>
                              handleCart({
                                id: item.id,
                                price: discountPrice,
                                quantity: 1,
                              })
                            }
                          className="w-full z-20! relative border py-2! bg-[#81c408] flex justify-center items-center gap-2
                           cursor-pointer hover:bg-[#ffb524] hover:text-white transition
                             duration-500 text-white font-semibold rounded-md  disabled:bg-gray-500 disabled:cursor-not-allowed"
                          disabled={item?.availabilityStatus === "Out of Stock"}
                        >
                          <Link
                            href="/cart"
                            className="w-full h-full"
                            
                          >
                            Add To Bucket
                          </Link>
                        </button>
                        <button
                          onClick={() => handleToggleWish(item.id)}
                          className="outline-none cursor-pointer h-8 text-2xl text-red-500"
                        >
                          <MdDelete />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

import { FaCartPlus } from "react-icons/fa";
