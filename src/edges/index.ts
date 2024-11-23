import type { Edge, EdgeTypes } from "@xyflow/react";

import { SimpleEdge } from "./SimpleEdge";

export const initialEdges: Edge[] = [
  {
    id: "ceo",
    source: "cl",
    target: "co",
    type: "simple",
    data: {
      sourceId: "cl.id",
      targetId: "co.ceo",
    },
  },
];

export const edgeTypes = {
  simple: SimpleEdge,
} satisfies EdgeTypes;
