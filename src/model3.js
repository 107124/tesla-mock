import React from "react";

import Hamburger from "./hamburger";
import Navbar from "./navbar";
import Logo from "./images/tesla-logo.png";

export default function Model3() {
  return (
    <div className="model-s-continer">
      <Navbar />
      <div className="burger-container">
        <Hamburger />
        <img src={Logo} alt="" className="hamburger-logo" />
        <p>Mockup</p>
      </div>

      <h1>Model 3 page</h1>
    </div>
  );
}
