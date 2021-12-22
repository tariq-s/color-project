import React, { Component } from "react";
import "rc-slider/assets/index.css";
import "./Palette.css";
import ColorBox from "./ColorBox";

import Slider from "rc-slider";

export default class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500 };
    this.changeLevel = this.changeLevel.bind(this);
  }
  changeLevel(level) {
    this.setState({ level });
  }
  render() {
    const { level } = this.state;
    const { colors } = this.props.palette;
    const colorBoxes = colors[level].map((color) => (
      <ColorBox background={color.rgb} name={color.name} />
    ));
    return (
      <div className="palette">
        <div className="slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onChange={this.changeLevel}
          />
        </div>

        <div className="palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}
