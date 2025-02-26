import { type InputTypeHTMLAttribute } from "@vue/runtime-dom";

export type Props = {
  error?: boolean;
  errorMessage?: string;
  type?: InputTypeHTMLAttribute;
  autocomplete?: string;
  name?: string;
  label?: string;
};
