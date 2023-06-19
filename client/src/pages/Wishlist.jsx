import React from "react";
import { UseWishlist } from "../redux/WishlistSlice";
const Wishlist = () => {
  const { wishlist } = UseWishlist();
  return (
    <div className='w-[1800px] mx-auto pt-10'>
      <div className='grid grid-cols-5 gap-5'>
        {wishlist.map((wishp, idx) => (
          <div
            key={idx}
            className='h-[300px] border p-2 rounded-xl cursor-pointer relative'
          >
            <div className='h-full  overflow-hidden '>
              <img
                className='w-full  h-full rounded-xl  object-cover'
                src={wishp.thumbnail}
                alt=''
              />
            </div>

            <div className="absolute top-0 left-0">
            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
