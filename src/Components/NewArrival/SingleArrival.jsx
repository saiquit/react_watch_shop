import React from "react";

function SingleArrival({ id, img, price, product_name }) {
  return (
    <div className="single_product_cover">
      <img src={img} alt={product_name} />
      <h3>{product_name}</h3>
      <p>$ {price}</p>
    </div>
  );
}

export default SingleArrival;
