import { stratify, tree } from "d3-hierarchy";
import type { Edge, Node } from "@xyflow/react";

const g = tree();

const getLargestSize = (
  nodes: Node[],
): { width: number; height: number } | null => {
  let largestHeight = 0;
  let largestWidth = 0;
  for (let i = 0; i < nodes.length; i++) {
    const node = document.querySelector(`[data-id="${nodes[i].id}"]`);
    if (node) {
      const { width, height } = node.getBoundingClientRect();
      largestHeight = Math.max(largestHeight, height);
      largestWidth = Math.max(largestWidth, width);
    }
  }
  return { width: largestWidth, height: largestHeight };
};

export const getLayoutedElements = (nodes: Node[], edges: Edge[]) => {
  if (nodes.length === 0) return { nodes, edges };

  const largestSize = getLargestSize(nodes);
  if (!largestSize) return { nodes, edges };

  const hierarchy = stratify()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .id((node: any) => node.id)
    .parentId(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (node: any) => edges.find((edge) => edge.target === node.id)?.source,
    );
  const root = hierarchy(nodes);
  // Reverse height and width to get horizontal layout
  const layout = g.nodeSize([largestSize.height, largestSize.width])(root);

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
