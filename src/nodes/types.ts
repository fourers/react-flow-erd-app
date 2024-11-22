import type { Node, BuiltInNode } from "@xyflow/react";

export type PositionLoggerNode = Node<{ label: string }, "position-logger">;

type ClassField = {
  id: string;
  label: string;
};

export type ClassNode = Node<
  { label: string; fields: ClassField[]; id: string },
  "class"
>;

export type AppNode = BuiltInNode | PositionLoggerNode | ClassNode;
