import React, { Component } from "react";
import "rc-slider/assets/index.css";
import "./Palette.css";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";

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
        <Navbar level={level} changeLevel={this.changeLevel} />
        <div className="palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}
