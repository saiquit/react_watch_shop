import React from "react";
import "./cart-sidebar.scss";

function CartSideBar({ toggleSideBar }) {
  return (
    <div className="sidebar_cover">
      <div className="side_bar_left" onClick={toggleSideBar}></div>
      <div className="side_bar_right">
        <div className="header_text">
          <h2>Cart Page</h2>
          <span onClick={toggleSideBar}>X</span>
        </div>
      </div>
    </div>
  );
}

export default CartSideBar;
