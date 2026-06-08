"use client"

import Link from "next/link";
import aboutBanner from "../../../public/aboutPage-Image/about-pageBanner.png"
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";


const GetShop = () => {
  return (
    <div className="w-full my-10! bg-[#82c4081a] sm:p-2! rounded-md">
          <div className="flex justify-between items-center ">
            <div className="h-20 md:h-40 w-20 md:w-50  relative">
              <Image
                src={aboutBanner}
                alt="about banner "
                fill
                className="object-center rounded-md object-cover"
              />
            </div>
            <div className="h-30 w-[50%] flex justify-center items-center flex-col">
              <p className="text-[9px] sm:text-[12px] text-center md:text-[16px] text-[#81C408]">
                Start your Shopping journey with Priti Shop.
              </p>
              <h2 className="text-[12px] sm:text-[14px] text-[#FFB524] md:text-xl lg:text-2xl xl:text-3xl text-center font-bold">
                Great Products. Great Prices. Great Experience
              </h2>
            </div>
            <Link href="/product"
              className="w-[20%] gap-1 sm:gap-2  md:gap-3 xl:gap-5 sm:w-[15%] md:w-[18%] h-7 md:h-10 border-none bg-[#81C408] flex justify-center 
            items-center text-[10px] md:text-lg cursor-pointer hover:scale-105 transition-all duration-300 rounded-md text-white"
            >
              <span>Shop Now</span>
              <span>
                <FaArrowRightLong />
              </span>
            </Link>
          </div>
        </div>
  )
}

export default GetShop
