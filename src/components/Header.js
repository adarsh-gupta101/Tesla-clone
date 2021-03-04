import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/tesla_logo/small/tesla_logo_PNG22.png"
        ></img>
      </div>

      <div>
        <ul>
          <li>Model S</li> <li>Model 3</li> <li>Model X</li> <li>Model Y</li>{" "}
          <li>CyberTruck</li> <li>Powerwall</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Shop</li>
          <li>Tesla Account</li>
        </ul>
      </div>
      {/*  <div className="bar">
        <div className="bar1"></div>
        <div className="bar1"></div>
        <div className="bar1"></div>
        <div className="bar1"></div>
      </div> */}
    </div>
  );
};

export default Header;
