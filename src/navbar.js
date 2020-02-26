import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./images/tesla-logo.png";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="left-side">
        {/* <Hamburger /> */}
        <NavLink exact to="/" activeClassName="nav-link-active">
          <img src={Logo} className="logo" alt="Tesla Logo" />
        </NavLink>
        <p>Mockup</p>
      </div>
      <div className="center">
        <NavLink to="/models" className="link">
          MODEL S
        </NavLink>
        <NavLink to="/model3" className="link">
          MODEL 3
        </NavLink>
        <NavLink to="/modelx" className="link">
          MODEL X
        </NavLink>
        <NavLink to="/modely" className="link">
          MODEL Y
        </NavLink>
      </div>

      <div className="right-side" />
    </div>
  );
}
