import React, { Component } from "react";
import Pallete from "./Palette";
import seedColors from "./seedColor";
import { generatePalette } from "./colorHelpers";
export default class App extends Component {
  render() {
    return (
      <div>
        <Pallete palette={generatePalette(seedColors[1])} />
      </div>
    );
  }
}
