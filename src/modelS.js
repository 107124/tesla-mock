import React from "react";

import AOS from "aos";
import FadeInSection from "./FadeInSection";
import Hamburger from "./hamburger";
import Navbar from "./navbar";
import Logo from "./images/tesla-logo.png";

export default function ModelS() {
  AOS.init({
    duration: 1200
  });
  return (
    <div className="model-s-continer">
      <Navbar />
      <div className="burger-container">
        <Hamburger />
        <img src={Logo} alt="" className="hamburger-logo" />
        <p>Mockup</p>
      </div>
      <div className="car-image group1">
        <FadeInSection>
          <img
            src="https://images.unsplash.com/photo-1572029117144-b991c2eaee93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=635&q=80"
            className="car"
            alt=""
          />
        </FadeInSection>

        <FadeInSection>
          <div className="modelS car1">MODEL S</div>
          <img
            src="https://images.unsplash.com/photo-1569919827715-5c0d1e95f833?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            className="car"
            alt=""
          />
        </FadeInSection>
        <div className="modelS car2">Up to 390 miles</div>
      </div>
      <div className="car-image group2">
        <FadeInSection>
          <img
            src="https://images.unsplash.com/photo-1541447270888-83e8494f9c06?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            className="car"
            alt=""
          />
          <div class="item" data-aos="slide-up">
            7
          </div>
        </FadeInSection>
      </div>
      <div className="car-image group3">
        <FadeInSection>
          <img
            src="https://images.unsplash.com/photo-1453491945771-a1e904948959?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            className="car"
            alt=""
          />
        </FadeInSection>
      </div>
    </div>
  );
}
