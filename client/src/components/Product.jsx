import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
const Product = ({ images,id,thumbnail }) => {
  const [active, setActive] = useState(false);
  console.log(images)
  return (
    <div className="border rounded-md px-5 py-3 relative mb-10">
      <div className="absolute top-3 left-3 bg-[#fff] px-3 py-3 rounded-full shadow-lg cursor-pointer">
        {active ? (
          <AiFillHeart className="text-2xl text-red-600 "  onClick={() => setActive(false)}/>
        ) : (
          <AiOutlineHeart
            className="text-2xl text-black "
            onClick={() => setActive(true)}
          />
        )}
      </div>
      
      <Link to={`productsDetails/${id}`}>
        <img
          src={thumbnail}
          alt="images"
          className="w-[300px] mb-5 select-none"
        />
      </Link>
      <div>
        <div className="flex items-center justify-between border-t-2 pt-2">
          <h1 className="font-semibold">AirPods Max</h1>
          <h1 className="font-medium bg-[#e7e7e7] px-2 py-1 rounded-md">
            $80.00
          </h1>
        </div>
        <h2 className="text-sm">technology</h2>
      </div>
    </div>
  );
};

export default Product;
