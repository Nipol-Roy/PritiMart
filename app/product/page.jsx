"use client";

import bannerImage from "../../public/productPageImages/product page banner.png";
import Image from "next/image";

import ProductCard from "../components/card/productCard";

import { useSelector, useDispatch } from "react-redux";

import { fetchProduct } from "../lib/api/fetchProduct";
import { useEffect, useState } from "react";

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { VscDash } from "react-icons/vsc";
import { IoStarSharp } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { FiFilter } from "react-icons/fi";

import {
  setCategorys,
  setDiscount,
  setRating,
  setAvailability,
  setPriceRange,
  setBrand,
  setClearFilters,
  setSearch,
} from "../lib/redux/reduxSlice/productFilterSlice";

const page = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);
  useEffect(() => {
    if (!product || product.length == 0) {
      fetchProduct(dispatch);
    }
  }, [product, dispatch]);

  const topCategory = product.filter((item) => item.rating > 4.7);

  const allCategory = [...new Set(product.map((item) => item.category))];

  const categoryProduct = [
    ...new Set(topCategory.map((item) => item.category)),
  ];

  const existBrand = product.filter((products) => products.brand);

  const allbrand = [...new Set(existBrand.map((item) => item.brand))];

  const [onButton, setOnButton] = useState("AllButton");

  const [showCategory, setShowCategory] = useState(false);

  const [showBrand, setShowBrand] = useState(false);

  const {
    category,
    brand,
    availability,
    discount,
    rating,
    priceRange,
    searchValue,
  } = useSelector((state) => state.productFilter);

  console.log(searchValue);

  const filteredProduct = product.filter((item) => {
    const matchCategory =
      onButton === "AllButton"
        ? category.length === 0 || category.includes(item.category)
        : item.category === onButton &&
          (category.length === 0 || category.includes(item.category));

    const matchRating =
      rating.length == 0 ||
      rating.some((rate) => {
        if (rate == "1") {
          return item.rating >= 1 && item.rating < 2;
        }
        if (rate == "2") {
          return item.rating >= 2 && item.rating < 3;
        }
        if (rate == "3") {
          return item.rating >= 3 && item.rating < 4;
        }
        if (rate == "4") {
          return item.rating >= 4 && item.rating < 5;
        }
        return false;
      });

    const matchDiscount =
      discount.length == 0 ||
      discount.some((disc) => {
        if (disc == "10") {
          return item.discountPercentage >= 0 && item.discountPercentage <= 10;
        }

        if (disc == "20") {
          return item.discountPercentage >= 10 && item.discountPercentage <= 20;
        }

        if (disc == "30") {
          return item.discountPercentage >= 20 && item.discountPercentage <= 30;
        }

        if (disc == "40") {
          return item.discountPercentage >= 30;
        }
      });

    const matchAvailability =
      availability.length == 0 ||
      availability.some((avStatus) => item.availabilityStatus === avStatus);

    const matchPriceRange =
      priceRange.min === 0 && priceRange.max === 0
        ? true
        : item.price >= priceRange.min && item.price <= priceRange.max;

    const matchTargetPrice =
      priceRange.targetPrice == 0 || item.price <= priceRange.targetPrice;

    const matchBrand = brand.length == 0 || brand.includes(item.brand);

    const searchResults =
      searchValue.trim() === "" ||
      item.brand?.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.category?.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.title?.toLowerCase().includes(searchValue.toLowerCase());

    return (
      matchBrand &&
      matchAvailability &&
      matchCategory &&
      matchDiscount &&
      matchPriceRange &&
      matchRating &&
      matchTargetPrice &&
      searchResults
    );
  });

  console.log(filteredProduct);

  const [showFilters, setShowFilters] = useState(false);

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
              alt="banner image"
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

          {categoryProduct.map((item, idx) => (
            <button
              key={idx}
              onClick={() => (
                setOnButton(item),
                dispatch(setCategorys([])),dispatch(setSearch(""))
              )}
              className={`py-1! outline-none text-[#81c408] hover:bg-[#81c408]
           hover:text-white font-semibold cursor-pointer rounded-md text-[12px] md:text-sm transition-all duration-300
            px-3! border ${onButton == item ? "bg-[#ffb524] text-white hover:bg-[#ffb524] hover:text-white" : ""}`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="w-full relative border-t border-gray-400 h-full py-3! flex flex-col md:flex-row justify-between ">
          <div className="md:hidden  ">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="border px-5! py-2! text-sm font-bold rounded-md
             bg-[#81c408] text-white border-white cursor-pointer mb-5! flex justify-center items-center flex-row"
            >
              {showFilters ? (
                <span className="text-xl">
                  <AiOutlineClose />
                </span>
              ) : (
                <span className="text-sm flex gap-2 justify-center items-center ">
                  Filter <FiFilter />{" "}
                </span>
              )}
            </button>
          </div>

          <div
            className={`w-full h-full justify-center items-center  bg-white  md:w-80 xl:w-80   z-10 p-1! 
                ${showFilters ? "flex " : "hidden"} md:flex`}
          >
            <div className=" border border-gray-500 bg-white rounded-md flex gap-2 flex-col  p-3! w-[80%] md:w-full">
              <div className="flex flex-col gap-3! px-3! py-2!  w-full border border-gray-400 rounded-md">
                <div
                  onClick={() => setShowCategory(!showCategory)}
                  className="text-[16px]   w-full cursor-pointer font-semibold 
                  flex justify-between  items-center"
                >
                  Category
                  <span className="text-xl cursor-pointer">
                    {showCategory ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </span>
                </div>
                <div
                  className={` flex-col ${showCategory ? "flex" : "hidden"}`}
                >
                  {allCategory.map((item, idx) => (
                    <div key={idx} className="flex gap-2 cursor-pointer ">
                      <input
                        onChange={(e) => {
                          dispatch(setCategorys(e.target.value));
                          setOnButton("AllButton")
                          dispatch(setSearch(""))
                        }}
                        type="checkbox"
                        checked={category.includes(item)}
                        name={item}
                        value={item}
                        id={item}
                      />
                      <label
                        htmlFor={item}
                        className="flex gap-2 font-semibold"
                      >
                        {item}
                        <span>
                          (
                          {
                            product.filter(
                              (product) => product.category == item,
                            ).length
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
                <div className="text-[16px] w-full font-semibold  rounded-md flex justify-between px-3! items-center">
                  Price Range
                  <span className="text-xl ">
                    <IoIosArrowUp />
                  </span>
                </div>
                <div className="w-full  flex-col gap-2 justify-between items-center pb-2! flex">
                  <div className="w-full px-2!">
                    <input
                      onChange={(e) => {
                        dispatch(
                          setPriceRange({
                            type: "target",
                            value: e.target.value,
                          }),
                        );
                        dispatch(setSearch(""))
                        setOnButton("AllButton");
                      }}
                      type="range"
                      min={0}
                      max={10000}
                      value={priceRange.targetPrice || priceRange.max}
                      className="w-full cursor-pointer "
                    />
                  </div>
                  <div className="flex justify-between items-center  w-full px-2!">
                    <div className="border px-1! relative border-gray-400 rounded-md flex justify-start items-center ">
                      <span className="font-semibold text-gray-500">$</span>
                      <input
                        type="number"
                        onChange={(e) => {
                          dispatch(
                            setPriceRange({
                              type: "min",
                              value: e.target.value,
                            }),
                          );
                          setOnButton("AllButton");
                          dispatch(setSearch(""))
                        }}
                        placeholder="$0"
                        value={priceRange.min}
                        className="outline-none px-2!  w-full "
                      />
                    </div>
                    <span className="text-2xl font-bold text-gray-400">
                      <VscDash />
                    </span>
                    <div className="border px-1! relative border-gray-400 rounded-md flex justify-start items-center ">
                      <span className="font-semibold text-gray-500">$</span>
                      <input
                        type="number"
                        onChange={(e) => {
                          dispatch(
                            setPriceRange({
                              type: "max",
                              value: e.target.value,
                            }),
                          );
                          setOnButton("AllButton");
                          dispatch(setSearch(""))
                        }}
                        placeholder="$0"
                        value={priceRange.max || priceRange.targetPrice}
                        className="outline-none px-2!  w-full "
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className=" border  
                 border-gray-400 flex  rounded-md flex-col gap-2"
              >
                <div className="text-[16px] py-2!  w-full font-semibold rounded-md flex justify-between px-3! items-center">
                  Rating
                  <span className="text-xl ">
                    <IoIosArrowUp />
                  </span>
                </div>

                <div className="flex pb-2! px-2!  flex-col gap-1">
                  <div className="flex justify-start items-center gap-2">
                    <input
                      type="checkbox"
                      onChange={(e) => {
                        dispatch(setRating(e.target.value));
                        setOnButton("AllButton");
                        dispatch(setSearch(""))
                      }}
                      id="fiveStar"
                      checked={rating.includes("4")}
                      value={4}
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

                      <div className="text-[12px] px-1!">(4 & above)</div>
                    </label>
                  </div>
                  <div className="flex justify-start items-center gap-2">
                    <input
                      onChange={(e) => {
                        dispatch(setRating(e.target.value));
                        setOnButton("AllButton");
                        dispatch(setSearch(""))
                      }}
                      type="checkbox"
                      checked={rating.includes("3")}
                      id="fourStar"
                      value={3}
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
                      <div className="text-[12px] px-1!">(3 & above)</div>
                    </label>
                  </div>
                  <div className="flex justify-start items-center gap-2">
                    <input
                      onChange={(e) => {
                        dispatch(setRating(e.target.value));
                        setOnButton("AllButton");
                        dispatch(setSearch(""))
                      }}
                      type="checkbox"
                      id="threeStar"
                      checked={rating.includes("2")}
                      value={2}
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

                      <div className="text-[12px] px-1!">(2 & above)</div>
                    </label>
                  </div>
                  <div className="flex justify-start items-center gap-2">
                    <input
                      onChange={(e) => {
                        dispatch(setRating(e.target.value));
                        setOnButton("AllButton");
                        dispatch(setSearch(""))
                      }}
                      type="checkbox"
                      id="twoStar"
                      checked={rating.includes("1")}
                      value={1}
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

                      <div className="text-[12px]  px-1!">(2 & below)</div>
                    </label>
                  </div>
                </div>
              </div>

              <div className=" border border-gray-400 flex  rounded-md flex-col ">
                <div className="text-[16px] py-2!  w-full font-semibold  rounded-md flex justify-between px-3! items-center">
                  Discount
                  <span className="text-xl ">
                    <IoIosArrowUp />
                  </span>
                </div>

                <div className="p-2!  flex-col flex">
                  <div className="gap-2 font-semibold flex justify-start items-center">
                    <input
                      onChange={(e) => {
                        dispatch(setDiscount(e.target.value));
                        setOnButton("AllButton");
                        dispatch(setSearch(""))
                      }}
                      type="checkbox"
                      checked={discount.includes("10")}
                      id="discountOne"
                      className="cursor-pointer"
                      value={10}
                    />
                    <label
                      htmlFor="discountOne"
                      className="cursor-pointer text-sm  "
                    >
                      10% and above
                    </label>
                  </div>
                  <div className="gap-2 font-semibold flex justify-start items-center">
                    <input
                      type="checkbox"
                      checked={discount.includes("20")}
                      id="discountTwo"
                      onChange={(e) => {
                        dispatch(setDiscount(e.target.value));
                        setOnButton("AllButton");
                        dispatch(setSearch(""))
                      }}
                      className="cursor-pointer"
                      value={20}
                    />
                    <label
                      htmlFor="discountTwo"
                      className="text-sm cursor-pointer"
                    >
                      20% and above
                    </label>
                  </div>
                  <div className="gap-2 font-semibold flex justify-start items-center">
                    <input
                      type="checkbox"
                      checked={discount.includes("30")}
                      id="discountThree"
                      onChange={(e) => {
                        dispatch(setDiscount(e.target.value));
                        setOnButton("AllButton");
                        dispatch(setSearch(""))
                      }}
                      className="cursor-pointer"
                      value={30}
                    />
                    <label
                      htmlFor="discountThree"
                      className=" text-sm cursor-pointer"
                    >
                      30% and above
                    </label>
                  </div>
                  <div className="gap-2 font-semibold flex justify-start items-center">
                    <input
                      type="checkbox"
                      id="discountFour"
                      checked={discount.includes("40")}
                      value={40}
                      onChange={(e) => {
                        dispatch(setDiscount(e.target.value));
                        setOnButton("AllButton");
                        dispatch(setSearch(""))
                      }}
                      className="cursor-pointer"
                    />
                    <label
                      htmlFor="discountFour"
                      className=" text-sm cursor-pointer"
                    >
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
                <div className="text-[16px] py-2!  w-full font-semibold  rounded-md flex justify-between px-3! items-center">
                  Availability
                  <span className="text-xl ">
                    <IoIosArrowUp />
                  </span>
                </div>

                <div className="flex flex-col  pb-2!">
                  <div className="flex justify-start items-center px-2! gap-1">
                    <input
                      onChange={(e) => {
                        dispatch(setAvailability(e.target.value));
                        setOnButton("AllButton");
                        dispatch(setSearch(""))
                      }}
                      type="checkbox"
                      checked={availability.includes("In Stock")}
                      id="inStock"
                      value="In Stock"
                      className="cursor-pointer"
                    />
                    <label
                      htmlFor="inStock"
                      className="text-sm font-semibold cursor-pointer"
                    >
                      In Stock
                    </label>
                  </div>
                  <div className="flex justify-start items-center px-2! gap-1">
                    <input
                      onChange={(e) => {
                        dispatch(setAvailability(e.target.value));
                        setOnButton("AllButton");
                        dispatch(setSearch(""))
                      }}
                      type="checkbox"
                      checked={availability.includes("Low Stock")}
                      id="lowStock"
                      value="Low Stock"
                      className="cursor-pointer"
                    />
                    <label
                      htmlFor="lowStock"
                      className="text-sm font-semibold cursor-pointer"
                    >
                      Low Stock
                    </label>
                  </div>

                  <div className="flex justify-start items-center px-2! gap-1">
                    <input
                      onChange={(e) => {
                        dispatch(setAvailability(e.target.value));
                        setOnButton("AllButton");
                        dispatch(setSearch(""))
                      }}
                      type="checkbox"
                      id="outOfStock"
                      checked={availability.includes("Out of Stock")}
                      value="Out of Stock"
                      className="cursor-pointer"
                    />
                    <label
                      htmlFor="outOfStock"
                      className="cursor-pointer text-sm font-semibold"
                    >
                      Out of Stock
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3! px-3! py-2!  w-full border border-gray-400 rounded-md">
                <div
                  onClick={() => {
                    setShowBrand(!showBrand);
                  }}
                  className="text-[16px]  w-full cursor-pointer font-semibold  rounded-md flex 
                  justify-between  items-center"
                >
                  Brand
                  <span className="text-xl cursor-pointer">
                    {showBrand ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </span>
                </div>
                <div className={` flex-col ${showBrand ? "flex" : "hidden"}`}>
                  {allbrand.map((item, idx) => (
                    <div key={idx} className="flex gap-2 cursor-pointer ">
                      <input
                        type="checkbox"
                        checked={brand.includes(item)}
                        onChange={(e) => {
                          dispatch(setBrand(e.target.value));
                          setOnButton("AllButton");
                          dispatch(setSearch(""))
                        }}
                        name={item}
                        value={item}
                        id={item}
                      />
                      <label
                        htmlFor={item}
                        className="flex gap-2 font-semibold"
                      >
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

              <div className="flex justify-center gap-2 items-center py-2!">
                <button
                  onClick={() => {
                    dispatch(setClearFilters());
                  }}
                  className="text-[16px]  w-1/2 py-1! cursor-pointer font-semibold border hover:bg-[#ffb524]
                 hover:border-white hover:text-white transition-all duration-300
                 border-gray-400 rounded-md flex justify-center px-3! items-center"
                >
                  Clean All
                </button>
                <button
                  onClick={() => setShowFilters(false)}
                  className="text-[16px]  w-1/2 py-1! cursor-pointer font-semibold border hover:bg-[#81c408]
                 hover:border-white hover:text-white transition-all duration-300
                 border-gray-400 rounded-md flex justify-center px-3! items-center"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>

          <div className=" w-full  h-full gap-2 flex flex-wrap justify-center items-start p-5! ">
            {filteredProduct.map((item, idx) => {
              return <ProductCard key={idx} item={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
