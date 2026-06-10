"use client";

import bannerImage from "../../public/productPageImages/product page banner.png";
import Image from "next/image";

import { useSelector, useDispatch } from "react-redux";

import { fetchProduct } from "../lib/api/fetchProduct";
import { useEffect, useState } from "react";

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { VscDash } from "react-icons/vsc";
import { IoStarSharp } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";

const page = () => {
  const dispatch = useDispatch();

  const { product } = useSelector((state) => state.product);

  useEffect(() => {
    if (!product || product.length == 0) {
      fetchProduct(dispatch);
    }
  }, [product, dispatch]);

  const topCategory = product.filter((item) => item.rating > 4.7);
  // console.log(topCategory)
  const allCategory = [...new Set(product.map((item) => item.category))];
  // console.log(allCategory);

  const category = [...new Set(topCategory.map((item) => item.category))];
  // console.log(category);

  const existBrand = product.filter((products)=> products.brand)
  // console.log(existBrand)

  const brand = [...new Set(existBrand.map((item) => item.brand))];
  console.log(brand)


  const [onButton, setOnButton] = useState("AllButton");
  const [showCategory, setShowCategory] = useState(false);
  const [showPriceRange, setShowPriceRange] = useState(false);
  const [showRating, setShowRating] = useState(false);
  const [showDiscount, setShowDiscount] = useState(false);
  const [showAvailability , setShowAvailability] = useState(false);
  const [showBrand, setShowBrand] = useState(false)

  // console.log(onButton)

  // console.log(product);

  return (
    <div className=" w-full flex justify-center items-center  ">
      <div className="w-[90%] h-full py-5! relative">
        <div
          className=" w-full bg-[#F5FCEE] rounded-md overflow-hidden relative 
         flex flex-col md:flex-row justify-center md:justify-between items-center 
         md:items-center "
        >
          <div
            className="w-full md:w-1/2  flex flex-col  gap-2 h-20 md:h-50 justify-center 
          items-center absolute z-10  md:relative"
          >
            <h2
              className="text-xl md:text-2xl  w-full lg:text-3xl xl:text-4xl font-extrabold px-2!
              text-center sm:text-left  md:text-gray-600 "
            >
              Shop Fresh & Quality Products
            </h2>
            <h6
              className="px-2! text-center sm:text-left  w-full  md:text-gray-950 
             text-sm sm:text-lg xl:text-xl"
            >
              Explore groceries, beauty, fashion, gadgets, home essentials and
              more.
            </h6>
          </div>
          <div className="w-full md:w-1/2 opacity-30 md:opacity-100 h-50 lg:h-70 relative">
            <Image
              src={bannerImage}
              fill
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="my-3! flex justify-start flex-wrap items-center gap-2 p-1!">
          <button
            onClick={() => setOnButton("AllButton")}
            className={`py-1! outline-none text-[#81c408] hover:bg-[#81c408] transition-all duration-300
           hover:text-white font-semibold cursor-pointer rounded-md text-[12px] md:text-sm
            px-3! border ${onButton == "AllButton" ? "bg-[#ffb524] text-white hover:bg-[#ffb524] hover:text-white" : ""}`}
          >
            All Product
          </button>

          {category.map((item) => (
            <button
              onClick={() => setOnButton(item)}
              className={`py-1! outline-none text-[#81c408] hover:bg-[#81c408]
           hover:text-white font-semibold cursor-pointer rounded-md text-[12px] md:text-sm transition-all duration-300
            px-3! border ${onButton == item ? "bg-[#ffb524] text-white hover:bg-[#ffb524] hover:text-white" : ""}`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="w-full min-h-100  py-3! flex flex-col md:flex-row justify-between gap-5">
          <div className="md:hidden">Filter</div>
          <div className="md:w-70 border  h-full hidden rounded-md border-gray-400 md:flex flex-col gap-2 p-3! ">
            <div className="flex flex-col gap-3! w-full">
              <div
                onClick={() => setShowCategory(!showCategory)}
                className="text-lg w-full cursor-pointer font-semibold border
                 border-gray-400 rounded-md flex justify-between px-3! items-center"
              >
                Category
                <span className="text-xl cursor-pointer">
                  {showCategory ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </div>
              <div className={` flex-col ${showCategory ? "flex" : "hidden"}`}>
                {allCategory.map((item) => (
                  <div className="flex gap-2 cursor-pointer ">
                    <input type="checkbox" name={item} value={item} id={item} />
                    <label htmlFor={item} className="flex gap-2 font-semibold">
                      {item}
                      <span>
                        (
                        {
                          product.filter((product) => product.category == item)
                            .length
                        }
                        )
                      </span>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div
              className=" border  
                 border-gray-400 flex  rounded-md flex-col gap-2"
            >
              <div
                onClick={() => setShowPriceRange(!showPriceRange)}
                className="text-lg w-full font-semibold cursor-pointer rounded-md flex justify-between px-3! items-center"
              >
                Price Range
                <span className="text-xl cursor-pointer">
                  {showPriceRange ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </div>
              <div
                className={`w-full  flex-col gap-2 justify-between items-center pb-2! ${showPriceRange ? "flex" : "hidden"}`}
              >
                <div className="w-full px-2!">
                  <input type="range" className="w-full " />
                </div>
                <div className="flex justify-between items-center  w-full px-2!">
                  <input
                    type="number"
                    className="outline-none px-2! border border-gray-400 w-20 rounded-md"
                  />
                  <span className="text-2xl font-bold text-gray-400">
                    <VscDash />
                  </span>
                  <input
                    type="number"
                    className="outline-none px-2! border border-gray-400 w-20 rounded-md"
                  />
                </div>
              </div>
            </div>

            <div
              className=" border  
                 border-gray-400 flex  rounded-md flex-col gap-2"
            >
              <div
                onClick={() => setShowRating(!showRating)}
                className="text-lg w-full font-semibold cursor-pointer rounded-md flex justify-between px-3! items-center"
              >
                Rating
                <span className="text-xl cursor-pointer">
                  {showRating ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </div>

              <div
                className={`${showRating ? "flex" : "hidden"} px-2!  flex-col gap-1"`}
              >
                <div className="flex justify-start items-center gap-2">
                  <input
                    type="checkbox"
                    id="fiveStar"
                    className="cursor-pointer"
                  />
                  <label
                    htmlFor="fiveStar"
                    className="flex cursor-pointer text-[16px] text-[#ffb524] justify-center items-center"
                  >
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarHalf />

                    <div className="text-sm px-1!">(4 & above)</div>
                  </label>
                </div>
                <div className="flex justify-start items-center gap-2">
                  <input
                    type="checkbox"
                    id="fourStar"
                    className="cursor-pointer"
                  />
                  <label
                    htmlFor="fourStar"
                    className="flex cursor-pointer text-[16px] text-[#ffb524] justify-center items-center"
                  >
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />

                    <IoStarOutline />
                    <div className="text-sm px-1!">(3 & above)</div>
                  </label>
                </div>
                <div className="flex justify-start items-center gap-2">
                  <input
                    type="checkbox"
                    id="threeStar"
                    className="cursor-pointer"
                  />
                  <label
                    htmlFor="threeStar"
                    className="flex cursor-pointer text-[16px] text-[#ffb524] justify-center items-center"
                  >
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarOutline />
                    <IoStarOutline />

                    <div className="text-sm px-1!">(2 & above)</div>
                  </label>
                </div>
                <div className="flex justify-start items-center gap-2">
                  <input
                    type="checkbox"
                    id="twoStar"
                    className="cursor-pointer"
                  />
                  <label
                    htmlFor="twoStar"
                    className="flex cursor-pointer text-[16px] text-[#ffb524] justify-center items-center"
                  >
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarOutline />
                    <IoStarOutline />
                    <IoStarOutline />

                    <div className="text-sm px-1!">(1 & above)</div>
                  </label>
                </div>
              </div>
            </div>

            <div
              className=" border border-gray-400 flex  rounded-md flex-col "
            >
              <div
                onClick={() => setShowDiscount(!showDiscount)}
                className="text-lg w-full font-semibold cursor-pointer rounded-md flex justify-between px-3! items-center"
              >
                Discount
                <span className="text-xl cursor-pointer">
                  {showDiscount ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </div>

              <div
                className={`p-2!  flex-col ${showDiscount ? "flex" : "hidden"}`}
              >
                <div className="gap-2 font-semibold flex justify-start items-center">
                  <input
                    type="checkbox"
                    id="discountOne"
                    className="cursor-pointer"
                  />
                  <label htmlFor="discountOne" className="cursor-pointer">
                    10% and above
                  </label>
                </div>
                <div className="gap-2 font-semibold flex justify-start items-center">
                  <input
                    type="checkbox"
                    id="discountTwo"
                    className="cursor-pointer"
                  />
                  <label htmlFor="discountTwo" className="cursor-pointer">
                    20% and above
                  </label>
                </div>
                <div className="gap-2 font-semibold flex justify-start items-center">
                  <input
                    type="checkbox"
                    id="discountThree"
                    className="cursor-pointer"
                  />
                  <label htmlFor="discountThree" className="cursor-pointer">
                    30% and above
                  </label>
                </div>
                <div className="gap-2 font-semibold flex justify-start items-center">
                  <input
                    type="checkbox"
                    id="discountFour"
                    className="cursor-pointer"
                  />
                  <label htmlFor="discountFour" className="cursor-pointer">
                    40% and above
                  </label>
                </div>
              </div>

              <div></div>
            </div>

            <div
              className=" border  
                 border-gray-400 flex  rounded-md flex-col gap-1"
            >
              <div
                onClick={() => setShowAvailability(!showAvailability)}
                className="text-lg w-full font-semibold cursor-pointer rounded-md flex justify-between px-3! items-center"
              >
                Availability
                <span className="text-xl cursor-pointer">
                  {showAvailability ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </div>

              <div className={`${showAvailability ? "flex" : "hidden"} flex-col  p-2!`}>
                <div className="flex justify-start items-center px-2! gap-1">
                  <input type="checkbox" id="inStock" className="cursor-pointer" />
                  <label htmlFor="inStock" className="cursor-pointer font-semibold">In Stock</label>
                </div>

                <div className="flex justify-start items-center px-2! gap-1">
                  <input type="checkbox" id="outOfStock" className="cursor-pointer" />
                  <label htmlFor="outOfStock" className="cursor-pointer font-semibold">Out of Stock</label>
                </div>
              </div>
            </div>

             <div className="flex flex-col gap-3! w-full">
              <div
                onClick={() => setShowBrand(!showBrand)}
                className="text-lg w-full cursor-pointer font-semibold border
                 border-gray-400 rounded-md flex justify-between px-3! items-center"
              >
                Brand
                <span className="text-xl cursor-pointer">
                  {showBrand ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </div>
              <div className={` flex-col ${showBrand ? "flex" : "hidden"}`}>
                {brand.map((item) => (
                  <div className="flex gap-2 cursor-pointer ">
                    <input type="checkbox" name={item} value={item} id={item} />
                    <label htmlFor={item} className="flex gap-2 font-semibold">
                      {item}
                      <span>
                        (
                        {
                          product.filter((product) => product.brand == item)
                            .length
                        }
                        )
                      </span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full md:w-[80%] h-full border">Product bar</div>
        </div>
      </div>
    </div>
  );
};

export default page;

// green text-[#81c408]
// golden bg-[#ffb524]
// gray bg-[#F4F6F8]
