import React, { Component } from "react";
import "./Navbar.css";
import Slider from "rc-slider";
import { MenuItem, Select } from "@material-ui/core";
export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: "hex" };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ format: e.target.value });
    this.props.changeFormat(e.target.value);
  }
  render() {
    const { level, changeLevel, changeFormat } = this.props;
    const { format } = this.state;
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
        <div className="select-container">
          <Select value={format} onChange={this.handleChange}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgb(255, 255, 255, 1.0)</MenuItem>
          </Select>
        </div>
      </nav>
    );
  }
}
