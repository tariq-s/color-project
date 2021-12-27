import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/MiniPaletteStyles";
import Delete from "@material-ui/icons/Delete";
class MiniPalette extends PureComponent {
  constructor(props) {
    super(props);
    this.removePalette = this.removePalette.bind(this);
  }
  removePalette(e) {
    e.stopPropagation();
    this.props.openDialog(this.props.id);
  }
  render() {
    const { classes, paletteName, emoji, colors, handleClick, id } = this.props;
    const miniColorBoxes = colors.map((color) => (
      <div
        key={color.name}
        className={classes.miniColor}
        style={{ backgroundColor: color.color }}
      />
    ));
    return (
      <div className={classes.root} onClick={() => handleClick(id)}>
        <div className={classes.delete}>
          <Delete
            className={classes.deleteIcon}
            style={{ transition: "all 0.3s ease-in-out" }}
            onClick={this.removePalette}
          />
        </div>
        <div className={classes.colors}>{miniColorBoxes}</div>
        <h5 className={classes.title}>
          {paletteName} <span className={classes.emoji}>{emoji}</span>
        </h5>
      </div>
    );
  }
}
export default withStyles(styles)(MiniPalette);
