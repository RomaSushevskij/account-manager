import type { NativeElements } from "vue";

export type Variant = "h1" | "h2" | "body1" | "body2";

export type Props = {
  as?: keyof NativeElements;
  variant?: Variant;
};
