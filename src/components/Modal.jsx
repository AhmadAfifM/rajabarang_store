import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import { ButtonConatiner } from "./Button";
import { Link } from "react-router-dom";

const Modal = () => {
  return (
    <ProductConsumer>
      {(value) => {
        const { modalOpen, closeModal } = value;
        const { img, title, price } = value.modalProduct;
        if (!modalOpen) {
          return null;
        } else {
          return (
            <ModalContainer>
              <div className="container">
                <div className="row">
                  <div
                    id="modal"
                    className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
                  >
                    <h5>item added to the cart</h5>
                    <img src={img} alt="product" className="img-fluid" />
                    <h5>{title}</h5>
                    <h5 className="text-muted"> price : $ {price}</h5>
                    <Link to="/">
                      <ButtonConatiner
                        className="text-capitalize"
                        onClick={() => closeModal()}
                      >
                        continue shopping
                      </ButtonConatiner>
                    </Link>
                    <Link to="/cart">
                      <ButtonConatiner
                        cart
                        className="text-capitalize"
                        onClick={() => closeModal()}
                      >
                        got to cart
                      </ButtonConatiner>
                    </Link>
                  </div>
                </div>
              </div>
            </ModalContainer>
          );
        }
      }}
    </ProductConsumer>
  );
};

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
    border-radius: 0.5rem;
  }
`;

export default Modal;
