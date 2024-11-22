import { Handle, Position } from "@xyflow/react";

type FieldRowProps = {
  id: string;
  key: string;
  label: string;
};

export function FieldRow({ id, key, label }: FieldRowProps) {
  return (
    <div key={key} style={{ position: "relative" }}>
      <div>{label}</div>
      <Handle type="target" position={Position.Left} id={`${id}-left`} />
      <Handle type="target" position={Position.Right} id={`${id}-right`} />
    </div>
  );
}
