import React, { Component } from "react";
import { Link } from "react-router-dom";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/SingleColorPalette";

class SingleColorPalette extends Component {
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
    const { colorId, palette, classes } = this.props;
    const { format } = this.state;
    const colorBoxes = this._shades.map((color) => (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color[format]}
        paletteId={palette.id}
        colorId={colorId}
        showingFullPalette={false}
      />
    ));
    return (
      <div className={classes.palette}>
        <Navbar changeFormat={this.changeFormat} showingAllColors={false} />
        <div className={classes.paletteColors}>
          {colorBoxes}
          <div className={classes.goBack}>
            <Link to={`/palette/${palette.id}`}>Go back</Link>
          </div>
        </div>
        <PaletteFooter
          paletteName={palette.paletteName}
          emoji={palette.emoji}
        />
      </div>
    );
  }
}

export default withStyles(styles)(SingleColorPalette);
