"use client";

import { FaRegStarHalfStroke } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoArrowUndoSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoStarHalf } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import { useMemo, useState, useEffect } from "react";
import { fetchProduct } from "@/app/lib/api/fetchProduct";
import ProductCard from "@/app/components/card/productCard";
import { ratingResult } from "@/public/data/testimonialData";

import bkashLogo from "../../../public/Images/BKash_Logo.png";

const page = () => {
  const paramsItem = useParams();
  const dispatch = useDispatch();

  const { product } = useSelector((state) => state.product);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!product || product.length === 0) {
      fetchProduct(dispatch);
    }
  }, [product, dispatch]);

  const visitProduct = useMemo(() => {
    return product.find((item) => item.id === Number(paramsItem.id));
  }, [paramsItem.id, product]);

  useEffect(() => {
    if (visitProduct?.images?.length > 0) {
      setSelectedImage(visitProduct.images[0]);
    }
  }, [visitProduct]);

  console.log(visitProduct);
  console.log(ratingResult);

  const relatedProduct = product.filter(
    (item) => item.category === visitProduct?.category,
  );
  // console.log(relatedProduct);
  const [stockStatus, setStockStatus] = useState(false);

  const relatedCategoryProduct = relatedProduct.filter(
    (items) => items.id !== visitProduct.id,
  );

  const [addWish, setAddWish] = useState(false);

  
  return (
    <div className="w-full  flex justify-center items-start p-5! ">
      <div className="w-full sm:w-[90%] ">
        <div className="w-full h-full flex   gap-5! flex-col md:flex-row  justify-center items-start">
          <div className=" w-full md:w-1/2 relative  flex flex-col gap-4 rounded-md justify-start items-center  p-2! bg-[#F4F6F8]">
            <div className=" w-full absolute top-0 right-0 z-40!">
              <div className="flex justify-between items-center px-2! ">
                <Link
                  href="/product"
                  className="px-5!  py-2! border border-[#81c408] hover:border-[#ffb524]
                 text-white transition-all duration-300 cursor-pointer bg-[#81c408] 
                 hover:bg-[#ffb524] text-xl rounded-md"
                >
                  <IoArrowUndoSharp />
                </Link>
                <div
                  onClick={() => setAddWish(!addWish)}
                  className="text-2xl hover:scale-105 transition-all  duration-300 cursor-pointer text-[#ffb524]"
                >
                  {addWish ? <FaHeart /> : <FaRegHeart />}
                </div>
              </div>
            </div>
            <div className="h-87.5 w-87.5  z-0! sm:h-120 sm:w-120  xl:h-150 xl:w-150 relative flex justify-center items-center p-5! ">
              <Image
                src={selectedImage}
                fill
                alt="product image"
                className="object-cover object-center"
              />
            </div>
            <div className="w-full  bg-[#F4F6F8] relative flex justify-center items-center flex-wrap p-4! gap-4  border-t border-gray-300">
              {visitProduct?.images?.map((pic, idx) => {
                return (
                  <div
                    onClick={() => setSelectedImage(pic)}
                    key={idx}
                    className={`${selectedImage === pic ? "border-[#ffb524]" : "border-[#81c408]"} border-2 cursor-pointer bg-white h-12 w-12 sm:h-17 sm:w-17 md:w-20 md:h-20 lg:w-25 lg:h-25 relative 
                  p-2! rounded-md flex justify-center items-center`}
                  >
                    <Image
                      src={pic}
                      alt="image thumbnail"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className=" w-full md:w-1/2 p-2! relative ">
            <div className=" flex flex-col gap-2 ">
              <h2 className="text-sm text-gray-500 font-semibold capitalize">
                {visitProduct?.category}
              </h2>
              <h2 className="text-2xl text-gray-700 font-bold capitalize">
                {visitProduct?.title}
              </h2>
              <div className="flex justify-start items-center gap-2">
                <span className=" text-lg text-[#ffb524]">
                  <FaRegStarHalfStroke />
                </span>
                <p className="text-gray-500 font-semibold">
                  {visitProduct?.rating} Rating
                </p>
                <span className="underline text-sm text-gray-500">
                  ({visitProduct?.reviews.length} reviews)
                </span>
              </div>

              <div className="text-2xl font-bold text-[#81c408]">
                <span className="text-2xl font-extrabold ">
                  $
                  {(
                    visitProduct?.price -
                    (visitProduct?.discountPercentage / 100) *
                      visitProduct?.price
                  ).toFixed(2) || 0}
                </span>{" "}
                <span className="line-through text-lg ">
                  <sub>${visitProduct?.price?.toFixed(2) || 0}</sub>{" "}
                </span>
              </div>
              <div className="mt-3!">
                <span
                  className={` p-1! bg-[#ffb524] text-white rounded-md font-bold `}
                >
                  {visitProduct?.brand || "No Brand"}
                </span>
              </div>

              <div
                className="h-15 rounded-md p-1! mt-5! w-4/5 md:w-full 
             flex justify-start items-center bg-[#F4F6F8]  border
              border-gray-100 gap-2"
              >
                <div className="h-8 w-25 relative">
                  <Image
                    src={bkashLogo}
                    alt="bkash Logo"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="h-full w-[80%] leading-4 flex flex-col justify-center items-start">
                  <div className="text-sm text-gray-600">
                    Exclusive Bkash Payment Offer{" "}
                  </div>
                  <div className="font-bold text-sm">Save &#2547;100 Today</div>
                </div>
              </div>

              <div className="py-5! w-full  flex justify-between md:justify-start gap-5 items-center ">
                <button
                  className=" w-40 py-3! text-white hover:text-[#ffb524] 
                 text-lg font-bold capitalize transition-all duration-500 bg-[#81c408]
                   flex justify-center items-center  rounded-md border"
                >
                  add To bucket
                </button>
                <button
                  disabled={visitProduct?.availabilityStatus === "Out of Stock"}
                  className="w-40 py-3! bg-[#ffb524] text-white disabled:bg-gray-400 disabled:hover:text-white disabled:cursor-not-allowed capitalize font-bold transition-all duration-500 hover:text-[#81c408] text-lg flex justify-center items-center rounded-md cursor-pointer border"
                >
                  Buy now
                </button>
              </div>
              <div className="w-full gap-2 p-1! justify-center items-start  grid grid-cols-2 lg:grid-cols-3 bg-[#F4F6F8] rounded-md ">
                <div className=" rounded-md p-1! flex flex-col justify-center items-center">
                  <div className="text-lg font-bold text-gray-500">
                    Discount
                  </div>
                  <div className="text-gray-400">
                    {visitProduct?.discountPercentage}%
                  </div>
                </div>

                <div className=" rounded-md p-1! flex flex-col justify-center items-center ">
                  <div className="text-lg font-bold text-gray-500">
                    Warranty
                  </div>
                  <div className="text-gray-400">
                    {visitProduct?.warrantyInformation}
                  </div>
                </div>

                <div className=" rounded-md p-1! flex flex-col justify-center items-center ">
                  <div className="text-lg font-bold  text-gray-500">
                    Stock Status
                  </div>
                  <div className="text-gray-400">
                    {visitProduct?.availabilityStatus}
                  </div>
                </div>
                <div className=" rounded-md p-1! flex flex-col justify-center items-center ">
                  <div className="text-lg font-bold text-gray-500">
                    Product ID
                  </div>
                  <div className="text-gray-400">
                    {visitProduct?.meta?.barcode}
                  </div>
                </div>
                <div className=" rounded-md p-1! flex flex-col justify-center items-center ">
                  <div className="text-lg font-bold text-gray-500">
                    Return Policy
                  </div>
                  <div className="text-gray-400">
                    {visitProduct?.returnPolicy}
                  </div>
                </div>
                <div className=" rounded-md p-1! flex flex-col justify-center items-center ">
                  <div className="text-lg font-bold text-gray-500">
                    Shipping
                  </div>
                  <div className="text-gray-400">
                    {visitProduct?.shippingInformation}
                  </div>
                </div>
              </div>
              <div className=" w-full  p-2! text-lg">
                <div className="text-lg font-bold text-gray-500">
                  Description
                </div>
                <div>{visitProduct?.description}</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="pt-20! pb-2! flex justify-between items-center text-xl md:text-2xl font-bold text-gray-400">
            <h2>Similar brands</h2>

            <div className="flex justify-center items-center  gap-2">
              <button className="relatedProductArrow-prev transition-all cursor-pointer duration-300 px-5! py-2! text-lg hover:text-[#ffb524] text-[#81c408] border rounded-md">
                <IoIosArrowRoundBack />
              </button>
              <button className="relatedProductArrow-next transition-all cursor-pointer duration-300 px-5! py-2! text-lg hover:text-[#ffb524]  text-[#81c408] border rounded-md">
                <IoIosArrowRoundForward />
              </button>
            </div>
          </div>
          <div className=" flex justify-center items-center p-2! lg:p-4! relative  border  bg-white border-gray-300 rounded-md">
            <Swiper
              modules={[Navigation, Autoplay]}
              slidesPerView="auto"
              spaceBetween={40}
              autoplay={{ delay: 3000 }}
              speed={1000}
              loop={true}
              navigation={{
                nextEl: ".relatedProductArrow-next",
                prevEl: ".relatedProductArrow-prev",
              }}
              className=" rounded-md w-full   "
            >
              {relatedCategoryProduct.map((item, idx) => {
                return (
                  <SwiperSlide className="w-88!  ">
                    <ProductCard key={idx} item={item} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>

        <div className=" w-full  mt-10!">
          <div className="w-full h-full">
            <h2 className="text-2xl text-gray-400 font-bold py-2! border-b border-gray-400">
              Customer reviews
            </h2>
            <div className="text-xl">
              <h2 className="text-lg text-gray-400 py-3! border-b border-gray-200 ">
                Rating and Review
              </h2>
              <div className=" flex justify-between items-center my-10! relative  flex-col md:flex-row md:w-3/4 lg:w-1/2">
                <div className="w-full md:w-[40%] h-full  flex justify-center items-center flex-col ">
                  <div className="text-4xl font-bold text-gray-600">
                    {visitProduct?.reviews[0]?.rating}
                    <span className="text-2xl text-gray-500">/5</span>
                  </div>
                  <div className="text-xl text-[#ffb524] flex  gap-1 p-2!">
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <IoStarHalf />
                  </div>
                  <h6 className="text-sm text-gray-600 font-bold">
                    {ratingResult.totalReviews} Ratings
                  </h6>
                </div>
                <div className=" w-full h-full md:w-[60%] p-2! gap-2">
                  {ratingResult.ratingDistribution.map((item, idx) => {
                    console.log(item.percentage);
                    return (
                      <div
                        key={idx}
                        className=" w-full h-full flex justify-between   items-center"
                      >
                        <div className="flex  w-[35%] text-[#ffb524] justify-center items-center text-xl">
                          {[...Array(5)].map((_, i) => {
                            return i < item.star ? <FaStar /> : <FaRegStar />;
                          })}
                        </div>

                        <div className=" bg-[#81c408] rounded-sm my-1! h-5 flex justify-start items-center w-[60%]">
                          <div
                            className="h-full bg-[#ffb524] "
                            style={{ width: `${item.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-lg text-gray-400 py-3! border-b border-gray-200">
                Product Reviews
              </h2>
              <div>now Start Product review</div>
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
