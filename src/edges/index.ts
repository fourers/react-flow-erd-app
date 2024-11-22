import type { Edge, EdgeTypes } from "@xyflow/react";

export const initialEdges: Edge[] = [
  // { id: "a->c", source: "a", target: "c", animated: true },
  // { id: "b->d", source: "b", target: "d" },
  // { id: "c->d", source: "c", target: "d", animated: true },
  { id: "line1", source: "a", target: "b", targetHandle: "b.first_name-left" },
  // { id: "line1", source: "c", target: "b", targetHandle: "b-1-l" },
];

export const edgeTypes = {
  // Add your custom edge types here!
} satisfies EdgeTypes;
