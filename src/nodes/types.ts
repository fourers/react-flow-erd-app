import type { Node } from "@xyflow/react";

export type FieldProps = {
  id: string;
  key: string;
  label: string;
  isFirst: boolean;
};

type ClassField = {
  id: string;
  label: string;
};

export type ClassNode = Node<
  { label: string; fields: ClassField[]; id: string },
  "class"
>;
