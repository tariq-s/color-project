import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
export default class paletteList extends Component {
  render() {
    const { palettes } = this.props;
    return (
      <div>
        {palettes.map((palette) => (
          <Link key={palette.id} to={`palette/${palette.id}`}>
            <MiniPalette {...palette} />
          </Link>
        ))}
      </div>
    );
  }
}
