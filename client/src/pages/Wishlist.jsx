import React from 'react'
import { UseWishlist } from '../redux/WishlistSlice'

const Wishlist = () => {
  const {wishlist}  = UseWishlist()
  return (
    <div>
      {
        wishlist.map(wishp => (
          <div>
            <img src={wishp.thumbnail} alt="" />
          </div>
        ))
      }

    </div>
  )
}

export default Wishlist