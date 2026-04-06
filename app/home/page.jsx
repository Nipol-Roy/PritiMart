"use client";

import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { BiSolidMessageAlt } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GoArrowSwitch } from "react-icons/go";
import { MdSupportAgent } from "react-icons/md";
import { GiSevenPointedStar } from "react-icons/gi";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { RiServiceFill } from "react-icons/ri";
import { IoPeopleSharp } from "react-icons/io5";
import { PiCertificateFill } from "react-icons/pi";
import { FaStore } from "react-icons/fa";
import { VscUnverified } from "react-icons/vsc";
import { VscVerifiedFilled } from "react-icons/vsc";

import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

import ProductCard from "../components/card/productCard";
import { testimonials } from "@/public/data/testimonialData";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setProduct } from "../lib/redux/reduxSlice/productSlice";

import firstBG from "../../public/background-image/background-image.png";
import groceriesCollection from "../../public/discount-banner/groceries.jpg";
import fashonCollection from "../../public/discount-banner/mobile accesories.jpg";
import bestCollection from "../../public/discount-banner/best collection.jpg";


import Image from "next/image";

import beautyI from "../../public/category-images/Beauty & Personal Care.jpg";
import electronics from "../../public/category-images/Electronics & Gadgets.jpg";
import fashoni from "../../public/category-images/Fashion & Lifestyle.png";
import groceries from "../../public/category-images/Groceries & Essentials.jpg";
import homeLiving from "../../public/category-images/Home & Living.jpg";
import sportsAtm from "../../public/category-images/Sports & Automotive.png";


import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";

const page = () => {
  const dispatch = useDispatch();

  async function fetchProduct() {
    try {
      const data = await fetch("https://dummyjson.com/products?limit=0");
      const fetchingData = await data.json();
      dispatch(setProduct(fetchingData.products));
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchProduct();
  }, []);
  const { product } = useSelector((state) => state.product);

  const [getCategory, setGetCategory] = useState("allProduct");
  const [categoryProducts, setCategoryProducts] = useState([]);

  function showBestProduct() {
    if (!product || product.length === 0) return;
    if (getCategory === "allProduct") {
      const allProducts = product.filter((items) => {
        return (
          items.category === "beauty" ||
          items.category === "groceries" ||
          items.category === "home-decoration" ||
          items.category === "mobile-accessories" ||
          items.category === "womens-jewellery" ||
          items.rating > 4
        );
      });
      setCategoryProducts(allProducts);
    } else if (getCategory === "beauty") {
      const beauty = product.filter((items) => items.category === "beauty");
      setCategoryProducts(beauty);
    } else if (getCategory === "groceries") {
      const groceries = product.filter(
        (items) => items.category === "groceries",
      );
      setCategoryProducts(groceries);
    } else if (getCategory === "home-decoration") {
      const homeDecoration = product.filter(
        (items) => items.category === "home-decoration",
      );
      setCategoryProducts(homeDecoration);
    } else if (getCategory === "mobile-accessories") {
      const mobileAccessories = product.filter(
        (items) => items.category === "mobile-accessories",
      );
      setCategoryProducts(mobileAccessories);
    } else {
      const womensJewellery = product.filter(
        (items) => items.category === "womens-jewellery",
      );
      setCategoryProducts(womensJewellery);
    }
  }

  useEffect(() => {
    showBestProduct();
  }, [getCategory, product]);
  let carBannerImage;
  let mostLikedProduct;

  function mostPopularProduct() {
    const highRatingProduct = product.filter((item) => item.rating > 4);
    mostLikedProduct = highRatingProduct;
  }

  const carForBanner = product.filter((item) => item.id === 170);
  // console.log(carForBanner);

  mostPopularProduct();
  // console.log(product.map((i) => i.category));

  return (
    <>
      <main className="h-full w-full bg-white  ">
        <section className="h-full w-full  ">
          <div className="w-full  flex justify-center items-center relative">
            <div className="w-full h-full absolute top-0 left-0  opacity-20 z-0">
              <Image
                src={firstBG}
                alt="first background image"
                className=" w-full h-full object-cover object-center"
              />
            </div>
            <div className=" w-[90%] h-full py-10! z-10 ">
              <div className="p-5!  flex flex-col lg:flex-row justify-between gap-10 items-center">
                <div className="w-full  lg:w-[60%]  h-full flex justify-center items-center">
                  <div className=" h-[80%] flex flex-col justify-center gap-3 w-full sm:w-[90%] lg:w-[80%] ">
                    <h4 className="font-bold text-sm md:text-lg text-[#ffb524]">
                      Smart Shopping Starts Here
                    </h4>
                    <p className="text-[#81c408] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                      Discover Quality Products Across Fashion, Electronics,
                      Groceries, and Lifestyle Essentials
                    </p>
                    <div className="mt-5! w-full md:w-3/4 py-[5%]!">
                      <div className=" border rounded-md bg-white border-[#ffb524] flex justify-between items-center ">
                        <input
                          type="text"
                          placeholder="enter your Email"
                          className="p-3! border-none outline-none"
                        />
                        <button className="border-none text-white font-bold transition duration-500 hover:bg-[#ffb524] outline-none py-3! px-3! rounded-md bg-[#81c408]">
                          Subscribe Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full  p-3! overflow-hidden lg:w-[40%]  h-full  flex justify-center items-center">
                  <div className="w-full  h-[80%]  sm:w-[70%]  md:[w-50%] lg:w-[99%] max-w-full">
                    <Swiper
                      modules={[Navigation, Pagination, Autoplay]}
                      spaceBetween={20}
                      slidesPerView={1}
                      autoplay={{ delay: 3000 }}
                      speed={1000}
                      loop={true}
                      navigation={{
                        nextEl: ".customNav-next",
                        prevEl: ".customNav-prev",
                      }}
                      className="  relative  rounded-md    "
                    >
                      <SwiperSlide className=" relative  ">
                        <div className=" w-full h-80  relative ">
                          <Image
                            src={groceries}
                            alt="categories Images"
                            className="w-full h-full object-cover object-center"
                          />
                          <button
                            className="px-6! py-3! z-10 bg-[#ffb524] text-white rounded-md  absolute text-lg md:text-2xl
                         bottom-1/2 right-1/2  translate-x-1/2 translate-y-1/2 font-bold"
                          >
                            Groceries
                          </button>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className=" relative  ">
                        <div className=" w-full h-80   ">
                          <Image
                            src={beautyI}
                            alt="categories Images"
                            className="w-full h-full object-cover object-center"
                          />
                          <button
                            className="px-6! py-3! z-10 bg-[#ffb524] text-white rounded-md  absolute text-lg md:text-2xl
                         bottom-1/2 right-1/2  translate-x-1/2 translate-y-1/2 font-bold"
                          >
                            Beauty
                          </button>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className=" relative  ">
                        <div className=" w-full h-80   ">
                          <Image
                            src={fashoni}
                            alt="categories Images"
                            className="w-full h-full object-cover object-center"
                          />
                          <button
                            className="px-6! py-3! z-10 bg-[#ffb524] text-white rounded-md  absolute  text-lg md:text-2xl
                         bottom-1/2 right-1/2  translate-x-1/2 translate-y-1/2 font-bold"
                          >
                            Fashion
                          </button>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className=" relative  ">
                        <div className=" w-full h-80   ">
                          <Image
                            src={electronics}
                            alt="categories Images"
                            className="w-full h-full object-cover object-center"
                          />
                          <button
                            className="px-6! py-3! z-10 bg-[#ffb524] text-white rounded-md  absolute text-lg md:text-2xl
                         bottom-1/2 right-1/2  translate-x-1/2 translate-y-1/2 font-bold"
                          >
                            Gadgets
                          </button>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className=" relative  ">
                        <div className=" w-full h-80   ">
                          <Image
                            src={homeLiving}
                            alt="categories Images"
                            className="w-full h-full object-cover object-center"
                          />
                          <button
                            className="px-6! py-3! z-10 bg-[#ffb524] text-white rounded-md  absolute text-lg md:text-2xl
                         bottom-1/2 right-1/2  translate-x-1/2 translate-y-1/2 font-bold"
                          >
                            Home & Living
                          </button>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className=" relative  ">
                        <div className=" w-full h-80  ">
                          <Image
                            src={sportsAtm}
                            alt="categories Images"
                            className="w-full h-full object-cover object-center"
                          />
                          <button
                            className="px-6! py-3! z-10 bg-[#ffb524] text-white rounded-md  absolute text-lg md:text-2xl
                         bottom-1/2 right-1/2  translate-x-1/2 translate-y-1/2 font-bold"
                          >
                            AutoMotive
                          </button>
                        </div>
                      </SwiperSlide>

                      {/* custom Navigadion button */}
                      <button
                        className="customNav-prev border p-3! rounded-md
                   bg-[#81c408] hover:bg-[#ffb524] text-[#ffb524] transition duration-500 hover:text-[#81c408]
                    absolute bottom-1/2 left-3 translate-y-1/2 cursor-pointer z-10"
                      >
                        <GrPrevious />
                      </button>
                      <button
                        className="customNav-next border p-3! rounded-md
                   bg-[#81c408] hover:bg-[#ffb524] text-[#ffb524] transition duration-500 hover:text-[#81c408]
                    absolute bottom-1/2 right-3 translate-y-1/2 cursor-pointer z-10 "
                      >
                        <GrNext />
                      </button>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full mt-10! flex justify-center items-center relative">
            <div className="w-[90%] h-40 relative  flex justify-center items-center">
              <div className="w-full h-full   relative  ">
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={2}
                  speed={1000}
                  loop={true}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    480: {
                      slidesPerView: 2,
                    },
                    640: {
                      slidesPerView: 3,
                    },
                    768: {
                      slidesPerView: 4,
                    },
                    1024: {
                      slidesPerView: 5,
                    },
                    1280: {
                      slidesPerView: 6,
                    },
                  }}
                  navigation={{
                    nextEl: ".categoryNav-next",
                    prevEl: ".categoryNav-prev",
                  }}
                >
                  {[
                    "beauty",
                    "furniture",
                    "fragrances",
                    "groceries",
                    "home-decoration",
                    "kitchen-accessories",
                    "laptops",
                    "mens-shirts",
                    "mens-shoes",
                    "mens-watches",
                    "mobile-accessories",
                    "motorcycle",
                    "skin-care",
                    "smartphones",
                    "sports-accessories",
                    "sunglasses",
                    "tablets",
                    "tops",
                    "vehicle",
                    "womens-bags",
                    "womens-dresses",
                    "womens-jewellery",
                    "womens-shoes",
                    "womens-watches",
                  ].map((item, idx) => {
                    const productList = product.find(
                      (prod) => prod.category === item,
                    );
                    // console.log(productList?.images[0]);

                    return (
                      <SwiperSlide key={idx} className="  relative  p-1!">
                        <div className="w-auto hover:shadow-lg shadow-gray-500 transition-all duration-500 cursor-pointer h-full relative rounded-md overflow-hidden">
                          <div className="bg-[#ffb524] absolute top-0 left-0 w-full h-full  opacity-30"></div>
                          <h2 className="absolute text-[#ffb524] capitalize z-10 top-0 right-1/2 translate-x-1/2 p-2! w-full text-lg font-bold">
                            {productList?.category}
                          </h2>
                          <div className="flex justify-center relative  items-center w-full h-full ">
                            <div className="w-[40%] h-[90%] p-3!  z-0  relative">
                              <Image
                                fill
                                className="w-full h-full object-cover object-center"
                                src={
                                  productList?.images?.[0] || "/fallback.png"
                                }
                                alt="category list images"
                              />
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>

                <button className="categoryNav-prev cursor-pointer text-[#ffb524] hover:bg-[#ffb524] hover:text-white transition duration-500 z-10! absolute -left-4  bottom-1/2 translate-x-1/2 translate-y-1/2 p-2! border rounded-md text-3xl ">
                  <FaChevronLeft />
                </button>
                <button className="categoryNav-next cursor-pointer text-[#ffb524] hover:bg-[#ffb524] hover:text-white transition duration-500 absolute z-10! right-8 bottom-1/2 translate-x-1/2 translate-y-1/2 p-2! border rounded-md text-3xl ">
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </div>

          {/* nice discount */}

          <div className="w-full  flex justify-center items-center py-20!  ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-content-center gap-10 ">
              <div className=" bg-[#F4F6F8] w-78 h-68 rounded-md flex justify-between items-center flex-col gap-4  p-5!">
                <div className="text-[150px]  relative  text-[#ffb524]">
                  <BiSolidMessageAlt />
                  <div className="absolute  h-[80%]  flex justify-start items-center   right-1/2 translate-x-1/2 top-1 text-6xl text-white">
                    <TbTruckDelivery />
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-1">
                  <h2 className="text-2xl text-gray-500">Free Shipping</h2>
                  <p className="text-gray-500 text-lg">
                    Free on order over $300
                  </p>
                </div>
              </div>

              <div className=" bg-[#F4F6F8] w-78 h-68  rounded-md flex justify-between items-center flex-col gap-4 p-5!">
                <div className="text-[150px]  relative  text-[#ffb524]">
                  <BiSolidMessageAlt />
                  <div className="absolute  h-[80%]  flex justify-start items-center   right-1/2 translate-x-1/2 top-1 text-6xl text-white">
                    <MdSecurity />
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-1">
                  <h2 className="text-2xl text-gray-500">Security Payment</h2>
                  <p className="text-gray-500 text-lg">100% security payment</p>
                </div>
              </div>

              <div className=" bg-[#F4F6F8] w-78 h-68 rounded-md flex justify-between items-center flex-col gap-4  p-5!">
                <div className="text-[150px]  relative  text-[#ffb524]">
                  <BiSolidMessageAlt />
                  <div className="absolute  h-[80%]  flex justify-start items-center   right-1/2 translate-x-1/2 top-1 text-6xl text-white">
                    <GoArrowSwitch />
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-1">
                  <h2 className="text-2xl text-gray-500">30 Day Return</h2>
                  <p className="text-gray-500 text-lg">
                    30 day money guarantee
                  </p>
                </div>
              </div>

              <div className=" bg-[#F4F6F8] w-78 h-68 rounded-md flex justify-between items-center flex-col gap-4  p-5!">
                <div className="text-[150px]  relative  text-[#ffb524]">
                  <BiSolidMessageAlt />
                  <div className="absolute  h-[80%]  flex justify-start items-center   right-1/2 translate-x-1/2 top-1 text-6xl text-white">
                    <MdSupportAgent />
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-1">
                  <h2 className="text-2xl text-gray-500">24/7 Support</h2>
                  <p className="text-gray-500 text-lg">
                    Support every time fast
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center items-center ">
            <div className="w-[90%] h-full flex  flex-col">
              <div className=" py-4!">
                <h2 className="py-5! text-xl md:text-3xl font-semibold text-gray-500">
                  Our Best Product
                </h2>
                <div className="py-5!">
                  <div className="flex justify-start w-full gap-5  items-center flex-wrap">
                    {[
                      {
                        label: "all Product",
                        value: "allProduct",
                      },
                      {
                        label: "beauty",
                        value: "beauty",
                      },

                      {
                        label: "Groceries",
                        value: "groceries",
                      },
                      {
                        label: "Mobile Accessories",
                        value: "mobile-accessories",
                      },
                      {
                        label: "Home Decoration",
                        value: "home-decoration",
                      },
                      {
                        label: "Womens Jewellery",
                        value: "womens-jewellery",
                      },
                    ].map((cate, idx) => {
                      return (
                        <div
                          key={idx}
                          onClick={() => setGetCategory(cate.value)}
                          className={`${getCategory === cate.value ? "bg-[#ffb524] text-white" : "bg-[#F4F6F8]"}   px-3!   py-1! cursor-pointer
                     text-gray-500 hover:text-gray-800 rounded-md capitalize`}
                        >
                          {cate.label}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className=" w-full  my-5! border bg-white border-gray-300 rounded-md gap-5 flex flex-wrap justify-center items-center p-5! ">
                {categoryProducts.map((item, idx) => {
                  return <ProductCard key={idx} item={item} />;
                })}
              </div>
            </div>
          </div>

          <div className="py-5! w-full  relative flex   justify-center items-center">
            <div className="w-[90%] flex h-[90%] justify-center flex-wrap items-center gap-10 ">
              <div className="w-90 rounded-md border cursor-pointer relative border-gray-300 hover:border-none transition duration-300 hover:shadow-lg shadow-gray-400 overflow-hidden flex flex-col justify-center items-center h-90">
                <div className="w-[80%]   h-[65%]">
                  <Image
                    src={bestCollection}
                    alt="best collection cars"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div className="w-[70%] h-40 flex flex-col justify-center items-center bg-[#F4F6F8] rounded-md absolute bottom-2/4 translate-y-3/4 right-1/2 translate-x-1/2">
                  <div className="text-xl font-semibold text-[#81c408]">
                    Premium Product
                  </div>
                  <div className="text-2xl font-bold text-gray-600 ">
                    Up to 10% off{" "}
                  </div>
                </div>

                <div className="w-full h-1/2 bg-[#45595B] "></div>
              </div>

              <div className="w-90 rounded-md relative bg- transition duration-300 hover:shadow-lg shadow-gray-400   overflow-hidden flex flex-col justify-center items-center h-90">
                <div className="w-full   h-[65%]">
                  <Image
                    src={groceriesCollection}
                    alt="best collection cars"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="w-[70%] flex flex-col justify-center items-center bg-[#ffb524] rounded-md  h-40  absolute bottom-2/4 translate-y-3/4 right-1/2 translate-x-1/2">
                  <div className="text-xl font-semibold text-white">
                    Exotic Vegetable
                  </div>
                  <div className="text-2xl font-bold text-gray-600">
                    Discount 30${" "}
                  </div>
                </div>

                <div className="w-full h-1/2 bg-[#81c408] "></div>
              </div>
              <div className="w-90 rounded-md relative transition cursor-pointer duration-300 hover:shadow-lg shadow-gray-400  overflow-hidden flex flex-col justify-center items-center h-90">
                <div className="w-full  h-[65%]">
                  <Image
                    src={fashonCollection}
                    alt="best collection cars"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="w-[70%] flex flex-col justify-center items-center bg-[#81c408] h-40 rounded-md absolute bottom-2/4 translate-y-3/4 right-1/2 translate-x-1/2">
                  <div className="text-xl font-semibold text-white">
                    Fashion
                  </div>
                  <div className="text-2xl font-bold text-gray-600">
                    Free Delivery
                  </div>
                </div>
                <div className="w-full h-1/2   bg-[#ffb524] "></div>
              </div>
            </div>
          </div>

          <div className=" w-full flex justify-center items-center">
            <div className="h-full w-[90%]  ">
              <div className="flex justify-between items-center">
                <h2
                  className="py-5! text-xl
                 md:text-3xl font-semibold text-gray-500 capitalize "
                >
                  most popular product
                </h2>
                <div className=" flex justify-center items-center gap-2  pr-5 ">
                  <button
                    className=" customArrow-prev cursor-pointer px-2! md:px-4! rounded-md text-[#81c408] border-[#ffb524] 
                hover:border-[#ffb524] hover:text-white transition duration-500
                 hover:bg-[#ffb524]  border outline-none text-3xl"
                  >
                    <IoIosArrowRoundBack />
                  </button>
                  <button
                    className=" customArrow-next cursor-pointer px-2! md:px-4! rounded-md text-[#81c408] border-[#ffb524]
                     hover:border-[#ffb524] hover:text-white transition duration-500
                      hover:bg-[#ffb524]  border outline-none text-3xl"
                  >
                    <IoIosArrowRoundForward />
                  </button>
                </div>
              </div>

              <div
                className=" flex justify-center items-center p-2! lg:p-4!   border  bg-white border-gray-300 rounded-md
                 "
              >
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  slidesPerView="auto"
                  spaceBetween={10}
                  autoplay={{ delay: 3000 }}
                  speed={1000}
                  loop={true}
                  navigation={{
                    nextEl: ".customArrow-next",
                    prevEl: ".customArrow-prev",
                  }}
                  className=" rounded-md w-full   "
                >
                  {mostLikedProduct.map((item, idx) => {
                    return (
                      <SwiperSlide className="w-88!  ">
                        <ProductCard key={idx} item={item} />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>

          <div className="w-full my-10!  flex justify-center items-center">
            <div className="w-[90%]  bg-[#ffb6246b]  rounded-md md:flex justify-between items-center overflow-hidden">
              <div className="w-full h-[30vh]   bg-[#ffb524]   text-[#ffff] md:w-1/2  flex justify-center items-center  md:rounded-r-full">
                <div className="w-full  md:w-[90%]   flex justify-between   p-5!  h-[90%] gap-3 md:gap-5 flex-col">
                  <h2 className="uppercase  text-2xl font-extrabold w-70">
                    get {Math.round(carForBanner[0]?.discountPercentage || 0)}%
                    caseBack on shopping $
                    {(
                      (Math.round(carForBanner[0]?.discountPercentage || 0) /
                        100) *
                      carForBanner[0]?.price
                    ).toFixed(1) || 0}
                  </h2>
                  <p className=" w-full xl:w-2/3  ">
                    {carForBanner[0]?.description}
                  </p>
                  <button
                    className="capitalize cursor-pointer bg-[#F4F6F8] text-gray-800 font-bold hover:border hover:border-white
                   hover:bg-[#ffb524] hover:text-gray-900 transition duration-500 outline-none w-30 h-15 flex justify-center items-center rounded-md"
                  >
                    Shop Now
                  </button>
                </div>
              </div>
              <div className=" w-full md:w-1/2 h-[30vh] ">
                <div className="w-full h-full relative ">
                  <div className="  absolute text-[#ffb524]   left-5 text-[120px] lg:text-[150px] flex justify-center items-center">
                    <GiSevenPointedStar />
                    <h2 className="text-lg md:text-xl scale-80 italic font-extrabold absolute text-white text-center bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 uppercase">
                      Big Discount
                    </h2>
                  </div>
                  <Image
                    className="w-full h-full object-center object-cover"
                    src={carForBanner[0]?.images?.[1] || "/fallback.png"}
                    alt="discount car banner"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full flex justify-center items-center">
            <div className="bg-[#F4F6F8] p-5! rounded-md lg:p-20! grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-[90%] h-full ">
              <div className="h-60  rounded-md bg-white flex flex-col gap-5 justify-center items-center">
                <div className="text-7xl text-[#ffb524]">
                  <IoPeopleSharp />
                </div>
                <div className="text-3xl w-40 uppercase font-semibold text-[#81c408] text-center">
                  Satisfied customers
                </div>
                <div className="text-3xl font-semibold text-gray-500">1962</div>
              </div>
              <div className="h-60  rounded-md bg-white flex flex-col gap-3 justify-center items-center">
                <div className="text-7xl text-[#ffb524]">
                  <RiServiceFill />
                </div>
                <div className="text-3xl w-40 uppercase font-semibold text-[#81c408] text-center">
                  quality of service
                </div>
                <div className="text-3xl font-semibold text-gray-500">98%</div>
              </div>
              <div className="h-60  rounded-md bg-white flex flex-col gap-5 justify-center items-center">
                <div className="text-7xl text-[#ffb524]">
                  <PiCertificateFill />
                </div>
                <div className="text-3xl w-40 uppercase font-semibold text-[#81c408] text-center">
                  Quality Certificates
                </div>
                <div className="text-3xl font-semibold text-gray-500">32</div>
              </div>
              <div className="h-60  rounded-md bg-white flex flex-col gap-5 justify-center items-center">
                <div className="text-7xl text-[#ffb524]">
                  <FaStore />
                </div>
                <div className="text-3xl w-40 uppercase font-semibold text-[#81c408] text-center">
                  Available products
                </div>
                <div className="text-3xl font-semibold text-gray-500">789</div>
              </div>
            </div>
          </div>

          <div className=" relative w-full flex justify-center items-center">
            <div className=" w-[90%] h-full p-3!">
              <div className="h-full flex justify-between gap-5 items-center flex-col ">
                <div className="w-full relative h-[20%] md:h-[30%] py-10! md:py-15! flex justify-center items-center flex-col">
                  <h4 className="text-xl md:text-2xl font-semibold capitalize text-[#81c408]">
                    Our Testimonial
                  </h4>
                  <h2 className="text-2xl md:text-4xl font-extrabold capitalize text-[#45595B]">
                    Our client saying
                  </h2>

                  <button
                    className=" reviewArrow-prev cursor-pointer px-2! md:px-4! rounded-md text-[#81c408] border-[#ffb524] 
                hover:border-[#ffb524] hover:text-white transition duration-500
                 hover:bg-[#ffb524]  border outline-none text-3xl absolute bottom-0 right-13 md:right-17"
                  >
                    <IoIosArrowRoundBack />
                  </button>
                  <button
                    className=" reviewArrow-next cursor-pointer px-2! md:px-4! rounded-md text-[#81c408] border-[#ffb524]
                     hover:border-[#ffb524] hover:text-white transition duration-500
                      hover:bg-[#ffb524]  border outline-none text-3xl absolute bottom-0 right-0"
                  >
                    <IoIosArrowRoundForward />
                  </button>
                </div>
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  slidesPerView={2}
                  spaceBetween={10}
                  autoplay={{ delay: 3000 }}
                  speed={1000}
                  loop={true}
                  navigation={{
                    nextEl: ".reviewArrow-next",
                    prevEl: ".reviewArrow-prev",
                  }}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    640: {
                      slidesPerView: 2,
                    },
                  }}
                  className=" rounded-md w-full  "
                >
                  {testimonials.map((data, idx) => {
                    console.log(data);
                    return (
                      <SwiperSlide
                        key={idx}
                        className=" relative rounded-md p-4! sm:p-2! md:p-4! overflow-hidden bg-[#F4F6F8] w-[1/2]"
                      >
                        <div className=" h-full">
                          <div className="py-3! w-full md:w-[80%] h-25 sm:h-33 lg:h-25 xl:h-22  font-semibold text-gray-500  sm:text-sm md:text-lg">
                            {data.review}
                          </div>
                          <div className="border-t  flex justify-between items-center font-semibold text-gray-500 border-[#ffb524] p-2! md:p-5! w-full">
                            <div className="w-full h-full flex justify-start items-center gap-2">
                              <div className="w-20 h-20 overflow-hidden relative rounded-md">
                                <Image
                                  src={data.image}
                                  fill
                                  alt="reviewer images"
                                />
                              </div>
                              <div>
                                <div className="text-lg sm:text-sm md:text-2xl font-bold text-[#45595B]">
                                  {data.name}{" "}
                                </div>
                                <div className=" sm:text-sm text-[#45595B] font-light md:text-lg">
                                  {data.role}
                                </div>
                                <div>
                                  {data.rating === 5 ? (
                                    <div className="flex justify-start  text-lg items-center gap-2">
                                      <FaStar className="text-blue-700" />
                                      <FaStar className="text-blue-700" />
                                      <FaStar className="text-blue-700" />
                                      <FaStar className="text-blue-700" />
                                      <FaStar className="text-blue-700" />
                                    </div>
                                  ) : data.rating === 4 ? (
                                    <div className="flex justify-start text-lg items-center gap-2">
                                      <FaStar className="text-blue-700" />
                                      <FaStar className="text-blue-700" />
                                      <FaStar className="text-blue-700" />
                                      <FaStar className="text-blue-700" />
                                      <FaRegStar />
                                    </div>
                                  ) : data.rating === 3 ? (
                                    <div className="flex justify-start text-lg items-center gap-2">
                                      <FaStar className="text-blue-700" />
                                      <FaStar className="text-blue-700" />
                                      <FaStar className="text-blue-700" />
                                      <FaRegStar />
                                      <FaRegStar />
                                    </div>
                                  ) : (
                                    <div className="flex justify-start text-lg items-center gap-2">
                                      <FaStar className="text-blue-700" />
                                      <FaStar className="text-blue-700" />
                                      <FaRegStar />
                                      <FaRegStar />
                                      <FaRegStar />
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>

                            <div className="">
                              {data.role === "Verified Buyer" ? (
                                <span className="text-3xl text-blue-700">
                                  <VscVerifiedFilled />
                                </span>
                              ) : (
                                <span className="text-3xl text-gray-700">
                                  <VscUnverified />
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default page;
// green text-[#81c408]
// golden bg-[#ffb524]
