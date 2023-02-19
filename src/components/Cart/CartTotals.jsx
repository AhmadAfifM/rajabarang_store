import React from "react";
import { Link, useNavigate } from "react-router-dom";
import PaypalButton from "./PaypalButton-2";
const CartTotals = ({ value }) => {
  let navigate = useNavigate();
  // console.log("THIS USE LOCATION => ", location.pathname);
  // console.log("THIS PATHNAME => ", window.location.pathname);
  // console.log("THIS URL => ", window.location.href);
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-end">
          <Link to="/">
            <button
              className="btn btn-outline-danger text-uppercase mb-3 px-3"
              type="button"
              onClick={() => clearCart()}
            >
              clear cart
            </button>
          </Link>
          <h5>
            <span className="text-title">
              subtotal :<strong>$ {cartSubTotal}</strong>
            </span>
          </h5>
          <h5>
            <span className="text-title">
              tax :<strong>$ {cartTax}</strong>
            </span>
          </h5>
          <h5>
            <span className="text-title">
              total :<strong>$ {cartTotal}</strong>
            </span>
          </h5>
          <PaypalButton
            totalAmount={cartTotal}
            clearCart={clearCart}
            history={navigate}
          />
        </div>
      </div>
    </div>
  );
};

export default CartTotals;
