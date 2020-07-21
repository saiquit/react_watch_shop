import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./header.scss";
import { connect } from "react-redux";

import CartSidebar from "../../Components/CartSideBar/CartSideBar";

function Header({ itemCount }) {
  const [show, setShow] = useState(false);
  const toggleSideBar = () => {
    setShow((state) => !state);
  };
  return (
    <div className="header_cover">
      <Link className="brand" to="/">
        <img src="./assets/images/logo.png" alt="Logo of the Website" />
      </Link>
      <div className="links">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
        </ul>
      </div>
      <div className="icons">
        <ul>
          <li>
            <div>
              <i className="fa fa-shopping-cart" onClick={toggleSideBar}>
                <span className="cart_count">{itemCount}</span>
              </i>
            </div>
          </li>
          <li>
            <NavLink to="account">
              <i className="fa fa-user-o"></i>
            </NavLink>
          </li>
          <li>
            <NavLink to="search">
              <i className="fa fa-search"></i>
            </NavLink>
          </li>
        </ul>
      </div>
      {show && <CartSidebar toggleSideBar={toggleSideBar} />}
    </div>
  );
}

const mapStateToProps = ({ cart: { cart } }) => ({
  itemCount: cart.reduce((accuValue, cart) => accuValue + cart.quantity, 0),
});

export default connect(mapStateToProps)(Header);
