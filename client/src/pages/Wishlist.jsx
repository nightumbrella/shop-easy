import React from "react";
import { UseWishlist, addWishlist } from "../redux/WishlistSlice";
import { useDispatch } from "react-redux";
const Wishlist = () => {
  const { wishlist } = UseWishlist();
  const dispatch = useDispatch()

  return (
    <div className='w-[1800px] mx-auto pt-10 mb-10'>
      <div className='grid grid-cols-5 gap-5'>
        {wishlist.map((wish, idx) => (
          <div
            key={idx}
            className='h-[300px] border overflow-hidden group  p-2 rounded-xl cursor-pointer relative'
          >
            <div className='h-full  overflow-hidden '>
              <img
                className='w-full  h-full rounded-xl  object-cover'
                src={wish.thumbnail}
                alt=''
              />
            </div>

            <div className='absolute top-2/4 translate-y-[100%] duration-500  group-hover:translate-y-0  border backdrop  overflow-hidden p-4  rounded-b-lg  left-2 backdrop-blur-md w-[calc(100%-16px)]  h-[50%] '>
              <div className='flex items-center justify-between w-full '>
                <button className='px-2 py-2 rounded-sm bg-[#116D6E] text-white active:scale-[.99] '  onClick={() => dispatch(addWishlist(wish.id))}>
                  remove list
                </button>
                <button className='px-2 py-2  active:scale-[.99]  rounded-sm bg-[#116D6E] text-white'>
                  add to cart
                </button>
              </div>
              <div className='flex items-center justify-between '>
                <h1>{wish.title} </h1>
                <h2>{wish.price}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
