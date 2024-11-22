import type { NodeTypes } from "@xyflow/react";

import { PositionLoggerNode } from "./PositionLoggerNode";
import { AppNode } from "./types";
import { ClassNode } from "./ClassNode";

export const initialNodes: AppNode[] = [
  { id: "a", type: "input", position: { x: 0, y: 0 }, data: { label: "wire" } },
  {
    id: "b",
    type: "class",
    position: { x: -100, y: 100 },
    data: {
      label: "Hello",
      id: "b",
      fields: [
        { label: "First Name", id: "b.first_name" },
        { label: "Last Name", id: "b.last_name" },
      ],
    },
  },
  { id: "c", position: { x: 100, y: 100 }, data: { label: "your ideas" } },
  {
    id: "d",
    type: "output",
    position: { x: 0, y: 200 },
    data: { label: "with React Flow" },
  },
];

export const nodeTypes = {
  "position-logger": PositionLoggerNode,
  // Add any of your custom nodes here!
  class: ClassNode,
} satisfies NodeTypes;
