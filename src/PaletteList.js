import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import MiniPallete from "./MiniPallete";

const styles = {
  root: {
    backgroundColor: "blue",
    height: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap"
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color: "white"
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3,30%)",
    gridGap: "5%"
  }
};

export class PaletteList extends Component {
  goToPallete = id => {
    console.log(id);
    this.props.history.push(`/palette/${id}`);
  };
  render() {
    const { palleteList, classes } = this.props;
    /*  const { paletteName } = this.props.palleteList; */
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Colors</h1>
          </nav>
          <div className={classes.palettes}>
            {palleteList.map(palette => {
              return (
                /*  <Link to={`/palette/${palette.id}`}> */
                <MiniPallete
                  {...palette}
                  key={palette.id}
                  handleClick={() => {
                    this.goToPallete(palette.id);
                  }}
                />
                /*  </Link> */
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
