import { type NodeProps } from "@xyflow/react";

import { type ClassNode } from "./types";
import { Field } from "./Field";

export function ClassNode({ data }: NodeProps<ClassNode>) {
  return (
    <div className="react-flow__node-default">
      {<h3>{data.label}</h3>}
      {data.fields.map((field, i) => (
        <Field
          id={field.id}
          key={field.id}
          label={field.label}
          isFirst={i === 0}
        />
      ))}
    </div>
  );
}
