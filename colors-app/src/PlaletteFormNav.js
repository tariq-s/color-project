import React, { Component } from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import IconButton from "@material-ui/core/IconButton";

import Button from "@material-ui/core/Button";

import { Link } from "react-router-dom";
import { AppBar, CssBaseline, Toolbar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import PaletteMetaForm from "./PaletteMetaForm";
const drawerWidth = 400;
const styles = (theme) => ({
  root: {
    display: "flex",
  },
  hide: {
    display: "none",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "64px",
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  navBtns: {},
});

class PlaletteFormNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleSubmit, classes, open } = this.props;
    return (
      <div className={classes.root}>
        <AppBar
          color="default"
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.props.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Create A Palette
            </Typography>
          </Toolbar>
          <div className={classes.navBtns}>
            <PaletteMetaForm
              palettes={this.props.palettes}
              handleSubmit={handleSubmit}
            />
            <Link to="/">
              <Button variant="contained" color="secondary">
                GO BACK
              </Button>
            </Link>
          </div>
        </AppBar>
      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(PlaletteFormNav);
