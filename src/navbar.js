import React from "react";
import Logo from "./images/tesla-logo.png";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="left-side">
        <img src={Logo} className="logo" alt="Tesla Logo" />
      </div>
      <div className="center">
        <div className="link">MODEL S</div>
        <div className="link">MODEL 3</div>
        <div className="link">MODEL X</div>
        <div className="link">MODEL Y</div>
      </div>
      <div className="right-side" />
    </div>
  );
}
