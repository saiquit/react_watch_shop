import React from "react";
import "./single-product.scss";

function SingleProduct({ id, product_name, price, product_img }) {
  return (
    <div className="single_product_cover">
      <img src={product_img} alt={product_name} />
      <button>Add To Cart</button>
      <h3>{product_name}</h3>
      <p>$ {price}</p>
    </div>
  );
}

export default SingleProduct;
