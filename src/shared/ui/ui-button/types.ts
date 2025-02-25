export type Variant = "text" | "outline";

export type Props = {
  disabled?: boolean;
  name?: string;
  type?: "submit" | "reset" | "button";
  variant?: Variant;
};
