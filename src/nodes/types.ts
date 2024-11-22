import type { HandleType, Node } from "@xyflow/react";

export type FieldRowProps = {
  id: string;
  key: string;
  label: string;
  type: HandleType;
};

type ClassField = {
  id: string;
  label: string;
  type: HandleType;
};

export type ClassNode = Node<
  { label: string; fields: ClassField[]; id: string },
  "class"
>;
