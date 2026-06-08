"use client"

import { FaAward } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { SiSpringsecurity } from "react-icons/si";

const customerServices = () => {
  return (
    <div className=" flex flex-col md:flex-row  bg-white rounded-2xl z-20 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 w-full p-3! gap-3">
                <div className="border border-gray-200  rounded-md h-35 flex w-full justify-center items-center ">
                  <div className="flex gap-3 justify-start items-center  px-5!  w-full ">
                    <div className=" p-4! rounded-full text-2xl md:text-4xl text-[#81C408] bg-[#87ad4136]">
                      <FaAward />
                    </div>
                    <div className="flex flex-col">
                      <h2 className=" text-xl font-bold text-[#FFB524]">
                        Quality Products
                      </h2>
                      <p className=" text-sm md:text-lg ">
                        Carefully selected Products you can trust.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border border-gray-200  rounded-md h-35 flex w-full justify-center items-center ">
                  <div className="flex gap-3 justify-start items-center  px-5! w-full ">
                    <div className=" p-4! rounded-full text-2xl md:text-4xl  text-[#81C408] bg-[#87ad4136]">
                      <FaShippingFast />
                    </div>
                    <div className="flex flex-col">
                      <h2 className="text-xl font-bold text-[#FFB524]">
                        Fast Delivery
                      </h2>
                      <p className="text-sm md:text-lg ">
                        Quick and reliable delivery at your doorstep.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className=" border border-gray-200 rounded-md h-35 flex w-full 
                justify-center items-center "
                >
                  <div className="flex  gap-3 justify-start items-center  px-5!  w-full ">
                    <div
                      className=" p-4! rounded-full text-2xl md:text-4xl  text-[#81C408]
                     bg-[#87ad4136]"
                    >
                      <SiSpringsecurity />
                    </div>
                    <div className="flex flex-col">
                      <h2 className="text-xl  font-bold text-[#FFB524]">
                        Secure Shopping
                      </h2>
                      <p className="text-sm md:text-lg ">
                        100% secure payment and data protection.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="border border-gray-200 rounded-md h-35 flex w-full 
                justify-center items-center "
                >
                  <div className="flex  gap-3 justify-start items-center  px-5!  w-full">
                    <div
                      className=" p-4! rounded-full text-2xl md:text-4xl  text-[#81C408]
                     bg-[#87ad4136]"
                    >
                      <BiSupport />
                    </div>
                    <div className="flex flex-col">
                      <h2 className="text-xl font-bold text-[#FFB524]">
                        Customer Support{" "}
                      </h2>
                      <p className="text-sm md:text-lg">
                        We're here to help you anytime.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default customerServices
