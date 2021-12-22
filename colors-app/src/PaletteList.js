import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class paletteList extends Component {
  render() {
    const { palettes } = this.props;
    return (
      <div>
        {palettes.map((palette) => (
          <Link to={`palette/${palette.id}`}>
            <h3>{palette.paletteName}</h3>
          </Link>
        ))}
      </div>
    );
  }
}
