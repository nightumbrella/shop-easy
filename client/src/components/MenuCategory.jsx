import React, { useState } from "react";
import img from "../assets/pexels-melvin-buezo-2529148.jpg";
import Wrapper from "./Wrapper";
const MenuCategory = () => {
  const [menu, setMenu] = useState(true);

  if (menu) {
    document.body.style.overflow = "hidden";
  }
  return (
    <>
      {menu && (
        <div className="w-screen border-2 border-red-800 h-screen absolute flex justify-center items-start z-50 top-0 left-0 bg-[#EEF0F4]">
          <div className="flex relative h-[95vh] w-[90vw] bg-[#333]">
            <div className="w-[70%] overflow-hidden ">
              <img
                src={img}
                alt=""
                className="w-full h-screen object-contain "
              />
              <div className="hidden">
                <img
                  src="https://images.pexels.com/photos/2529146/pexels-photo-2529146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>
            </div>
            <div className="">
              <div>
                <h1>Man Collection</h1>
              </div>
              <div>
                <h1>Woman Collection</h1>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuCategory;
