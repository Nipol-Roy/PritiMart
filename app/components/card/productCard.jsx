"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { MdOutlineStar, MdVerifiedUser } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa6";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { PiFlagBannerThin } from "react-icons/pi";

import Image from "next/image";

export default function ProductCard({ item }) {

  // const mainPrice = item.price
  // const discountPercentage = item.discountPercentage.toFixed(1)
  // const discountPrice = ((discountPercentage / 100) * mainPrice).toFixed(2)
    //  const rating = item

    //  console.log(rating)
  // console.log(discountPrice)
  // console.log(discountPercentage)
  // console.log(mainPrice)


  return (
    <div className=" w-88  p-3!  hover:shadow-lg  transition duration-500 shadow-gray-400 bg-[#f4f6f8] rounded-md flex flex-col justify-between items-center relative gap-2">
      <div className=" w-full h-60 bg-white border border-gray-200 relative">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          speed={1000}
          pagination={{ clickable: true }}
          loop="true"
          className="mySwiper"
        >
          {item.images.map((images, idx) => {
            return (
              <SwiperSlide key={idx} className="">
                <div className="w-full hover:scale-110 transition duration-500  h-full flex  justify-center items-start  relative ]">
                  <div className=" w-[65%] h-full  relative  flex overflow-hidden justify-center items-start p-2! ">
                    <Image
                      fill
                      className=" scale-80    object-cover object-center"
                      src={`${images}`}
                      alt="product image"
                    />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="w-full h-36 flex flex-col gap-2 relative">
        <div className=" flex justify-start items-center">
          <h2 className="text-xl line-clamp-1 text-gray-700 font-semibold">
            {item.title}
          </h2>
        </div>
        <div className="w-full flex justify-start items-center  relative">
          <div className="text-[#81c408] flex gap-1 text-md font-bold border-r-2 border-gray-200 pr-2!">
            ${((item.price)-(((item.discountPercentage / 100) * item.price))).toFixed(2)} / 
            <span className="text-sm line-through  flex justify-center items-end">
              {item.price} 
            </span>
          </div>

          <div className="px-2! text-gray-500 text-sm font-semibold border-r-2 border-gray-200">
            {" "}
            {item.stock || 0} Stock
          </div>
         <div className=" px-1! capitalize text-gray-500 text-sm font-semibold ">
            
            {item.tags[1]} 
          </div>
        </div>
        <div className="w-full flex justify-start items-center   ">
          <div className="flex pr-3!  justify-center items-center gap-1">
            <div className="text-[#ffb524] text-md">
              <MdOutlineStar />
            </div>
            <div className="text-gray-500 text-sm font-semibold">
              {item.rating.toFixed(1)} /5.0
            </div>
          </div>
          <div className=" flex px-3!  justify-center gap-1 items-center">
            <div
              className={` ${item.availabilityStatus === "Out of Stock" ? " text-gray-500" : "text-[#81c408]"}  text-lg`}
            >
              {item.availabilityStatus === "Out of Stock" ? (
                <AiFillCloseCircle />
              ) : (
                <AiFillCheckCircle />
              )}
            </div>
            <div className="text-sm text-gray-500 font-semibold">
              {item.availabilityStatus}
            </div>
          </div>
          <div className="pl-3!  text-gray-500 text-sm font-semibold">
            {item.brand || "No Brand"}
          </div>
        </div>

        <button
          className="w-full border py-2! bg-[#81c408] flex justify-center items-center gap-2
           cursor-pointer hover:bg-[#ffb524] hover:text-white transition
             duration-500 text-white font-semibold rounded-md  disabled:bg-gray-500 disabled:cursor-not-allowed"
          disabled={item.availabilityStatus === "Out of Stock"}
        >
          <span className="text-xl">
            <FaCartPlus />
          </span>
          Add to Cart
        </button>
      </div>
    </div>
  )
}
