import React, { useState, useEffect } from "react";
import shopData from "../../shopData";
import "./single-product.scss";
function SingleProduct({ match }) {
  const [product, setProduct] = useState({});

  const findItem = (id) => {
    // eslint-disable-next-line
    setProduct(shopData.find((item) => item.id == id));
  };
  useEffect(() => {
    findItem(match.params.id);
    // eslint-disable-next-line
  }, []);
  const { product_img, product_name, price, product_details } = product;
  return (
    <>
      <div className="shop_cover">
        <h1>{product_name?.toUpperCase()}</h1>
      </div>
      <div className="single_item_cover">
        <div className="product_img">
          <img src={product_img} alt={product_name} />
        </div>
        <h2>{product_name}</h2>
        <p>{product_details}</p>
        <h4>$ {price}</h4>
      </div>
    </>
  );
}

export default SingleProduct;
