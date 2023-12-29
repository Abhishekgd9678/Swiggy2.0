import React from "react";
import logo from "./images/logo.png";

const Header = () => {
  return (
    <div className="Header">
      <div className="left">
        <div className="logo">
          <img className="logo-img" src={logo} />
        </div>
        <div className="address">
          <div className="display-address">
            <h4>Vidyaranyapuram, Mysuru</h4>
          </div>
          <div className="down-arrow">
            <i class="fa-solid fa-chevron-down"></i>
          </div>
        </div>
      </div>
      <div className="right">
        <ul className="links">
          <a className="ref">
            <li className="header-icons">
              <i class="fa-solid fa-house"></i> Home
            </li>
          </a>
          <a className="ref">
            <li className="header-icons">
              <i class="fa-solid fa-percent"></i> Offers
            </li>
          </a>
          <a className="ref">
            <li className="header-icons">
              <i class="fa-solid fa-cart-shopping"></i> Cart
            </li>
          </a>
          <a className="ref">
            <li className="header-icons">
              <i class="fa-solid fa-user"></i> Account
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Header;
