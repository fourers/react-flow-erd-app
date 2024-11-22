import { Handle, Position } from "@xyflow/react";
import { FieldProps } from "./types";
import { CSSProperties } from "react";

export const Field = ({ id, label, type, isFirst }: FieldProps) => {
  let style: CSSProperties = {
    position: "relative",
    borderBottomColor: "gray",
    borderBottomStyle: "solid",
    borderBottomWidth: "1px",
    paddingTop: "5px",
    paddingBottom: "5px",
    marginLeft: "-10px",
    marginRight: "-10px",
  };
  if (isFirst) {
    style = {
      ...style,
      borderTopColor: "gray",
      borderTopStyle: "solid",
      borderTopWidth: "1px",
    };
  }
  return (
    <div style={style}>
      <div>{label}</div>
      <Handle
        type={type}
        position={Position.Left}
        id={`${id}-left`}
        style={{ left: "3px", visibility: "hidden" }}
      />
      <Handle
        type={type}
        position={Position.Right}
        id={`${id}-right`}
        style={{ right: "3px", visibility: "hidden" }}
      />
    </div>
  );
};
