import React from "react";

import Navbar from "./navbar";
import Hamburger from "./hamburger";
import Logo from "./images/tesla-logo.png";

export default function ModelY() {
  return (
    <div className="model-s-continer">
      <Navbar />
      <div className="burger-container">
        <Hamburger />
        <img src={Logo} alt="" className="hamburger-logo" />
        <p>Mockup</p>
      </div>

      <h1>Model Y page</h1>
    </div>
  );
}
