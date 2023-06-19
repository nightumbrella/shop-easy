import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { RiUser6Line } from "react-icons/ri";
import { CgShoppingCart } from "react-icons/cg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";
import { CiMenuBurger } from "react-icons/ci";
import { UseModal, changeModal } from "../redux/modalSLice";
import { useDispatch } from "react-redux";
import { UseWishlist } from "../redux/WishlistSlice";
import { UseCart } from "../redux/CartSlice";

const Header = () => {
  const { wishlist } = UseWishlist();
  const dispatch = useDispatch();
  const { modal } = UseModal();
  const { cart } = UseCart();
  const openModal = () => {
    dispatch(changeModal());
    console.log("click");
  };
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
    <div className='relative  flex items-center px-10'>
      <div className='flex items-center  justify-between py-3 flex-auto'>
        <h1 className='text-2xl text-[#4F709C'>
          <Link to={"/"}>easy-shop</Link>
        </h1>
        <div className='flex items-center gap-10 max-md:hidden'>
          {links.map((link) => (
            <div key={link.id}>
              {link.category ? (
                <li className='relative'>
                  <h1
                    className='flex items-center gap-2 font-medium cursor-pointer '
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
                              transform: "translateY(0em)",
                            }
                          : {
                              height: " 0px",
                              transition: { delay: 2, duration: 2 },
                            }
                      }
                      className='absolute top-10 left-5 bg-white px-3 py-3 rounded-lg w-60 h-0 overflow-hidden shadow-md'
                    >
                      {category.map((link, idx) => (
                        <Link
                          to={`category/${link}`}
                          key={idx}
                          onClick={() => setShowCat(false)}
                        >
                          <h1 className='font-medium leading-10 hover:bg-slate-300 px-2 rounded-md select-none'>
                            {link}
                          </h1>
                        </Link>
                      ))}
                    </m.ul>
                  )}
                </li>
              ) : (
                <li className='font-medium'>
                  <Link to={link.title}>{link.title}</Link>
                </li>
              )}
            </div>
          ))}
        </div>

        <div className=' items-center gap-3 flex'>
          {/* <div className="relative w-72 max-lg:hidden flex ">
           

            <input
              type="text"
              placeholder="Search Product..."
              className="rounded-2xl border w-full px-3 py-1 text-black outline-none bg-slate-100 pr-10"
            /> 
            <button className="absolute right-2 top-2/4 -translate-y-2/4">
              <AiOutlineSearch className="text-2xl" />
            </button>
          </div> */}
          <div
            className='cursor-pointer'
            onClick={openModal}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25'
              />
            </svg>
          </div>

          <Link
            to={"wishlist"}
            className='relative'
          >
            <div className='absolute -top-2 -right-3   bg-[#116D6E] text-white w-4 h-4 flex items-center justify-center rounded-full px-3'>
              {wishlist.length}
            </div>
            <AiOutlineHeart className='w-6 h-6' />
          </Link>

          <div className=' items-center gap-2 font-medium rounded-full hover:bg-slate-100 duration-300 cursor-pointer px-3 py-2  max-xl:hidden flex'>
            <RiUser6Line className='text-xl' />
            Account
          </div>
          <Link
            to={"/cart"}
            className=' items-center gap-2 font-medium rounded-full hover:bg-slate-100 px-3 duration-300 cursor-pointer py-2 max-xl:hidden flex'
          >
            <CgShoppingCart className='text-xl' />
            Cart
            <span>{cart.length}</span>
          </Link>
        </div>
      </div>
      <div className=' rounded-full p-4 bg-slate-300 md:hidden'>
        <CiMenuBurger className='text-xl ' />
      </div>
    </div>
  );
};

export default Header;
