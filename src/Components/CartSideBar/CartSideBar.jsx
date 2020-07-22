import React from "react";
import "./cart-sidebar.scss";
import CartSingleItem from "../CartSingleItem/CartSingleItem";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function CartSideBar({ toggleSideBar, cart, totalPrice }) {
  return (
    <div className="overlay">
      <div className="sidebar_cover">
        <div className="side_bar_left" onClick={toggleSideBar}></div>
        <div className="side_bar_right">
          <div className="header_text">
            <h2>Cart Page</h2>
            <span onClick={toggleSideBar}>X</span>
          </div>
          {cart.map((item) => (
            <CartSingleItem key={item.id} item={item} />
          ))}
          <div className="cart_sidebar_footer">
            <Link
              to="/checkout"
              className="cart_sidebar_footer_link"
              onClick={toggleSideBar}
            >
              <button>Go checkout</button>
            </Link>
            <h2>Total: {parseFloat(totalPrice).toFixed(2)}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = ({ cart: { cart } }) => ({
  cart,
  totalPrice: cart
    .slice(0)
    .reduce((accu, cartItem) => accu + cartItem.price * cartItem.quantity, 0),
});

export default connect(mapStateToProps)(CartSideBar);
