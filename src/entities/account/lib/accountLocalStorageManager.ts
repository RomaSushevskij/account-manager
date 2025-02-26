import { LocalStorageManager } from "@/shared/lib/localStorageManager.ts";

import type { Account } from "../model/types";

export const accountLocalStorageManager = new LocalStorageManager<Account[]>(
  "accounts",
);
