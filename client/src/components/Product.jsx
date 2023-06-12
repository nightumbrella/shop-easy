import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { UseWishlist, addWishlist } from "../redux/WishlistSlice";
const Product = ({ images, id, thumbnail }) => {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const { wishlist } = UseWishlist();
  const addWish = (p) => {
    dispatch(addWishlist(p));
    setActive(true);
  };
  return (
    <div className="border rounded-md h-[400px] w-[300px] p-5 relative mb-10">
      <div className="absolute z-50 top-3 left-3 bg-[#fff] px-3 py-3 rounded-full shadow-lg cursor-pointer">
        {active ? (
          <AiFillHeart
            className="text-2xl text-red-600 "
            onClick={() => setActive(false)}
          />
        ) : (
          <AiOutlineHeart
            className="text-2xl text-black "
            onClick={() => addWish(id)}
          />
        )}
      </div>

      <Link
        to={`productsDetails/${id}`}
        className="w-full h-full overflow-clip group"
      >
        <div className="max-w-full w-auto rounded-lg h-[250px] overflow-hidden">
          <img
            src={thumbnail}
            alt="images"
            className=" duration-500 mx-auto max-w-full w-auto  h-[250px]  object-cover mb-5 select-none rounded-lg group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="absolute bottom-2 left-2 right-2">
        <div className="flex items-center relative justify-between border-t-2 pt-2">
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
