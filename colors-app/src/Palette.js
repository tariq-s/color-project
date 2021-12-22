import React, { Component } from "react";
import "./Palette.css";
import ColorBox from "./ColorBox";
import { generatePalette } from "./colorHelpers";

export default class Palette extends Component {
  render() {
    console.log(generatePalette(this.props.palette));
    const colorBoxes = this.props.palette.colors.map((color) => (
      <ColorBox background={color.color} name={color.name} />
    ));
    return (
      <div className="palette">
        <div className="palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}
