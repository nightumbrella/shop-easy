import React from "react";
import img from "../assets/pexels-melvin-buezo-2529148.jpg";
import { Link } from "react-router-dom";
import { UseModal, changeModal } from "../redux/modalSLice";
import { useDispatch } from "react-redux";
import { motion as m } from "framer-motion";

const MenuCategory = () => {
  const { modal } = UseModal();
  const dispatch = useDispatch();
  const openModal = () => {
    dispatch(changeModal());
  };

  if (modal) {
    document.body.style.overflow = "hidden";
  }else document.body.style.overflow = 'auto'

  const variants = {
    show: {
      transform: "translateY(0em)",
      opacity: 1,
    },
    hide: {
      transform: "translateY(-100%)",
      opacity: 0,
    },
  };

  return (
    <>
      
        <m.div
          className="w-screen  h-screen absolute flex justify-center items-start z-50 top-0 left-0 bg-[#EEF0F4]"
          initial={false}
          animate={modal ? "show" : "hide"}
          variants={variants}

        >
          <div className="flex p-20  relative h-[90vh] mt-[5vh] w-[95vw] rounded-xl bg-[#333] ">
            {/* exit */}
            <div
              className="absolute  p-2 -top-11 right-2/4 z-50 cursor-pointer"
              onClick={openModal}
            >
              
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
            </div>
            {/* exit */}
            {/* left */}

            <div className="relative  group w-[600px]">
              <Link to={"/products/sneakers"} onClick={openModal}>
                <img
                  src={img}
                  alt=""
                  className="w-full h-full rounded-xl object-cover "
                />

                <h1 className="absolute left-5 py-2 px-3 backdrop-blur-md opacity-0 group-hover:opacity-100 duration-300 bg-[#f2f7f7] top-5 text-3xl rounded-md">
                  Explore all sneakers
                </h1>

                <div className="absolute top-5  p-2 right-5 border-2 border-black rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-16 h-16"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </div>
                <div className="absolute duration-300 -bottom-10 -right-20 opacity-0 group-hover:opacity-100">
                  <img
                    src="https://images.pexels.com/photos/2529146/pexels-photo-2529146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    className=" w-[300px] h-[300px] rounded-xl object-cover drop-shadow-md"
                  />
                </div>
              </Link>
            </div>
            {/* left */}

            {/* right */}
            <div className=" ">
              <div>
                <h1>Man Collection</h1>
              </div>
              <div>
                <h1>Woman Collection</h1>
              </div>
            </div>
            {/* right */}
          </div>
        </m.div>
      
    </>
  );
};

export default MenuCategory;
