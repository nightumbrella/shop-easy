import React, { useState } from "react";
import { AiOutlineHeart,AiFillHeart } from "react-icons/ai";

const Product = () => {
    const [active,setActive] = useState(false)
  return (
    <div className="border rounded-md px-5 py-3 relative">
      <div className="absolute top-3 left-3 bg-[#fff] px-3 py-3 rounded-full shadow-lg cursor-pointer">
        {
            active ? <AiFillHeart/> :  <AiOutlineHeart className="text-2xl text-black " />
        }
       
      </div>
      <img
        src="/headphone/airpods-red.jpg"
        alt="images"
        className="w-[300px]"
      />
    </div>
  );
};

export default Product;
