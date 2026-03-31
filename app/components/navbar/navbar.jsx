"use client";

import { CiMenuBurger } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import Link from "next/link";
import { BsFillPersonFill } from "react-icons/bs";
import { MdShoppingCart } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";

const navbar = () => {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <>
      
        <div className="flex bg-[#45595B]   md:bg-[#FFB524]  justify-center items-center  ">
        <div
          className=" bg-[#81C408] px-3! md:px-5! py-4! text-white
         rounded-tl-4xl rounded-bl-2xl rounded-tr-2xl rounded-br-4xl
          flex justify-between items-center w-full md:w-[90%]"
        >
          <div className="flex justify-center items-center gap-2">
            <div className="flex justify-center items-center gap-3">
              <span
                title="Dhaka, Bangladesh"
                className="cursor-pointer  text-xl text-[#FFB524]"
              >
                <FaLocationDot />
              </span>{" "}
              <span className="text-sm hidden sm:inline cursor-pointer">
                Dhaka, Bangladesh
              </span>
            </div>
            <div className="flex justify-center items-center gap-2">
              <span
                title="Email@Example.com"
                className=" cursor-pointer  text-xl text-[#FFB524]"
              >
                <MdEmail />
              </span>{" "}
              <span
                title="Email@Example.com"
                className="cursor-pointer text-sm hidden sm:inline"
              >
                Nipol@Example.com
              </span>
            </div>
          </div>
          <div className="flex justify-center text-sm items-center gap-1 ">
            <div className="underline transition duration-500 hover:text-[#FFB524] cursor-pointer capitalize">
              privacy Policy
            </div>{" "}
            /
            <div className="underline transition duration-500 hover:text-[#FFB524] cursor-pointer capitalize">
              Terms Of Use
            </div>{" "}
            /
            <div className="underline transition duration-500 hover:text-[#FFB524] cursor-pointer capitalize">
              Sales and Refunds
            </div>
          </div>
        </div>
      </div>
      <nav className=" z-50 sticky top-0  shadow  ">
        <div className="flex justify-center   bg-white items-center px-5! sm:px-2! lg:px-5! py-1! ">
          <div className="flex justify-between  items-center w-full md:w-[90%] ">
            <div className="text-xl  md:text-2xl flex justify-start flex-col  transition duration-500 lg:text-4xl w-1/2 md:w-[40%] capitalize font-extrabold text-[#81C408]">
              <Link href="/">Priti Mart</Link>
              <span className="text-sm text-[#FFB524] font-medium text-left">Fresh Products</span>
            </div>
            <div
              onClick={() => setIsMenu(!isMenu)}
              className=" border p-2! transition duration-500 rounded-md flex text-[#81C408] hover:bg-[#81C408] hover:text-[#FFB524] text-2xl md:hidden justify-center items-center "
            >
              <CiMenuBurger />
            </div>

            <div className="hidden w-full    md:flex justify-center items-center gap-5 md:gap-7 lg:gap-9">
              <Link className="text-lg transition-all duration-300 hover:scale-115  text-gray-500 hover:text-[#FFB524]" href="/">
                Home
              </Link>
              <Link className="text-lg transition-all duration-300 hover:scale-115  text-gray-500 hover:text-[#FFB524]" href="/about">
                About
              </Link>
              <Link className="text-lg transition-all duration-300 hover:scale-115  text-gray-500 hover:text-[#FFB524]" href="/product">
                Product
              </Link>
              <Link className="text-lg transition-all duration-300 hover:scale-115  text-gray-500 hover:text-[#FFB524]" href="/contact">
                Contact
              </Link>
            </div>
            <div className="hidden md:flex  W-1/2    md:w-[40%] justify-end items-center ">
              <div className="flex justify-center items-center gap-5">
                <div className="text-2xl p-2! rounded-md border text-[#81C408] cursor-pointer hover:scale-115 hover:bg-[#81C408] hover:text-[#FFB524] transition duration-500">
                  <CiSearch />
                </div>
                <div className="text-2xl relative p-2! rounded-md border cursor-pointer hover:scale-115 text-[#81C408] hover:bg-[#81C408] hover:text-[#FFB524] transition duration-500">
                  <MdShoppingCart />
                  <span className="orderCount h-6 w-6 text-lg bg-[#FFB524]   text-white absolute flex justify-center items-center rounded-full -top-2 -right-2  ">5</span>

                </div>
                <div className="text-2xl rounded-md border p-2! hover:scale-115 cursor-pointer  text-[#81C408] hover:bg-[#81C408] hover:text-[#FFB524] transition duration-500">
                  <BsFillPersonFill />
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
                <Link href="/">Priti Mart</Link>
                <div
                  onClick={() => setIsMenu(!isMenu)}
                  className="text-2xl hover:bg-[#81C408] hover:text-[#FFB524] p-2! rounded-md hover:scale-115 transition duration-500"
                >
                  <MdClose />
                </div>
              </div>

              <div className="w-full   flex flex-col justify-center  items-start text-[#81C408] ">
                <Link
                  className="text-lg px-5! py-3! w-full transition duration-500 sm:text-left text-center border-b hover:bg-[#81C408] hover:text-[#FFB524] "
                  href="/"
                >
                  Home
                </Link>
                <Link
                  className="text-lg px-5! py-3! sm:text-left transition duration-500 text-center border-b  w-full hover:bg-[#81C408] hover:text-[#FFB524]"
                  href="/about"
                >
                  About
                </Link>
                <Link
                  className="text-lg px-5! py-3! sm:text-left transition duration-500 text-center border-b  w-full hover:bg-[#81C408] hover:text-[#FFB524]"
                  href="/product"
                >
                  Product
                </Link>
                <Link
                  className="text-lg px-5! py-3! sm:text-left transition duration-500 text-center border-b  w-full hover:bg-[#81C408] hover:text-[#FFB524]"
                  href="/contact"
                >
                  Contact
                </Link>
              </div>

              <div className="flex justify-center items-center gap-5 transition-all duration-500 py-5! text-[#81C408]">
                <div
                  className="text-2xl p-2! transition-all duration-500 
                hover:scale-115 border rounded-md hover:bg-[#81C408] hover:text-[#FFB524]"
                >
                  <CiSearch />
                </div>
                <div className="text-2xl p-2! transition-all duration-500 hover:scale-115 border rounded-md hover:bg-[#81C408] hover:text-[#FFB524]">
                  <MdShoppingCart />
                </div>
                <div className="text-2xl p-2! transition-all duration-500 hover:scale-115 border rounded-md hover:bg-[#81C408] hover:text-[#FFB524]">
                  <BsFillPersonFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
    </>
  );
};

export default navbar;
