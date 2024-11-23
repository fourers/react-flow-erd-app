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
  {
    id: "company_location",
    source: "lo",
    target: "co",
    type: "simple",
    data: {
      sourceId: "lo.id",
      targetId: "co.location",
    },
  },
];

export const edgeTypes = {
  simple: SimpleEdge,
} satisfies EdgeTypes;
