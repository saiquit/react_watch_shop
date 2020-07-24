import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./header.scss";
import { connect } from "react-redux";
import SearchBar from "../SearchBar/SearchBar";

import CartSidebar from "../../Components/CartSideBar/CartSideBar";

function Header({ itemCount }) {
  const [show, setShow] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const toggleSideBar = () => {
    setShow((state) => !state);
  };
  const toggleSearchBar = () => {
    setShowSearch(!showSearch);
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
            <div to="search" onClick={toggleSearchBar}>
              <i className="fa fa-search"></i>
            </div>
          </li>
        </ul>
      </div>
      {show && <CartSidebar toggleSideBar={toggleSideBar} />}
      {showSearch && <SearchBar toggleSearchBar={toggleSearchBar} />}
    </div>
  );
}

const mapStateToProps = ({ cart: { cart } }) => ({
  itemCount: cart.reduce(
    (accuValue, cartItem) => accuValue + cartItem.quantity,
    0,
  ),
});

export default connect(mapStateToProps)(Header);
