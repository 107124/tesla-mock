import React from "react";
import RedCar from "./images/red-model3.jpg";
import WhiteCar from "./images/white-car.jpg";
import Navbar from "./navbar.js";
import FadeInSection from "./FadeInSection";
import Footer from "./footer";

import "./styles.css";
import "./media-queries.css";
import Logo from "./images/tesla-logo.png";
import Hamburger from "./hamburger";

export default function App() {
  return (
    <div className="App">
      <FadeInSection>
        <Navbar />
      </FadeInSection>

      <div className="car-container">
        <div className="burger-container">
          <Hamburger />
          <img src={Logo} alt="" className="hamburger-logo" />
          <p>Mockup</p>
        </div>

        <div className="car-image">
          <FadeInSection>
            <img src={RedCar} className="car" alt="" />

            <div className="centered one">Model 3</div>
          </FadeInSection>
        </div>
        <div className="car-image">
          <FadeInSection>
            <img src={WhiteCar} className="car" alt="" />
            <div className="centered two">Model Y</div>
          </FadeInSection>
        </div>
        <div className="car-image">
          <FadeInSection>
            <img
              src="https://images.unsplash.com/photo-1575733135961-39fb82b34f86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              className="car"
              alt=""
            />
            <div className="centered three">Impact Protection</div>
          </FadeInSection>
        </div>
        <div className="car-image">
          <FadeInSection>
            <img
              src="https://images.unsplash.com/photo-1554744512-5a8ef212982d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
              className="car"
              alt=""
            />
            <div className="centered four">
              From 0-60 MPH 3.2 s | 322mi Range | AWD Dual Motor
            </div>
          </FadeInSection>
        </div>
        <div className="car-image">
          <FadeInSection>
            <img
              src="https://images.unsplash.com/photo-1571127236794-81c0bbfe1ce3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
              className="car"
              alt=""
            />
            <div className="centered five">Free Unlimited Supercharging</div>
          </FadeInSection>
        </div>
        <FadeInSection>
          <Footer />
        </FadeInSection>
      </div>
    </div>
  );
}
