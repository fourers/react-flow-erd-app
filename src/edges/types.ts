import { type EdgeProps } from "@xyflow/react";

export enum EdgePosition {
  Left,
  Right,
}

export type HandleCoords = {
  x: number;
  y: number;
};

type SimpleEdgeDataProps = {
  sourceId: string;
  targetId: string;
};

export type SimpleEdgeProps = EdgeProps & {
  data: SimpleEdgeDataProps;
};
