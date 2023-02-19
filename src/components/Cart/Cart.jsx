import React from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCard from "./EmptyCard";
import { ProductConsumer } from "../../context";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

const Cart = () => {
  return (
    <section>
      <ProductConsumer>
        {(value) => {
          const { cart } = value;
          return (
            <React.Fragment>
              ;
              {cart.length > 0 ? (
                <>
                  <Title name="Your" title="Cart"></Title>
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotals value={value} />
                </>
              ) : (
                <EmptyCard />
              )}
            </React.Fragment>
          );
        }}
      </ProductConsumer>
    </section>
  );
};

export default Cart;
