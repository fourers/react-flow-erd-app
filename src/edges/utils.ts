import { InternalNode, Position } from "@xyflow/react";

import { EdgePosition, HandleCoords } from "./types";

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
): HandleCoords | null {
  const handleId = position == Position.Left ? `${id}-left` : `${id}-right`;
  const handle =
    type == "source"
      ? node.internals.handleBounds?.source?.find((h) => h.id === handleId)
      : node.internals.handleBounds?.target?.find((h) => h.id === handleId);
  if (!handle) {
    return null;
  }
  const x =
    position == Position.Left
      ? node.internals.positionAbsolute.x + handle.x
      : node.internals.positionAbsolute.x + handle.x + handle.width;
  const y = node.internals.positionAbsolute.y + handle.y + handle.height / 2;

  return { x: x, y: y };
}
