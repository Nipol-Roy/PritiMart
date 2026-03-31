"use client";

import Link from "next/link";

import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";
import Image from "next/image";

import visaCard from "../../../public/Images/visa.png";
import masterCard from "../../../public/Images/master.png";
import multiCard from "../../../public/Images/master.webp";
import paypalCard from "../../../public/Images/paypal.webp";

const footer = () => {
  return (
    <div className=" bg-[#45595B] w-full flex justify-center  flex-col items-center ">
      <div className="py-10! md:py-20! border-b border-[#FFB524] w-[90%]">
        <div className=" flex flex-col lg:flex-row justify-between items-center gap-7 w-full">
          {/* space */}

          <div className="lg:w-1/4 w-full ">
            <div className="text-2xl  sm:text-4xl    transition duration-500   capitalize font-extrabold text-[#81C408]">
              <Link href="/">Priti Mart</Link>

              <div className="text-sm text-[#FFB524] font-medium text-left">
                Fresh Products
              </div>
            </div>
          </div>

          <div className="lg:w-2/4 w-full">
            <div className="w-full flex justify-between items-center focus:ring-amber-500 h-12 rounded-md bg-white">
              <input
                type="text"
                placeholder="Your Email"
                className=" px-5! py-3! md:w-[50%] overflow-hidden outline-none border-none  "
              />
              <button
                className=" outline-none h-12  rounded-md  font-bold transition duration-500
               bg-[#81C408] hover:bg-[#FFB524] text-white text-sm lg:text-lg px-2! sm:px-5!"
              >
                Subscribe Now
              </button>
            </div>
          </div>

          <div className="lg:w-1/4 w-full flex justify-end gap-2 md:gap-5 items-center">
            <div
              className="border h-12 w-12 flex justify-center items-center text-xl md:text-2xl  rounded-md  
            hover:bg-[#FFB524] hover:text-white hover:border-none 
            cursor-pointer  text-[#FFB524] transition duration-500"
            >
              <FaXTwitter />
            </div>
            <div
              className="border h-12 w-12 flex justify-center items-center text-xl md:text-2xl  rounded-md  
            hover:bg-[#FFB524] hover:text-white hover:border-none 
            cursor-pointer  text-[#FFB524] transition duration-500"
            >
              <FaFacebookSquare />
            </div>
            <div
              className="border h-12 w-12 flex justify-center items-center text-xl md:text-2xl  rounded-md  
            hover:bg-[#FFB524] hover:text-white hover:border-none 
            cursor-pointer  text-[#FFB524] transition duration-500"
            >
              <IoLogoYoutube />
            </div>
            <div
              className="border h-12 w-12 flex justify-center items-center text-xl md:text-2xl rounded-md  
            hover:bg-[#FFB524] hover:text-white hover:border-none 
            cursor-pointer  text-[#FFB524] transition duration-500"
            >
              <FaLinkedin />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center">
        <div className="grid gap-5 w-[90%]  grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ">
          <div className="p-1! w-full flex flex-col gap-4 ">
            <h2 className="text-2xl py-4! font-bold text-white">
              Why People Like Us!
            </h2>
            <p className=" text-lg text-gray-400">
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the like Aldus PageMaker including of this
              Shoping store Lorem ipsum dolor sit amet.
            </p>

            <button
              className="py-3!  w-40  hover:bg-[#FFB524] hover:text-white transition 
            cursor-pointer duration-500 border text-[#81C408] flex justify-center items-center
             font-bold border-[#FFB524] rounded-md"
            >
              Read More
            </button>
          </div>

          <div className="  flex flex-col gap-2 p-1!">
            <h2 className="text-2xl py-4! font-bold text-white">Shop Info</h2>
            <Link
              href="/about"
              className="text-lg text-gray-400 hover:underline hover:text-[#FFB524] transition duration-500"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-lg text-gray-400 hover:underline hover:text-[#FFB524] transition duration-500"
            >
              Contact Us
            </Link>
            <Link
              href="#"
              className="text-lg text-gray-400 hover:underline hover:text-[#FFB524] transition duration-500"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-lg text-gray-400 hover:underline hover:text-[#FFB524] transition duration-500"
            >
              Terms & Condition
            </Link>
            <Link
              href="#"
              className="text-lg text-gray-400 hover:underline hover:text-[#FFB524] transition duration-500"
            >
              Return Policy
            </Link>
            <Link
              href="#"
              className="text-lg text-gray-400 hover:underline hover:text-[#FFB524] transition duration-500"
            >
              FAQs & Help
            </Link>
          </div>
          <div className="  flex flex-col gap-2 p-1!">
            <h2 className="text-2xl py-4! font-bold text-white">Account</h2>
            <Link
              href=""
              className="text-lg text-gray-400 hover:underline hover:text-[#FFB524] transition duration-500"
            >
              My Account
            </Link>
            <Link
              href=""
              className="text-lg text-gray-400 hover:underline hover:text-[#FFB524] transition duration-500"
            >
              Shop details
            </Link>
            <Link
              href="#"
              className="text-lg text-gray-400 hover:underline hover:text-[#FFB524] transition duration-500"
            >
              Shopping Cart
            </Link>
            <Link
              href="#"
              className="text-lg text-gray-400 hover:underline hover:text-[#FFB524] transition duration-500"
            >
              Wishlist
            </Link>
            <Link
              href="#"
              className="text-lg text-gray-400 hover:underline hover:text-[#FFB524] transition duration-500"
            >
              Order History
            </Link>
            <Link
              href="#"
              className="text-lg text-gray-400 hover:underline hover:text-[#FFB524] transition duration-500"
            >
              International Orders
            </Link>
          </div>
          <div className="  flex flex-col gap-2 p-1!">
            <h2 className="text-2xl py-4! font-bold text-white">Contact</h2>
            <div className="text-lg text-gray-400 ">
              Address: 1122 mohakhali Rd, BD 44003
            </div>
            <div className="text-lg text-gray-400 ">Email: Nipol@gmail.com</div>
            <div className="text-lg text-gray-400 ">
              Phone: +88012 3456 7890
            </div>
            <div className="text-lg text-gray-400 ">Payment Accepted</div>
            <div className=" py-3! flex justify-start items-center gap-3">
              <div className="w-12 h-7">
                {" "}
                <Image
                  className="w-full h-full object-cover object-center"
                  src={visaCard}
                  alt="visa Card"
                />
              </div>
              <div className="w-12 h-7">
                {" "}
                <Image
                  className="w-full h-full object-cover object-center"
                  src={masterCard}
                  alt="visa Card"
                />
              </div>
              <div className="w-12 h-7">
                {" "}
                <Image
                  className="w-full h-full object-cover object-center"
                  src={multiCard}
                  alt="visa Card"
                />
              </div>
              <div className="w-12 h-7">
                {" "}
                <Image
                  className="w-full h-full object-cover object-center"
                  src={paypalCard}
                  alt="visa Card"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-18  w-full flex flex-col justify-center items-center  ">
        <div className="w-[90%] flex flex-col sm:flex-row justify-between items-center p-1!">
          <div className="flex justify-center items-center gap-3 text-lg">
            <span className="text-white">
              <FaCopyright />
            </span>
            <Link href="/" className="text-[#81C408] font-bold">
              Priti Mart <span className="text-white text-sm">,</span>
            </Link>
            <span className="text-white">All right reserved.</span>
          </div>
          <div className="text-lg flex justify-center items-center text-white gap-2">
            Designed By
            <div className="text-[#81C408] font-bold underline cursor-pointer">
              Nipol Roy
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
