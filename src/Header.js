import React, { useEffect, useState } from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";



const Header = () => {
  const status=useOnlinestatus();


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
            <h3 className="header-icons">

            {(status)?<i class="bi bi-wifi" style={{"color":"green"}}></i>:<i class="bi bi-wifi-off"></i>} 
            </h3>
          </a>
   
          <a className="ref">
            <li className="header-icons">
              <i class="fa-solid fa-house"></i><Link to='/'>Home</Link> 
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
