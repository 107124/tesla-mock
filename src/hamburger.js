import React from "react";

export default class Hamburger extends React.Component {
  constructor() {
    super();
  }
  //this.stuff = this.stuff.bind(this);
  render() {
    return (
      <nav role="navigation">
        <div className="menuToggle">
          <input type="checkbox" />

          <span />
          <span />
          <span />

          <ul className="menu">
            <button className="letter-button">MODEL S</button>
            <button className="letter-button">MODEL 3</button>
            <button className="letter-button">MODEL X</button>
            <button className="letter-button">MODEL Y</button>
          </ul>
        </div>
      </nav>
    );
  }
}
