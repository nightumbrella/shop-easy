import React, { useState } from "react";
import Top from "./Top";
import { AiOutlineSearch } from "react-icons/ai";
import { RiUser6Line } from "react-icons/ri";
import { CgShoppingCart } from "react-icons/cg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";

const Header = () => {
  const links = [
    {
      id: 1,
      title: "Categories",
      category: true,
    },
    {
      id: 2,
      title: "Deals",
    },
    {
      id: 3,
      title: "What's New",
    },
    {
      id: 4,
      title: "Delivery",
    },
  ];
  const category = [
    "Skincare",
    "Personal Care",
    "Handbags",
    "Apparels",
    "Watches",
    "Eye Wear",
    "Jewellery",
  ];
  const [showCat, setShowCat] = useState(false);
  return (
    <div>
      <Top />
      <div className="flex items-center px-10 justify-between py-3">
        <h1 className="text-2xl text-[#4F709C">
          <Link to={"/"}>easy-shop</Link>
        </h1>
        <div className="flex items-center gap-10">
          {links.map((link) => (
            <div key={link.id}>
              {link.category ? (
                <li className="relative">
                  <h1
                    className="flex items-center gap-2 font-medium cursor-pointer "
                    onClick={() => {
                      setShowCat(!showCat);
                    }}
                  >
                    {link.title}
                    <MdOutlineKeyboardArrowDown />
                  </h1>
                  {showCat && (
                    <m.ul
                      animate={
                        showCat
                          ? {
                              height: 300,
                            }
                          : {
                              height: "0%",
                              transition: 0.3,
                            }
                      }
                      exit={{
                        height: 0,
                        transition: 0.3,
                      }}
                      className="absolute top-10 left-5 bg-white px-3 py-3 rounded-lg w-60 h-0 overflow-hidden shadow-md"
                    >
                      {category.map((link, idx) => (
                        <Link
                          to={`category/${link}`}
                          key={idx}
                          onClick={() => setShowCat(false)}
                        >
                          <h1 className="font-medium leading-10 hover:bg-slate-300 px-2 rounded-md select-none">
                            {link}
                          </h1>
                        </Link>
                      ))}
                    </m.ul>
                  )}
                </li>
              ) : (
                <li className="font-medium">
                  <Link to={link.title}>{link.title}</Link>
                </li>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3 ">
          <div className="relative w-72">
            <input
              type="text"
              placeholder="Search Product..."
              className="rounded-2xl border w-full px-3 py-1 text-black outline-none bg-slate-100 pr-10"
            />
            <button className="absolute right-2 top-2/4 -translate-y-2/4">
              <AiOutlineSearch className="text-2xl" />
            </button>
          </div>

          <div className="flex items-center gap-2 font-medium rounded-full hover:bg-slate-100 duration-300 cursor-pointer px-3 py-2 ml-10">
            <RiUser6Line className="text-xl" />
            Account
          </div>
          <div className="flex items-center gap-2 font-medium rounded-full hover:bg-slate-100 px-3 duration-300 cursor-pointer py-2">
            <CgShoppingCart className="text-xl" />
            Cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
