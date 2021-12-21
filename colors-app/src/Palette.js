import React, { Component } from "react";
import "./Palette.css";
import ColorBox from "./ColorBox";

export default class Palette extends Component {
  render() {
    const colorBoxes = this.props.palette.colors.map((color) => (
      <ColorBox background={color.color} name={color.name} />
    ));
    console.log(colorBoxes);
    return (
      <div className="Palette">
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}
