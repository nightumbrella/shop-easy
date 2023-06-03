import { BsTelephone } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

const Top = () => {
  return (
    <div className="flex px-5 py-1 items-center justify-between bg-green-800">
      <div className="flex items-center gap-2">
        <BsTelephone className="white" />
        <h3 className="white">+0095741135</h3>
      </div>
      <h1 className="white">Get 50% Off on Selected Items | Shop Now</h1>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <h1 className="white">Eng</h1>
          <IoIosArrowDown className="white" />
        </div>
        <div className="flex items-center gap-2">
          <h1 className="white">Location</h1>
          <IoIosArrowDown className="white" />
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
