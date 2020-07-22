import React from "react";
import { connect } from "react-redux";
import CheckoutItem from "../../Components/CheckoutItem/CheckoutItem";

import "./cart-checkout.scss";

function CheckoutPage({ cartItems, total }) {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">TOTAL: ${parseFloat(total).toFixed(2)}</div>
    </div>
  );
}

const mapStateToProps = ({ cart: { cart } }) => ({
  cartItems: cart,
  total: cart
    .slice(0)
    .reduce((accu, cartItem) => accu + cartItem.price * cartItem.quantity, 0),
});

export default connect(mapStateToProps)(CheckoutPage);
