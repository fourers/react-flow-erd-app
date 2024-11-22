import type { Edge, EdgeTypes } from "@xyflow/react";

export const initialEdges: Edge[] = [
  {
    id: "ceo",
    source: "cl",
    sourceHandle: "cl.id-right",
    target: "co",
    targetHandle: "co.ceo-left",
    type: "smoothstep",
  },
];

export const edgeTypes = {
  // Add your custom edge types here!
} satisfies EdgeTypes;
