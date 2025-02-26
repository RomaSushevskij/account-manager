import { type TextareaHTMLAttributes } from "@vue/runtime-dom";

export type Props = {
  error?: boolean;
  errorMessage?: string;
  type?: TextareaHTMLAttributes;
  label?: string;
};
