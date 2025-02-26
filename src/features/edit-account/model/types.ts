import type { Account } from "@/entities/account";

export type AccountForm = {
  login: string;
  password: string;
  type: Account["type"];
  label: string;
};
