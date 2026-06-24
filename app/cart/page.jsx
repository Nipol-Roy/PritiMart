"use client";

import { FaShoppingBag } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";

import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../lib/api/fetchProduct";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  setAddCount,
  setRemoveCount,
} from "../lib/redux/reduxSlice/productCountSlice";

const page = () => {
  const dispatch = useDispatch();
  const { cartList } = useSelector((state) => state.addToCart);
  const { countList } = useSelector((state) => state.addCount);
  const { product } = useSelector((state) => state.product);

  const [discount, setDiscount] = useState(50);
  const [shipping, setShipping] = useState(30);
  const [taxORvat, setTaxORvat] = useState(40);
  const [others, setOthers] = useState(10);
  useEffect(() => {
    if (!product || product.length === 0) {
      fetchProduct(dispatch);
    }
  }, [product, dispatch]);

  const cartProducts = product?.filter((item) =>
    cartList.some((cart) => cart.id == item.id),
  );

  const subTotal = countList
    .reduce((sum, item) => {
      return sum + Number(item.price) * item.quantity;
    }, 0)
    .toFixed(2);

  const finalShippingCharg = shipping * cartList.length;

  console.log(subTotal);

  const totalAmount = (
    Number(subTotal) +
    Number(finalShippingCharg) +
    Number(taxORvat) +
    Number(others) -
    Number(discount)
  ).toFixed(2);

  console.log(totalAmount);

  return (
    <div className="w-full  flex justify-center items-center">
      <div className="w-[90%] h-full">
        <div className="w-full h-40 flex justify-center items-center">
          <h2 className="text-2xl font-bold text-[#81c408] flex gap-2">
            <span className="text-3xl">
              <FaShoppingBag />
            </span>
            Shopping Cart
          </h2>
        </div>
        <div className="w-full  relative flex flex-col md:flex-row justify-between items-start">
          <div
            className="w-full md:w-[73%] h-full rounded-md border border-gray-200 
          flex flex-col 
          "
          >
            <h2 className=" p-2! md:p-3! text-sm md:text-lg font-semibold border-b border-gray-200">
              Porduct (Image & Details) ({countList.length})
            </h2>

            <div className=" h-full min-h-[70vh] mt-3! rounded-md p-2!  md:px-5!">
              <div
                className={`${cartProducts.length == 0 ? "flex" : "hidden"} border-t border-gray-200  justify-center items-center font-bold text-lg text-gray-400 w-full h-[80vh]`}
              >
                <Link
                  href="/product"
                  className="text-lg border px-3! rounded-md cursor-pointer py-2!"
                >
                  Shop Now
                </Link>
              </div>

              {cartProducts.map((item, idx) => {
                const count =
                  countList?.find((items) => items.id === item.id)?.quantity ??
                  0;
                const countPrice =
                  countList?.find((items) => items.id === item.id)?.price ?? 0;
                const calculatePrice = countPrice * count;
                const total = Number(calculatePrice.toFixed(2));
                return (
                  <div
                    key={idx}
                    className=" w-full  flex gap-2 py-2! border-t border-gray-200"
                  >
                    <div className="w-full  py-1! flex gap-3 justify-start items-center ">
                      <div className="flex justify-start items-center  gap-5">
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
                      <div className="flex md:gap-2   md:flex-row flex-col h-full  relative justify-center items-start   w-full">
                        <div className=" w-full md:w-1/2  ">
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

                          <div className="flex  gap-2 text-sm">
                            <div className="font-bold ">${countPrice}</div>
                          </div>
                        </div>
                        <div className=" w-full sm:w-[90%] pt-1! md:w-1/2 md:h-full w flex  md:justify-center justify-between gap-2 md:gap-3 xl:gap-5 items-center relative">
                          <div className=" text-[12px] hidden md:flex  md:text-sm font-bold">
                            ${countPrice}
                          </div>
                          <div className="flex justify-center items-center gap-1 ">
                            <button className="outline-none cursor-pointer p-1! border text-sm md:text-[14px] lg:text-lg border-gray-200 rounded-md">
                              <FiMinus />
                            </button>
                            <div className="outline-none w-13 lg:w-15 text-sm md:text-[14px] lg:text-lg  border border-gray-200 rounded-md flex justify-center items-center">
                              {count}
                            </div>
                            <button
                              onClick={() => dispatch(setAddCount(item.id))}
                              className="border p-1! cursor-pointer text-sm md:text-[14px] lg:text-lg rounded-md border-gray-200"
                            >
                              <IoMdAdd />
                            </button>
                          </div>
                          <div className=" text-[12px] px-10! md:px-0! md:text-sm font-bold">
                            ${total}
                          </div>
                        </div>
                        <div className=" absolute top-0 right-2 font-bold cursor-pointer text-lg">
                          <IoCloseSharp />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-full mt-3! md:w-[25%] min-h-50  flex flex-col gap-3">
            <div className="w-full  border border-gray-200   rounded-md  ">
              <h2 className=" p-2! md:p-3! text-sm md:text-lg font-semibold border-b border-gray-200">
                Order Summary
              </h2>

              <div className="flex px-3! justify-start flex-col h-full items-center ">
                <div
                  className=" w-full flex justify-between border-b border-gray-200
               items-center "
                >
                  <div className="p-1! w-2/3 text-sm lg:text-lg font-semibold">
                    Order Amount
                  </div>
                  <div className=" px-3! py-1! ">+ ${subTotal}</div>
                </div>
                <div
                  className=" w-full flex justify-between border-b border-gray-200
               items-center "
                >
                  <div className="p-1! w-2/3 text-sm lg:text-lg font-semibold ">
                    Shipping
                  </div>
                  <div className=" px-3! py-1! ">+ ${finalShippingCharg}</div>
                </div>
                <div
                  className=" w-full flex justify-between border-b border-gray-200
               items-center "
                >
                  <div className="p-1! w-2/3 text-sm lg:text-lg font-semibold ">
                    TAX/VAT
                  </div>
                  <div className=" px-3! py-1! ">+ ${taxORvat}</div>
                </div>
                <div
                  className=" w-full flex justify-between border-b border-gray-200
               items-center "
                >
                  <div className="p-1! w-2/3 text-sm lg:text-lg font-semibold ">
                    Discount
                  </div>
                  <div className=" px-3! py-1! ">- ${discount}</div>
                </div>

                <div
                  className=" w-full flex justify-between border-b border-gray-200
               items-center "
                >
                  <div className="p-1! w-2/3 text-sm lg:text-lg font-semibold ">
                    Others
                  </div>
                  <div className=" px-3! py-1! ">+ ${others}</div>
                </div>
              </div>
              <div className="flex p-3! px-5! border-t border-gray-700 justify-between h-full items-center ">
                <h2 className="text-sm lg:text-lg font-semibold ">
                  Total Amount
                </h2>
                <p>${totalAmount}</p>
              </div>
              <div
                className="py-2! cursor-pointer  flex justify-center items-center border
             m-1! rounded-md font-bold bg-[#81c408] transition-all duration-300 hover:scale-102
              hover:bg-[#ffb524] text-white"
              >
                Proceed to Checkout
              </div>
            </div>
            <div className="w-full mb-3! p-3! flex justify-between items-center gap-1 border border-gray-200   rounded-md  ">
              <input
                type="text"
                className="outline-none border px-1! h-10 flex justify-start items-center rounded-md border-gray-300 py-1!  w-[65%]"
                placeholder="Coupon Code"
              />
              <button className="h-10 bg-[#81c408] font-bold cursor-pointer text-white outline-none border rounded-md w-[35%] flex justify-center items-center">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

// green text-[#81c408]
// golden bg-[#ffb524]
// gray bg-[#F4F6F8]
