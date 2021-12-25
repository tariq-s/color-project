import React from "react";
import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import { SortableElement } from "react-sortable-hoc";

import styles from "./styles/DraggableColorBoxStyles";

const DraggableColorBox = SortableElement(
  ({ color, name, deleteColor, classes }) => {
    return (
      <div className={classes.root} style={{ backgroundColor: color }}>
        <div className={classes.boxContent}>
          <span>{name}</span>
          <span>
            <DeleteIcon className={classes.deleteIcon} onClick={deleteColor} />
          </span>
        </div>
      </div>
    );
  }
);

export default withStyles(styles)(DraggableColorBox);
