import React, { Component } from "react";
import Pallete from "./Palette";
import seedColors from "./seedColor";
export default class App extends Component {
  render() {
    return (
      <div>
        <Pallete palette={seedColors[1]} />
      </div>
    );
  }
}
