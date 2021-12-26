import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/PaletteListStyles";
import {
  CSSTransition,
  Transition,
  TransitionGroup,
} from "react-transition-group";

class PaletteList extends Component {
  constructor(props) {
    super(props);
    this.goToPalette = this.goToPalette.bind(this);
  }
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }
  render() {
    const { palettes, deletePalette, classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1 className={classes.title}>React Colors</h1>
            <Link to="/palette/new">Create new palette</Link>
          </nav>

          <TransitionGroup className={classes.palettes}>
            {palettes.map((palette) => (
              <CSSTransition key={palette.id} classNames="fade" timeout={500}>
                <MiniPalette
                  key={palette.id}
                  handleDelete={() => deletePalette(palette.id)}
                  {...palette}
                  handleClick={() => this.goToPalette(palette.id)}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
