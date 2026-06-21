"use client";

import { FaShoppingBag } from "react-icons/fa";

const page = () => {
  return (
    <div className="w-full  flex justify-center items-center">
      <div className="w-[90%] h-full">
        <div className="w-full h-40 flex justify-center items-center">
          <h2 className="text-2xl font-bold text-gray-400 flex gap-2">
            <span className="text-3xl">
              <FaShoppingBag />
            </span>
            Shopping Cart
          </h2>
        </div>
        <div className="w-full h-[50vh] border-t border-gray-300 p-3! relative flex flex-col md:flex-row justify-between items-start">
          <div className="w-full md:w-[70%] h-full rounded-md border">
            product
          </div>
          <div className="w-full md:w-[25%] border  h-full rounded-md  ">subTotal</div>
        </div>
      </div>
    </div>
  );
};

export default page;
