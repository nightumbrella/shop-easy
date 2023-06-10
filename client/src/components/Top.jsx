import { BsTelephone } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import LocationSelector from "./LocationSelector";

const Top = () => {
  return (
    <div className="flex px-5 py-1 items-center justify-between bg-[#f4f4f4] shadow-sm relative z-10 text-black">
      <div className="flex items-center gap-2">
        <BsTelephone className="text-black" />
        <h3 className="text-black">+0095741135</h3>
      </div>
      <h1 className="text-black max-md:hidden">
        Get 50% Off on Selected Items | Shop Now
      </h1>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <h1 className="text-black">Eng</h1>
          <IoIosArrowDown className="text-black" />
        </div>
        <div className="flex items-center gap-2">
          {/* <LocationSelector /> */}
          <h1 className="text-black">Location</h1>
          <IoIosArrowDown className="text-black" />
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Top;
