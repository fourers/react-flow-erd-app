import { type NodeProps } from "@xyflow/react";

import { type ClassNode } from "./types";
import { FieldRow } from "./FieldRow";

export function ClassNode({ data }: NodeProps<ClassNode>) {
  return (
    <div className="react-flow__node-default">
      {<h3>{data.label}</h3>}
      <hr />
      {data.fields.map((field) => (
        <FieldRow
          id={field.id}
          key={field.id}
          label={field.label}
          type={field.type}
        />
      ))}
    </div>
  );
}
