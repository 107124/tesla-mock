import React from "react";
import RedCar from "./images/red-model3.jpg";
import WhiteCar from "./images/white-car.jpg";
import Navbar from "./navbar.js";

import "./styles.css";

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="car-container">
        <div className="car-one">
          <FadeInSection>
            <img src={RedCar} className="car" alt="" />
          </FadeInSection>
          <div class="centered">Centered</div>
        </div>
        <div className="car-one">
          <FadeInSection>
            <img src={WhiteCar} className="car" alt="" />
          </FadeInSection>
          <div class="centered">Centered</div>
        </div>

        <FadeInSection>
          <img
            src="https://images.unsplash.com/photo-1575733135961-39fb82b34f86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            className="car"
            alt=""
          />
        </FadeInSection>
        <FadeInSection>
          <img
            src="https://images.unsplash.com/photo-1554744512-5a8ef212982d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            className="car"
            alt=""
          />
          <div class="centered">Centered</div>
        </FadeInSection>
        <FadeInSection>
          <img
            src="https://images.unsplash.com/photo-1571127236794-81c0bbfe1ce3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
            className="car"
            alt=""
          />
        </FadeInSection>
      </div>
    </div>
  );
}
