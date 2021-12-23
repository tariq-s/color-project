import React, { Component } from "react";
import ColorBox from "./ColorBox";

export default class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this.gatherShades = this.gatherShades.bind(this);
    this._shades = this.gatherShades();
  }
  gatherShades() {
    const { palette, colorId } = this.props;
    const shades = Object.values(palette.colors).map((color) =>
      color.find((shade) => shade.id === colorId)
    );
    return shades.slice(1);
  }
  render() {
    const { colorId, paletteId } = this.props;
    const colorBoxes = this._shades.map((color) => (
      <ColorBox
        key={color.id}
        name={color.name}
        background={color.hex}
        paletteId={paletteId}
        colorId={colorId}
        showLink={false}
      />
    ));
    return (
      <div className="palette">
        <div className="palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}
