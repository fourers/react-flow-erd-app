import { InternalNode, Position } from "@xyflow/react";

import { EdgePosition } from "./types";

export function getEdgePosition(
  nodeSource: InternalNode,
  nodeTarget: InternalNode,
): EdgePosition {
  const centerSource = getNodeCenter(nodeSource);
  const centerTarget = getNodeCenter(nodeTarget);
  return centerSource.x < centerTarget.x
    ? EdgePosition.Left
    : EdgePosition.Right;
}

function getNodeCenter(node: InternalNode) {
  return {
    x: node.internals.positionAbsolute.x + (node.measured.width ?? 0) / 2,
    y: node.internals.positionAbsolute.y + (node.measured.height ?? 0) / 2,
  };
}

export function getHandleCoords(
  node: InternalNode,
  id: string,
  position: Position,
  type: "source" | "target",
): [number, number] {
  const handleId = position == Position.Left ? `${id}-left` : `${id}-right`;
  const handle =
    type == "source"
      ? node.internals.handleBounds?.source?.find((h) => h.id === handleId)
      : node.internals.handleBounds?.target?.find((h) => h.id === handleId);
  // Will default to top-left corner of node if corresponding handle cannot be found
  const x =
    position == Position.Left
      ? node.internals.positionAbsolute.x + (handle?.x ?? 0)
      : node.internals.positionAbsolute.x +
        (handle?.x ?? 0) +
        (handle?.width ?? 0);
  const y =
    node.internals.positionAbsolute.y +
    (handle?.y ?? 0) +
    (handle?.height ?? 0) / 2;

  return [x, y];
}
