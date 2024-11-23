import { getSmoothStepPath, Position, useInternalNode } from "@xyflow/react";

import { EdgePosition, type SimpleEdgeProps } from "./types.ts";
import { getEdgePosition, getHandleCoords } from "./utils.ts";

export function SimpleEdge({
  id,
  source,
  target,
  markerEnd,
  style,
  data,
}: SimpleEdgeProps) {
  const sourceNode = useInternalNode(source);
  const targetNode = useInternalNode(target);

  if (!sourceNode || !targetNode) {
    return null;
  }

  const edgePosition = getEdgePosition(sourceNode, targetNode);

  const sourcePos =
    edgePosition == EdgePosition.Left ? Position.Right : Position.Left;
  const [sx, sy] = getHandleCoords(
    sourceNode,
    data.sourceId,
    sourcePos,
    "source",
  );

  const targetPos =
    edgePosition == EdgePosition.Left ? Position.Left : Position.Right;
  const [tx, ty] = getHandleCoords(
    targetNode,
    data.targetId,
    targetPos,
    "target",
  );

  const [edgePath] = getSmoothStepPath({
    sourceX: sx,
    sourceY: sy,
    sourcePosition: sourcePos,
    targetPosition: targetPos,
    targetX: tx,
    targetY: ty,
    borderRadius: 0,
  });

  return (
    <path
      id={id}
      className="react-flow__edge-path"
      d={edgePath}
      strokeWidth={5}
      markerEnd={markerEnd}
      style={style}
    />
  );
}
