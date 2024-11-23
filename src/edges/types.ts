import { Edge } from "@xyflow/react";

export enum EdgePosition {
  Left,
  Right,
}

export type HandleCoords = {
  x: number;
  y: number;
};

export type SimpleEdge = Edge<
  {
    sourceId: string;
    targetId: string;
  },
  "simple"
>;
