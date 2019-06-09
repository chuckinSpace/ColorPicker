import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import seedColors from "./seedColors";
import { generatePalette } from "./ColorHelpers";

export class App extends Component {
  findPalette = id => {
    return seedColors.find(palette => {
      return palette.id === id;
    });
  };
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={routerProps => (
            <PaletteList palleteList={seedColors} {...routerProps}>
              Palette list
            </PaletteList>
          )}
        />
        <Route
          exact
          path="/palette/:id"
          render={routerProps => (
            <Palette
              palette={generatePalette(
                this.findPalette(routerProps.match.params.id)
              )}
            />
          )}
        />
        <Redirect to="/" />
      </Switch>
      /* <div>
      <Palette palette={generatePalette(seedColors[4])} />
    </div> */
    );
  }
}
export default App;
