import React from "react";
import "./cart-sidebar.scss";
import CartSingleItem from "../CartSingleItem/CartSingleItem";
import { connect } from "react-redux";

function CartSideBar({ toggleSideBar, cart }) {
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
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = ({ cart: { cart } }) => ({
  cart,
});

export default connect(mapStateToProps)(CartSideBar);
