import type { Node, NodeTypes } from "@xyflow/react";

import { ClassNode } from "./ClassNode";

export const initialNodes: Node[] = [
  {
    id: "cl",
    type: "class",
    position: { x: -300, y: -100 },
    data: {
      label: "Client",
      id: "cl",
      fields: [
        { label: "Id", id: "cl.id" },
        { label: "First Name", id: "cl.first_name" },
        { label: "Last Name", id: "cl.last_name" },
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
        { label: "Id", id: "co.id" },
        { label: "Name", id: "co.name" },
        { label: "Category", id: "co.category" },
        { label: "CEO", id: "co.ceo" },
        { label: "Location", id: "co.location" },
      ],
    },
  },
  {
    id: "lo",
    type: "class",
    position: { x: 300, y: 100 },
    data: {
      label: "Location",
      id: "lo",
      fields: [
        { label: "Id", id: "lo.id" },
        { label: "Address", id: "lo.address" },
        { label: "City", id: "lo.city" },
        { label: "Country", id: "lo.country" },
      ],
    },
  },
];

export const nodeTypes = {
  class: ClassNode,
} satisfies NodeTypes;
