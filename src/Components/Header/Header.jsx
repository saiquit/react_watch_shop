import React from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";

function Header() {
  return (
    <div className="header_cover">
      <div className="brand">
        <img src="./assets/images/logo.png" alt="Logo of the Website" />
      </div>
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
            <NavLink to="/cart">
              <i className="fa fa-shopping-cart"></i>
            </NavLink>
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
    </div>
  );
}

export default Header;
