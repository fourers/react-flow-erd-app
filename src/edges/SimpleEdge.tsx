import {
  type EdgeProps,
  getSmoothStepPath,
  Position,
  useInternalNode,
} from "@xyflow/react";

import { EdgePosition, type SimpleEdge } from "./types.ts";
import { getEdgePosition, getHandleCoords } from "./utils.ts";

export function SimpleEdge({
  id,
  source,
  target,
  markerEnd,
  style,
  data,
}: EdgeProps<SimpleEdge>) {
  const sourceNode = useInternalNode(source);
  const targetNode = useInternalNode(target);

  if (!sourceNode || !targetNode) {
    return null;
  }

  const edgePosition = getEdgePosition(sourceNode, targetNode);

  const sourcePos =
    edgePosition == EdgePosition.Left ? Position.Right : Position.Left;
  const sourceCoords = getHandleCoords(
    sourceNode,
    data?.sourceId ?? "",
    sourcePos,
    "source",
  );

  const targetPos =
    edgePosition == EdgePosition.Left ? Position.Left : Position.Right;
  const targetCoords = getHandleCoords(
    targetNode,
    data?.targetId ?? "",
    targetPos,
    "target",
  );

  if (!sourceCoords || !targetCoords) {
    return null;
  }

  const [edgePath] = getSmoothStepPath({
    sourceX: sourceCoords.x,
    sourceY: sourceCoords.y,
    sourcePosition: sourcePos,
    targetPosition: targetPos,
    targetX: targetCoords.x,
    targetY: targetCoords.y,
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
