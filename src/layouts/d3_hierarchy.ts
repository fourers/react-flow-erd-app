import { stratify, tree } from "d3-hierarchy";
import type { Edge, Node } from "@xyflow/react";

const g = tree();

export const getLayoutedElements = (nodes: Node[], edges: Edge[]) => {
  if (nodes.length === 0) return { nodes, edges };

  const firstNode = document.querySelector(`[data-id="${nodes[0].id}"]`);
  if (!firstNode) return { nodes, edges };

  const { width, height } = firstNode.getBoundingClientRect();
  const hierarchy = stratify()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .id((node: any) => node.id)
    .parentId(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (node: any) => edges.find((edge) => edge.target === node.id)?.source,
    );
  const root = hierarchy(nodes);
  // Reverse height and width to get horizontal layout
  const layout = g.nodeSize([height, width])(root);

  return {
    nodes: layout
      .descendants()
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .map((node: any) => ({
        ...node.data,
        // Reverse x and y to get horizontal layout
        position: { x: node.y, y: node.x },
      })),
    edges,
  };
};
