import type { Account } from "@/entities/account";

export const convertAccountLabel = {
  separator: ";",
  toArray(label: string): Account["label"] {
    return label
      .trim()
      .split(convertAccountLabel.separator)
      .map((labelItem) => ({ text: labelItem }))
      .filter(({ text }) => text.trim().length > 0);
  },
  toString(label: Account["label"]): string {
    return label.map(({ text }) => text).join(convertAccountLabel.separator);
  },
};
