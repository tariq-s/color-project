import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import DraggableColorBox from "./DraggableColorBox";

const DraggableColorList = SortableContainer(({ colors, deleteColor }) => {
  return (
    <div style={{ height: "100%" }}>
      {colors.map((color, idx) => (
        <DraggableColorBox
          key={color.name}
          index={idx}
          color={color.color}
          name={color.name}
          deleteColor={() => deleteColor(color.name)}
        />
      ))}
    </div>
  );
});
export default DraggableColorList;
