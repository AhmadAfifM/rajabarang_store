import React from "react";
import CartItem from "./CartItem";

const CartList = ({ value }) => {
  return value.cart.map((item) => (
    <div
      key={item.id}
      className="container-fluid text-center d-none d-lg-block"
    >
      <CartItem key={item.id} item={item} value={value} />
    </div>
  ));
};

export default CartList;
