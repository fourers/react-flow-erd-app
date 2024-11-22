import { Handle, Position } from "@xyflow/react";
import { FieldRowProps } from "./types";

export const FieldRow = ({ id, label, type }: FieldRowProps) => {
  return (
    <div style={{ position: "relative" }}>
      <div>{label}</div>
      <Handle type={type} position={Position.Left} id={`${id}-left`} />
      <Handle type={type} position={Position.Right} id={`${id}-right`} />
    </div>
  );
};
