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
            <h1 className="text-lg font-bold">Vidyaranyapuram, Mysuru</h1>
          </div>
          <div className="down-arrow">
            <i class="fa-solid fa-chevron-down"></i>
          </div>
        </div>
      </div>
      <div className="right">
        <ul className="links sm:my-4 py-4 ">

     <a className="ref">
            

            {(status)?<h2 className="bi bi-wifi text-green-600 "> Online</h2>: <h2 className="bi bi-wifi-off text-red-700"> Offline </h2>} 
          
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
