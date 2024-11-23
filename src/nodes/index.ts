import type { NodeTypes } from "@xyflow/react";

import { type ClassNode as ClassNodeType } from "./types";
import { ClassNode } from "./ClassNode";

export const initialNodes: ClassNodeType[] = [
  {
    id: "cl",
    type: "class",
    position: { x: -300, y: 0 },
    data: {
      label: "Client",
      id: "cl",
      fields: [
        { label: "Id", id: "cl.id", type: "source" },
        { label: "First Name", id: "cl.first_name", type: "source" },
        { label: "Last Name", id: "cl.last_name", type: "source" },
      ],
    },
  },
  {
    id: "co",
    type: "class",
    position: { x: 0, y: 0 },
    data: {
      label: "Company",
      id: "co",
      fields: [
        { label: "Id", id: "co.id", type: "target" },
        { label: "Name", id: "co.name", type: "target" },
        { label: "Category", id: "co.category", type: "target" },
        { label: "CEO", id: "co.ceo", type: "target" },
        { label: "Location", id: "co.location", type: "target" },
      ],
    },
  },
  {
    id: "lo",
    type: "class",
    position: { x: 300, y: 0 },
    data: {
      label: "Location",
      id: "lo",
      fields: [
        { label: "Id", id: "lo.id", type: "source" },
        { label: "Address", id: "lo.address", type: "source" },
        { label: "City", id: "lo.city", type: "source" },
        { label: "Country", id: "lo.country", type: "source" },
      ],
    },
  },
];

export const nodeTypes = {
  class: ClassNode,
} satisfies NodeTypes;
