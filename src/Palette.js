import React, { Component } from "react";
import ColorBox from "./ColorBox";

import "./Palette.css";
import NavBar from "./NavBar";

export class Palette extends Component {
  state = {
    level: 500,
    format: "hex"
  };

  handleFormatChange = format => {
    this.setState({ format });
  };
  handleSliderChange = level => {
    this.setState({ level });
  };

  render() {
    const { colors, emoji, paletteName } = this.props.palette;

    const { level, format } = this.state;

    const colorBox = colors[level].map((color, i) => (
      <ColorBox key={color.id} background={color[format]} name={color.name} />
    ));
    return (
      <div className="Palette">
        <NavBar
          handleSliderChange={this.handleSliderChange}
          handleFormatChange={this.handleFormatChange}
          level={level}
        />
        <div className="Palette-color">{colorBox}</div>
        <footer className="Palette-footer">
          <span className="emoji">{emoji}</span>
          {paletteName}
        </footer>
      </div>
    );
  }
}

export default Palette;
