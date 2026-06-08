"use client";

import { FaArrowRightLong } from "react-icons/fa6";

import { SiSpringsecurity } from "react-icons/si";

import { FaHeart } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import { FaEye } from "react-icons/fa";
import { GoGift } from "react-icons/go";
import { IoPricetagSharp } from "react-icons/io5";
import { BsBox } from "react-icons/bs";
import { BiLike } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { RiEmotionHappyLine } from "react-icons/ri";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";
import aboutImage from "../../public/aboutPage-Image/ChatGPT Image May 5, 2026, 12_42_49 AM.png";
import historyImage from "../../public/aboutPage-Image/historyImage.png";

import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import { fetchProduct } from "../lib/api/fetchProduct";
import CustomerServices from "../components/services/customerServices";
import GetShop from "../components/services/GetShop";

const page = () => {
  const happyCustomer = 10000;
  const Products = 500;
  const Brands = 50;
  const satisfactionRate = 90;

  const dispatch = useDispatch();

  const { product } = useSelector((state) => state.product);
  console.log(product);

  useEffect(() => {
    if (!product || product.length == 0) {
      fetchProduct(dispatch);
    }
  }, [product, dispatch]);

  const bestCategory = [];

  product.forEach((product) => {
    if (product.rating >= 4.9) {
      bestCategory.push(product);
    }
  });

  const findCategory = Object.values(
    bestCategory.reduce((acc, pro) => {
      if (!acc[pro.category]) {
        acc[pro.category] = pro;
      }
      return acc;
    }, {}),
  );
  console.log(findCategory);

  return (
    <div className=" w-full  bg-[#F9FAF7] flex justify-center items-center py-5!">
      <div className="  h-full w-[90%] flex flex-col gap-1">
        <div className="  w-full flex justify-between items-center flex-col gap-4 md:flex-row relative">
          <div className="flex flex-col w-full md:w-1/2 xl:w-1/3   ">
            <div className="">
              <div className="text-[35px] md:text-[45px] font-bold text-[#FFB524] pt-5!">
                Welcome to
              </div>
              <div className="text-[30px] md:text-[40px] font-bold text-[#81C408]">
                Priti Shop
              </div>
            </div>
            <div className="py-10! ">
              <p className="text-[16px] md:text-xl">
                Priti Shop is an online shopping platform designed to make your
                everyday shopping simple, affordable, and reliable. We bring
                together a wide range of quality products in one place, so you
                can shop easily and confidently from the comfort of your home.
              </p>
            </div>

            <div className=" pb-3!  flex items-center ">
              <Link
                href="/product"
                className="w-45 md:w-50 rounded-md flex justify-center gap-5! items-center cursor-pointer
               hover:scale-105 transition-all duration-300 h-11 md:h-12 bg-[#81C408] text-white"
              >
                <h3 className="font-bold text-sm md:text-lg">Start Shopping</h3>
                <span className="text-lg md:text-xl">
                  <FaArrowRightLong />
                </span>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2  xl:w-2/3 h-[40vh] md:h-[60vh] relative rounded-2xl overflow-hidden">
            <Image
              src={aboutImage}
              alt="about page image"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
        <div className="z-10 -mt-15!">
          <CustomerServices />
        </div>

        <div className="w-full py-10! flex flex-col md:flex-row justify-between items-center ">
          <div className="w-full md:w-1/2  ">
            <h2 className=" p-2!  text-[17px] md:text-lg font-semibold uppercase text-[#81C408]">
              Our Story
            </h2>
            <div className="flex flex-col gap-2 px-2! ">
              <h2 className="text-4xl font-extrabold text-[#FFB524]">
                Our Jurney Started
              </h2>
              <h2 className="text-[#81C408] text-3xl font-extrabold">
                With You in Mind
              </h2>
              <p className="py-3! w-[90%] lg:text-lg xl:w-[85%]">
                Priti Shop was created with a simple idea to make online
                shopping easier and more trustworthy for everyone. As online
                shopping continues to grow, we wanted to build a platform where
                customers can find the products they need without confusion or
                hassle.
              </p>
              <button
                className="outline-none w-50 my-5! md:my-0! lg:my-5! py-2! text-white font-semibold text-lg
               rounded-md cursor-pointer hover:scale-105 transition-all duration-300
                bg-[#81C408] flex justify-center items-center gap-5"
              >
                <span>Read More</span>
                <span>
                  <FaArrowRightLong />
                </span>
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-[40%] h-70   lg:h-90 relative">
            <Image
              src={historyImage}
              alt="history Image"
              fill
              className="object-cover object-center rounded-md "
            />
            <div
              className="w-55 h-30  absolute bottom-0 left-0 md:-left-10 
            rounded-md flex flex-col justify-center items-center p-2! shadow-sm shadow-gray-300  gap-1 bg-white"
            >
              <div className="flex gap-2 justify-start items-center">
                <div className="text-2xl text-[#81C408]">
                  <FaHeart />
                </div>
                <h2 className="text-lg font-semibold">Happy Customers</h2>
              </div>
              <div className="text-4xl font-bold text-[#FFB524]">
                {happyCustomer}+
              </div>
              <p className=" px-2!">And Growing</p>
            </div>
          </div>
        </div>

        <div className=" p-5! flex flex-col justify-center items-center gap-5 bg-[#afc97f31] rounded-md ">
          <h2 className=" p-3! text-2xl md:text-4xl font-bold text-[#81C408]">
            Our Mission & Vision
          </h2>
          <div className="flex flex-col md:flex-row gap-5 md:my-5!">
            <div className="flex justify-center items-center gap-5 w-full border-r border-[#afc97fe1]">
              <div
                className="text-4xl md:text-6xl text-[#81C408] bg-white shadow-sm
               shadow-gray-300 p-3! rounded-full "
              >
                <TbTargetArrow />
              </div>
              <div className="xl:w-1/2 ">
                <h2 className="text-lg md:text-xl font-semibold">
                  Our Mission
                </h2>
                <p className="text-sm md:text-[16px] pr-3!">
                  To provide quality products at the best prices with
                  outstanding customer service and a delightful shopping
                  experience
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-5 w-full">
              <div
                className="text-4xl md:text-6xl text-[#81C408] bg-white shadow-sm
               shadow-gray-300 p-3! rounded-full "
              >
                <FaEye />
              </div>
              <div className="xl:w-1/2">
                <h2 className="text-lg md:text-xl font-semibold">Our Vision</h2>
                <p className="text-sm md:text-[16px] pr-3!">
                  To Become a leading online shopping platform known for trust
                  ,quality, affordability and customer happiness.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-5! ">
          <h2 className=" p-5! text-2xl md:text-4xl font-bold text-[#81C408]  flex justify-center items-center">
            Why Choose Priti Shop?
          </h2>
          <div className="grid grid-cols-1 gap-5  sm:grid-cols-2 md:grid-cols-3   lg:grid-cols-5  justify-center items-center  p-2!">
            <div className=" flex justify-center items-center">
              <div className=" flex flex-col justify-center items-center gap-3! w-2/3  sm:w-full py-5! rounded-md  border border-gray-200">
                <div className="text-2xl text-[#81C408] p-4! bg-[#c2fd5338]  rounded-full m-2!">
                  <GoGift />
                </div>
                <div className="flex flex-col justify-center items-center gap-2!">
                  <h2 className="text-lg font-semibold text-center text-[#FFB524]">
                    Wide Range of Products
                  </h2>
                  <p className="text-sm w-2/3 text-center">
                    From daily essentials to special items-all in one place.
                  </p>
                </div>
              </div>
            </div>
            <div className=" flex justify-center items-center">
              <div className=" flex flex-col justify-center items-center gap-3! w-2/3  sm:w-full py-5! rounded-md  border border-gray-200">
                <div className="text-2xl text-[#81C408] p-4! bg-[#c2fd5338]  rounded-full m-2!">
                  <IoPricetagSharp />
                </div>
                <div className="flex flex-col justify-center items-center gap-2!">
                  <h2 className="text-lg font-semibold text-center text-[#FFB524]">
                    Best Prices
                  </h2>
                  <p className="text-sm w-2/3 text-center">
                    Competitive prices and exciting offers every day.
                  </p>
                </div>
              </div>
            </div>
            <div className=" flex justify-center items-center">
              <div className=" flex flex-col justify-center items-center gap-3! w-2/3  sm:w-full py-5! rounded-md  border border-gray-200">
                <div className="text-2xl text-[#81C408] p-4! bg-[#c2fd5338]  rounded-full m-2!">
                  <BsBox />
                </div>
                <div className="flex flex-col justify-center items-center gap-2!">
                  <h2 className="text-lg font-semibold text-center text-[#FFB524]">
                    Easy Returns
                  </h2>
                  <p className="text-sm w-2/3  text-center">
                    Hassle-free returns
                  </p>
                </div>
              </div>
            </div>
            <div className=" flex justify-center items-center">
              <div className=" flex flex-col justify-center items-center gap-3! w-2/3  sm:w-full py-5! rounded-md  border  border-gray-200">
                <div className="text-2xl text-[#81C408] p-4! bg-[#c2fd5338] rounded-full m-2!">
                  <SiSpringsecurity />
                </div>
                <div className="flex flex-col justify-center items-center gap-2!">
                  <h2 className="text-lg font-semibold text-center text-[#FFB524]">
                    Trusted & Secure
                  </h2>
                  <p className="text-sm w-2/3 text-center">
                    Your security and privacy are our top priority.
                  </p>
                </div>
              </div>
            </div>
            <div className=" flex justify-center items-center">
              <div className=" flex flex-col justify-center items-center gap-3! w-2/3 sm:w-full rounded-md border border-gray-200 py-5!  ">
                <div className="text-2xl text-[#81C408] p-4! bg-[#c2fd5338]  rounded-full m-2!">
                  <BiLike />
                </div>
                <div className="flex flex-col justify-center items-center gap-2!">
                  <h2 className="text-lg font-semibold text-center text-[#FFB524]">
                    Satisfaction Guaranteed
                  </h2>
                  <p className="text-sm w-2/3 text-center">
                    We are committed to 100% customer satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className=" p-5! text-2xl md:text-4xl font-bold text-[#81C408]  flex justify-center items-center">
            Our Top Categories
          </div>
          <div className="w-full h-60 px-8! sm:px-2!  ">
            <Swiper
              modules={[Navigation, Autoplay]}
              slidesPerView="auto"
              spaceBetween={22}
              autoplay={{ delay: 3000 }}
              speed={1000}
              loop={true}
              navigation={{
                nextEl: ".relatedProductArrow-next",
                prevEl: ".relatedProductArrow-prev",
              }}
            >
              {findCategory.map((item, idx) => {
                return (
                  <SwiperSlide className=" w-80! sm:w-66!  relative ">
                    <div
                      key={idx}
                      className="flex cursor-pointer flex-col justify-between h-full w-full items-center  relative"
                    >
                      <div className="h-[80%] w-full flex bg-[#a9d4593f] justify-center items-center rounded-md">
                        <div className=" h-full w-[80%]  relative">
                          <Image
                            src={item?.images[0]}
                            alt="category image"
                            fill
                            className="object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className=" text-[#FFB524] h-[20%] w-full  flex justify-center items-center font-semibold text-lg">
                        {item.category}
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>

        <div className="w-full rounded-md text-white md:my-5!  border">
          <div className="grid grid-cols-1 p-5! gap-2  md:grid-cols-2 xl:grid-cols-4">
            <div className=" h-25 md:h-20 border rounded-md  bg-[#FFB524] border-gray-200 flex justify-center items-center gap-6">
              <div className="text-4xl md:text-6xl">
                <BsPeopleFill />
              </div>
              <div>
                <h2 className="text-3xl font-bold">{happyCustomer}+</h2>
                <div className="font-semibold">Happy Customers</div>
              </div>
            </div>

            <div className="h-25 md:h-20 border rounded-md  bg-[#FFB524] border-gray-200 flex justify-center items-center gap-6">
              <div className="text-4xl md:text-6xl">
                <RiShoppingBag4Fill />
              </div>
              <div>
                <h2 className="text-3xl font-bold">{Products}+</h2>
                <div className="font-semibold">Products</div>
              </div>
            </div>

            <div className="h-25 md:h-20  border rounded-md  bg-[#FFB524] border-gray-200 flex justify-center items-center gap-6">
              <div className="text-4xl md:text-6xl">
                <GoGift />
              </div>
              <div>
                <h2 className="text-3xl font-bold">{Brands}+</h2>
                <div className="font-semibold">Brands</div>
              </div>
            </div>

            <div className="h-25 md:h-20 border rounded-md  bg-[#FFB524]  flex justify-center items-center gap-6">
              <div className="text-4xl md:text-6xl">
                <RiEmotionHappyLine />
              </div>
              <div>
                <h2 className="text-3xl font-bold">{satisfactionRate}%</h2>
                <div className="font-semibold">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>

        <GetShop />
      </div>
    </div>
  );
};

export default page;
