import React from "react";
import "./cart-single.scss";
function CartSingleItem({ item }) {
  const { product_name, price, product_img, quantity } = item;
  return (
    <>
      <div className="cart_item_cover">
        <div className="product_img">
          <img src={product_img} alt={product_name} />
        </div>
        <div className="cart_details">
          <h3>{product_name}</h3>
          <p>
            <span>{quantity} X </span>
            {price}
          </p>
        </div>
      </div>
    </>
  );
}

export default CartSingleItem;
