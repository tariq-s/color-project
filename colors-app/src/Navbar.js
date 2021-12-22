import React, { Component } from "react";
import "./Navbar.css";
import Slider from "rc-slider";
export default class Navbar extends Component {
  render() {
    const { level, changeLevel } = this.props;
    return (
      <nav className="navbar">
        <div className="logo">
          <a href="#">colorpicker</a>
        </div>
        <div className="slider-container">
          <span>Level: {level}</span>
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onChange={changeLevel}
            />
          </div>
        </div>
      </nav>
    );
  }
}
