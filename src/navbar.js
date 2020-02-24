import React from "react";
import Hamburger from "./hamburger";

import Logo from "./images/tesla-logo.png";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="left-side">
        {/* <Hamburger /> */}

        <img src={Logo} className="logo" alt="Tesla Logo" />
      </div>
      <div className="center">
        <div to="./modelS.js" className="link">
          MODEL S
        </div>
        <div className="link">MODEL 3</div>
        <div className="link">MODEL X</div>
        <div className="link">MODEL Y</div>
      </div>

      <div className="right-side" />
    </div>
  );
}
