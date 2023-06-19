import React from "react";
import { UseCart } from "../redux/CartSlice";

const Cart = () => {
  const { cart } = UseCart();
  return (
    <div>
      {cart.map((p) => (
        <div>
          <img
            src={p.thumbnail}
            alt=''
          />
        </div>
      ))}
    </div>
  );
};
    
export default Cart;
