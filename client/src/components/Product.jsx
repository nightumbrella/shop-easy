import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
const Product = ({ category }) => {
  const [active, setActive] = useState(false);
  console.log(category);
  return (
    <Link to={`products/${category}`}>
      <div className="border rounded-md px-5 py-3 relative mb-10">
        <div className="absolute top-3 left-3 bg-[#fff] px-3 py-3 rounded-full shadow-lg cursor-pointer">
          {active ? (
            <AiFillHeart className="text-2xl text-red-600 " />
          ) : (
            <AiOutlineHeart
              className="text-2xl text-black "
              onClick={() => setActive(true)}
            />
          )}
        </div>
        <img
          src="/headphone/airpods-red.jpg"
          alt="images"
          className="w-[300px]"
        />
        <div>
          <div className="flex items-center justify-between">
            <h1 className="font-semibold">AirPods Max</h1>
            <h1 className="font-medium">$80.00</h1>
          </div>
          <h2 className="text-sm">technalogy</h2>
        </div>
      </div>
    </Link>
  );
};

export default Product;
