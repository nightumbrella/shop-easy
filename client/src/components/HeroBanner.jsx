import React from "react";

const HeroBanner = () => {
  return (
    <div className=" mb-10 pt-2 ">
      <div className="w-full h-[300px] bg-[#f4f4f4] rounded-md select-none flex items-start pl-40 justify-center flex-col">
        <h1 className="text-3xl mb-5 ">
          Grap Upto{" "}
          <span className="text-4xl text-[#116D6E] font-semibold">50%</span> Off
          On <br />
          Selected Headphone
        </h1>
        <button className="w-32 rounded-full white text-2xl py-2 bg-[#116D6E]">
          Buy
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;
