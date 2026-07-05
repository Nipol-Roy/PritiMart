"use client";

import { CiMenuBurger } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import { FaLeaf, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaHeart } from "react-icons/fa6";

import Link from "next/link";
import { BsFillPersonFill } from "react-icons/bs";
import { MdShoppingCart } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { useSelector } from "react-redux";

const navbar = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(true);
  const { cartList } = useSelector((state) => state.addToCart);

  const wishId = useSelector((state) => state.wishSlice.wishId);

  const totalOrder = cartList.reduce(
    (some, item) => some + Number(item.quantity),
    0,
  );

  window.addEventListener("scroll", () => {
    setShowSearch(false);
  });

  return (
    <>
      <div className="flex sticky top-0 z-50   justify-center items-center  ">
        <div
          className=" bg-[#81C408] px-3! md:px-5! py-4! text-white
          flex justify-between items-center w-full "
        >
          <div className="flex justify-center items-center gap-2">
            <div className="flex justify-center items-center gap-3">
              <Link
                href="/contact"
                title="Dhaka, Bangladesh"
                className="cursor-pointer  text-xl text-[#FFB524]"
              >
                <FaLocationDot />
              </Link>{" "}
              <span className="text-sm hidden sm:inline cursor-pointer">
                Dhaka, Bangladesh
              </span>
            </div>
            <div className="flex justify-center items-center gap-2">
              <Link
                href="/contact"
                title="Email@Example.com"
                className=" cursor-pointer  text-xl text-[#FFB524]"
              >
                <MdEmail />
              </Link>{" "}
              <span
                title="email@example.com"
                className="cursor-pointer text-sm hidden sm:inline"
              >
                email@example.com
              </span>
            </div>
          </div>
          <div className="flex justify-center text-[12px] sm:text-sm items-center gap-2 ">
            <Link
              href="/components/services/privacyPolicy"
              className="underline transition duration-500 hover:text-[#FFB524] 
            cursor-pointer capitalize"
            >
              privacy Policy
            </Link>
            /
            <Link
              href="/components/services/termsOfUse"
              className="underline transition duration-500 hover:text-[#FFB524]
             cursor-pointer capitalize"
            >
              Terms Of Use
            </Link>
            /
            <Link
              href="/components/services/salesAndRefunds"
              className="underline transition duration-500 hover:text-[#FFB524]
             cursor-pointer capitalize"
            >
              Sales and Refunds
            </Link>
          </div>
        </div>
      </div>
      <nav className=" z-50 sticky top-13  shadow  ">
        <div className="flex justify-center px-3!  bg-white items-center  py-1! ">
          <div className="flex justify-between  items-center w-full md:w-[90%] ">
            <div className="text-xl  md:text-2xl flex justify-start flex-col  transition duration-500  w-1/2 md:w-[40%] capitalize font-extrabold text-[#81C408]">
              <Link href="/">Priti Shop</Link>
              <span className="text-sm text-[#FFB524] font-medium text-left">
                Fresh Products
              </span>
            </div>

            <div className="hidden w-full    md:flex justify-center items-center gap-5 md:gap-7 lg:gap-9">
              <Link
                className="text-lg text-[#81C408] font-bold transition-all duration-300 hover:scale-115  hover:text-[#FFB524]"
                href="/"
              >
                Home
              </Link>
              <Link
                className="text-lg text-[#81C408] font-bold transition-all duration-300 hover:scale-115  hover:text-[#FFB524]"
                href="/about"
              >
                About
              </Link>
              <Link
                className="text-lg text-[#81C408] font-bold transition-all duration-300 hover:scale-115  hover:text-[#FFB524]"
                href="/product"
              >
                Product
              </Link>
              <Link
                className="text-lg text-[#81C408] font-bold transition-all duration-300 hover:scale-115  hover:text-[#FFB524]"
                href="/contact"
              >
                Contact
              </Link>
            </div>
            <div className="flex  W-1/2    md:w-[40%] justify-end items-center ">
              <div className="flex justify-center items-center gap-3">
                <div
                  onClick={() => setShowSearch(!showSearch)}
                  className={`text-[21px] xl:text-2xl p-1.5! md:p-2! rounded-md border text-[#81C408]
                   cursor-pointer hover:scale-115 hover:bg-[#81C408] hover:text-white transition
                    duration-500 ${showSearch ? "bg-[#FFB524] text-white" : ""}`}
                >
                  <CiSearch />
                </div>
                <Link
                  href="/cart"
                  className="text-xl xl:text-2xl relative p-1.5! md:p-2! rounded-md border cursor-pointer
                 hover:scale-115 text-[#81C408] hover:bg-[#81C408] hover:text-white
                  transition duration-500"
                >
                  <MdShoppingCart />
                  <span
                    className="orderCount h-5 w-5 text-sm bg-[#FFB524]   text-white absolute
                   flex justify-center items-center rounded-full -top-2 -right-2  "
                  >
                    {totalOrder}
                  </span>
                </Link>
                <Link
                  href="/wishList"
                  onClick={() => setShowWish(!showWish)}
                  className={`  text-white" text-xl xl:text-2xl relative p-1.5! md:p-2! rounded-md border cursor-pointer
                 hover:scale-115 text-[#81C408] hover:bg-[#81C408] hover:text-white
                  transition duration-500`}
                >
                  <FaHeart />

                  <span
                    className="orderCount h-5 w-5 text-sm bg-[#FFB524]   text-white absolute
                   flex justify-center items-center rounded-full -top-2 -right-2  "
                  >
                    {wishId.length}
                  </span>
                </Link>
                <Link
                  href="/profile"
                  className="text-xl xl:text-2xl rounded-md  hidden md:flex border p-1.5! md:p-2! hover:scale-115 cursor-pointer
                  text-[#81C408] hover:bg-[#81C408] hover:text-white transition
                   duration-500"
                >
                  <BsFillPersonFill />
                </Link>

                <div
                  onClick={() => setIsMenu(!isMenu)}
                  className=" border p-1.5! md:p-2! transition duration-500 rounded-md flex text-[#81C408] hover:bg-[#81C408] hover:text-[#FFB524] text-xl xl:text-2xl md:hidden justify-center items-center "
                >
                  <CiMenuBurger />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`  flex justify-end ${isMenu ? "translate-x-0  " : "translate-x-full "}
           items-center transition duration-500  backdrop-blur-sm  fixed  
           h-dvh w-full top-0  `}
        >
          <div
            onClick={(e) => {
              e.stopPropagation();

              setIsMenu(!isMenu);
            }}
            className="hidden sm:flex sm:w-1/2 h-full  top-0  left-0 "
          ></div>
          <div
            className={` ease-initial transition-transform duration-800 w-full sm:w-[50%] z-20  h-full bg-white`}
          >
            <div className=" ">
              <div className="text-xl border-b  w-full flex justify-between items-center px-4! py-5!  capitalize font-extrabold text-[#81C408]">
                <Link href="/">Priti Shop</Link>
                <div
                  onClick={() => setIsMenu(false)}
                  className="text-2xl hover:bg-[#81C408] hover:text-[#FFB524] p-2! rounded-md hover:scale-115 transition duration-500"
                >
                  <MdClose />
                </div>
              </div>

              <div className="w-full   flex flex-col justify-center  items-start text-[#81C408] ">
                <Link
                  onClick={(e) => {
                    e.stopPropagation();

                    setIsMenu(false);
                  }}
                  className="text-lg font-bold px-5! py-3! w-full transition duration-500 sm:text-left text-center border-b hover:bg-[#81C408] hover:text-[#FFB524] "
                  href="/"
                >
                  Home
                </Link>
                <Link
                  onClick={(e) => {
                    e.stopPropagation();

                    setIsMenu(false);
                  }}
                  className="text-lg font-bold px-5! py-3! sm:text-left transition duration-500 text-center border-b  w-full hover:bg-[#81C408] hover:text-[#FFB524]"
                  href="/about"
                >
                  About
                </Link>
                <Link
                  onClick={(e) => {
                    e.stopPropagation();

                    setIsMenu(false);
                  }}
                  className="text-lg font-bold px-5! py-3! sm:text-left transition duration-500 text-center border-b  w-full hover:bg-[#81C408] hover:text-[#FFB524]"
                  href="/product"
                >
                  Product
                </Link>
                <Link
                  onClick={(e) => {
                    e.stopPropagation();

                    setIsMenu(false);
                  }}
                  className="text-lg font-bold px-5! py-3! sm:text-left transition duration-500 text-center border-b  w-full hover:bg-[#81C408] hover:text-[#FFB524]"
                  href="/contact"
                >
                  Contact
                </Link>
              </div>

              <div className="flex  justify-center items-center gap-5 transition-all duration-500 py-5! text-[#81C408]">
                <div
                  onClick={(e) => {
                    e.stopPropagation();

                    setIsMenu(false);
                  }}
                  className="text-2xl  p-2! transition-all duration-500 hover:scale-115 border rounded-md hover:bg-[#81C408] hover:text-[#FFB524]"
                >
                  <BsFillPersonFill />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`w-full h-screen    absolute top-14 right-0   justify-center items-start   gap-2 ${showSearch ? "flex " : "hidden"}`}
        >
          <div
            onClick={() => setShowSearch(false)}
            className="w-full h-full absolute top-0 left-0 bg-gray-800 opacity-40 "
          ></div>

          <div className="flex flex-col h-[50%] shadow-xl shadow-gray-400 rounded-b-md z-5 w-full md:w-[80%] lg:w-[50%]  gap-2  bg-white  p-3!">
            <div className="h-12 border rounded-md  border-gray-200 flex justify-between items-center ">
              <input
                type="text"
                placeholder="Search Products"
                className="px-2! w-full h-full outline-none "
              />
              <button
                className="h-full px-4! md:px-6! bg-[#FFB524] text-white text-lg md:text-xl rounded-r-md 
              cursor-pointer hover:scale-102 transition-all duration-300"
              >
                <FaSearch />
              </button>
            </div>
            <div className="border w-full h-full border-gray-200 rounded-md "></div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default navbar;
