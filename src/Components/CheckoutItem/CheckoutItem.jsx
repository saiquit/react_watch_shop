import React from "react";
import { connect } from "react-redux";

import {
  addToCart,
  itemToReduce,
  removeFromCart,
} from "../../redux/Cart/cartAction";

import "./checkout-item.scss";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { product_name, price, product_img, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={product_img} alt="item" />
      </div>
      <span className="name">{product_name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(removeFromCart(item)),
  addItem: (item) => dispatch(addToCart(item)),
  removeItem: (item) => dispatch(itemToReduce(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
