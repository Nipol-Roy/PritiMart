"use client";

import { IoIosSend } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMailOpen } from "react-icons/io";
import { IoTimeSharp } from "react-icons/io5";

import Image from "next/image";

import banner from "../../public/contactPageImages/topBanner.png";
import messageBanner from "../../public/contactPageImages/messageBanner.png";

import CustomerServices from "../components/services/customerServices";
import GetShop from "../components/services/GetShop";

const contact = () => {
  return (
    <div className="w-full flex justify-center items-center ">
      <div className="w-[90%]  ">
        <div
          className="w-full bg-[#FEFBEE] relative  flex flex-col md:flex-row
         justify-between items-center lg:px-10!"
        >
          <div className="w-full md:w-1/2    p-2!  ">
            <h3 className="text-sm font-bold uppercase mt-10! text-[#FFB524]">
              Get in touch
            </h3>
            <div className="text-[#81C408] text-4xl font-extrabold py-5!">
              <div>We'd Love to</div>
              <div>
                <span className="text-[#FFB524] pr-2!"> Hear</span>
                From You!
              </div>
            </div>
            <p className="text-[17px] lg:w-[70%]  py-5! text-gray-500">
              Have a question, suggestion, or need support? We'er here to help
              and respond as quickly as we can.
            </p>
            <button
              className=" capitalize py-2! rounded-md px-5! flex justify-center items-center
               gap-2 transition-all duration-300  hover:scale-105
             bg-[#FFB524] border-none outline-none text-white font-bold text-[15px]"
            >
              send Message
              <span className="text-3xl">
                <IoIosSend />
              </span>
            </button>
          </div>
          <div className="h-[40vh] w-full md:w-1/2 xl:w-1/3  relative">
            <Image
              src={banner}
              alt="banner"
              fill
              className="object-center object-cover"
            />
          </div>
        </div>

        <div className="w-full  p-4!">
          <div className="flex flex-col justify-center items-center gap-2 w-full p-5!">
            <h2 className=" text-2xl md:text-4xl font-bold text-[#81C408] ">
              Contact Information
            </h2>
            <p className="text-sm md:text-lg text-center text-gray-500">
              You can reach us through any of the following channels
            </p>
          </div>

          <div className="flex flex-col p-5! md:flex-row gap-5 lg:gap-10  flex-wrap justify-center items-center">
            <div className="h-50 w-full sm:w-70  rounded-md shadow-md shadow-gray-300 flex justify-start items-center flex-col gap-2">
              <div className="text-2xl p-4! rounded-full  text-[#FFB524] bg-[#ffb62442]">
                <FaPhoneAlt />
              </div>
              <h2 className="text-xl font-bold capitalize text-gray-500">
                phone
              </h2>
              <div className="w-full flex justify-start items-center flex-col">
                <div className=" text-gray-500 text-lg">+8801923****74</div>
                <div className="text-lg text-gray-500">+8801623****47</div>
              </div>
            </div>

            <div className="h-50 w-full sm:w-70  rounded-md shadow-md shadow-gray-300 flex justify-start items-center flex-col gap-2">
              <div className="text-3xl p-4! rounded-full text-[#82c408b7]   bg-[#82c40834]">
                <FaLocationDot />
              </div>
              <h2 className="text-xl  font-bold capitalize text-gray-500 ">
                Email
              </h2>
              <div className="w-full flex justify-start items-center flex-col">
                <div className="text-lg  text-gray-500">Example@shop.com,</div>
                <div className="text-lg text-gray-500">Priti@shop.com</div>
              </div>
            </div>

            <div className="h-50 w-full sm:w-70  rounded-md shadow-md shadow-gray-300 flex justify-start items-center flex-col gap-2">
              <div className="text-3xl p-4! rounded-full  text-[#FFB524] bg-[#ffb62442]">
                <IoIosMailOpen />
              </div>
              <h2 className="text-xl  font-bold capitalize text-gray-500 ">
                Address
              </h2>
              <div className="w-full flex justify-start items-center flex-col">
                <div className="text-lg text-gray-500">
                  123, shopping street,
                </div>
                <div className="text-lg text-gray-500">Dhaka, Bangladesh</div>
              </div>
            </div>

            <div className="h-50 w-full sm:w-70  rounded-md shadow-md shadow-gray-300 flex justify-start items-center flex-col gap-2">
              <div className="text-3xl p-4! rounded-full   text-[#82c408b7]   bg-[#82c40834]">
                <IoTimeSharp />
              </div>
              <h2 className="text-xl  font-bold capitalize text-gray-500 ">
                Working Hours
              </h2>
              <div className="w-full flex justify-start items-center flex-col">
                <div className="text-lg text-gray-500">
                  Sat-Thu:9:00 AM - 9:00 PM
                </div>
                <div className="text-lg text-gray-500">Friday: Closed</div>
              </div>
            </div>
          </div>

          <div className="  p-3! bg-[#FEFEFE]">
            <div className="w-full h-full  flex flex-col md:flex-row gap-5">
              <div className="w-full md:w-1/2   h-100 relative flex justify-center items-center">
                <div className=" w-full h-full xl:w-2/3 relative ">
                  <Image
                    src={messageBanner}
                    alt="messageBanner"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2  ">
                <form action="" className=" h-full w-full flex flex-col gap-2">
                  <div className=" flex flex-col gap-1">
                    <label
                      htmlFor="fullName"
                      className=" text-[16px] font-extrabold text-gray-600"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      className="border-2 w-full bg-[#F1F7F0] rounded-md border-gray-300 px-4! outline-none py-2!"
                    />
                  </div>

                  <div className=" flex flex-col gap-1">
                    <label
                      htmlFor="email"
                      className=" text-[16px] font-extrabold text-gray-600"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="border-2 w-full bg-[#F1F7F0] rounded-md border-gray-300 px-4! outline-none py-2!"
                    />
                  </div>

                  <div className=" flex flex-col gap-1">
                    <label
                      htmlFor="email"
                      className=" text-[16px] font-extrabold text-gray-600"
                    >
                      Phone
                    </label>
                    <input
                      type="number"
                      name="phoneNumber"
                      id="phoneNumber"
                      className="border-2 w-full bg-[#F1F7F0] rounded-md border-gray-300 px-4! outline-none py-2!"
                    />
                  </div>

                  <div className=" flex flex-col gap-1">
                    <label
                      htmlFor="message"
                      className=" text-[16px] font-extrabold text-gray-600"
                    >
                      Message
                    </label>
                    <textarea
                    rows={3}
                      name="message"
                      className="border-2 w-full bg-[#F1F7F0] rounded-md border-gray-300 px-4! outline-none py-2!"
                      id="message"
                    ></textarea>
                  </div>

                  <button className="border-2 hover:scale-105 text-[16px] font-extrabold text-gray-600 hover:bg-[#F1F7F0] transition-all duration-300
                   border-gray-300 rounded-md  w-full h-12 flex justify-center items-center cursor-pointer">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="py-5!">
            <CustomerServices />
            <GetShop />
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;

// text-[#81C408] green
// text-[#FFB524] golden
