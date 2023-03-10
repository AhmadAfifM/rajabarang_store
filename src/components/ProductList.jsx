import React from "react";
import Product from "./Product";
import Title from "./Title";
// import { storeProducts } from "../data";
import { ProductConsumer } from "../context";
const ProductList = () => {
  // const [state, setState] = useState(storeProducts);
  // console.log(state);
  return (
    <>
      <div>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="product" />
            <div className="row">
              <ProductConsumer>
                {(val) => {
                  return val.products.map((product) => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
