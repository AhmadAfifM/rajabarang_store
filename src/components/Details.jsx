import React from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonConatiner } from "./Button";
const Details = () => {
  return (
    <ProductConsumer>
      {(value) => {
        const { id, company, title, img, price, info, inCart } =
          value.detailProduct;
        return (
          <div className="container py-5">
            {/* title */}
            <div className="row">
              <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                <h1>{title}</h1>
              </div>
            </div>
            {/* end title */}
            {/* product info */}
            <div className="row">
              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                <img src={img} alt="img product" />
              </div>
              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                <h2>model : {title}</h2>
                <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                  made by: <span className="text-uppercase">{company}</span>
                </h4>
                <h4 className="text-blue">
                  <strong>
                    price : <span>$</span>
                    {price}
                  </strong>
                </h4>
                <p className="text-capitalize fw-bold mt-3 mb-0">
                  some more about product info :
                </p>
                <p className="text-muted lead">
                  {info.length > 200 ? info.slice(0, 200) + "..." : info}
                </p>
                {/* buttons */}
                <div>
                  <Link to="/">
                    <ButtonConatiner className="text-capitalize">
                      back to products
                    </ButtonConatiner>
                  </Link>
                  <ButtonConatiner
                    cart
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                    className="text-capitalize"
                    disabled={inCart ? true : false}
                  >
                    {inCart ? "in cart" : "add to cart"}
                  </ButtonConatiner>
                </div>
              </div>
            </div>
            {/* end product info */}
          </div>
        );
      }}
    </ProductConsumer>
  );
};

export default Details;
