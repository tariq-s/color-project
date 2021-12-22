import React, { Component } from "react";
import Pallete from "./Palette";
import seedColors from "./seedColor";
import { generatePalette } from "./colorHelpers";
import { Route, Switch } from "react-router-dom";
export default class App extends Component {
  findPalette(id) {
    return seedColors.find((palette) => palette.id === id);
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <p>Test home</p>}></Route>
        <Route
          exact
          path="/palette/:id"
          render={(routeProps) => (
            <Pallete
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
      </Switch>
      // <div>
      //   <Pallete palette={generatePalette(seedColors[1])} />
      // </div>
    );
  }
}
