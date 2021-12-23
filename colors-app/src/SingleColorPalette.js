import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";

export default class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this.state = { format: "hex" };
    this.gatherShades = this.gatherShades.bind(this);
    this._shades = this.gatherShades();
    this.changeFormat = this.changeFormat.bind(this);
  }
  changeFormat(format) {
    this.setState({ format });
  }
  gatherShades() {
    const { palette, colorId } = this.props;
    const shades = Object.values(palette.colors).map((color) =>
      color.find((shade) => shade.id === colorId)
    );
    return shades.slice(1);
  }
  render() {
    const { colorId, palette } = this.props;
    const { format } = this.state;
    const colorBoxes = this._shades.map((color) => (
      <ColorBox
        key={color.id}
        name={color.name}
        background={color[format]}
        paletteId={palette.id}
        colorId={colorId}
        showLink={false}
      />
    ));
    return (
      <div className="palette">
        <Navbar changeFormat={this.changeFormat} showingAllColors={false} />
        <div className="palette-colors">{colorBoxes}</div>
        <PaletteFooter
          paletteName={palette.paletteName}
          emoji={palette.emoji}
        />
      </div>
    );
  }
}
