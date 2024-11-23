import { type EdgeProps } from "@xyflow/react";

export enum EdgePosition {
  Left,
  Right,
}

type SimpleEdgeDataProps = {
  sourceId: string;
  targetId: string;
};

export type SimpleEdgeProps = EdgeProps & {
  data: SimpleEdgeDataProps;
};
