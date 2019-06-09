import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "rc-slider";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputLabel from "@material-ui/core/InputLabel";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import "rc-slider/assets/index.css";
import "./NavBar.css";

export class NavBar extends Component {
  state = {
    format: "hex",
    open: false
  };

  handleChange = name => event => {
    this.setState(
      {
        [name]: event.target.value
      },
      () => {
        this.props.handleFormatChange(this.state.format);
      }
    );
    this.openSnackBar();
  };

  openSnackBar = () => {
    this.setState({ open: true });
  };

  handleClose = (event, reason) => {
    this.setState({ open: false });
  };

  render() {
    const { handleSliderChange, level } = this.props;
    const { format, open } = this.state;
    return (
      <header className="NavBar">
        <div className="logo">
          <Link to="/">reactColorPicker</Link>
        </div>
        <div className="slider-container">
          <span>Level: {level}</span>
          <div className="slider">
            <Slider
              min={100}
              max={900}
              onAfterChange={handleSliderChange}
              step={100}
              defaultValue={level}
            />
          </div>
        </div>
        <div className="select-container">
          <InputLabel className="Navbar-format-text">Format</InputLabel>
          <NativeSelect
            className="Navbar-format-options"
            value={format}
            onChange={this.handleChange("format")}
          >
            <option value="hex">HEX - #ffffff</option>
            <option value="rgb">RGB - rgb(255,255,255)</option>
            <option value="rgba">RGBA - rgba(255,255,255,1.0)</option>
          </NativeSelect>
        </div>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          open={open}
          onClose={this.handleClose}
          autoHideDuration={2000}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          message={
            <span id="message-id">
              Format Changed to {format.toUpperCase()}!
            </span>
          }
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </header>
    );
  }
}

export default NavBar;
