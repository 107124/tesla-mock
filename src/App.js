import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "./home";
import ModelS from "./modelS";
import Model3 from "./model3";
import ModelX from "./modelX";
import ModelY from "./modelY";
import Footer from "./footer";
import FadeInSection from "./FadeInSection";

import "./styles.css";
import "./media-queries.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/models" component={ModelS} />
          <Route path="/model3" component={Model3} />
          <Route path="/modelx" component={ModelX} />
          <Route path="/modely" component={ModelY} />
        </Switch>
      </BrowserRouter>
      <FadeInSection>
        <Footer />
      </FadeInSection>
    </div>
  );
}
