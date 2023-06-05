import React from "react";
import HeroBanner from "../components/HeroBanner";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Product from "../components/Product";
import { product } from "../../product";

const Home = () => {
  return (
    <div className="px-10">
      <HeroBanner />
      <div>
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-3xl">New Arrivals</h1>
          <h1>
            <Link className="flex items-center gap-2">
              View all <MdOutlineKeyboardArrowRight className="text-xl" />
            </Link>
          </h1>
        </div>
        <div className="grid grid-cols-5 place-items-center">
          {product.map((product) => (
            <Product category={product.id} key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
