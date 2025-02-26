import { defineStore } from "pinia";
import { reactive, watch } from "vue";
import { nanoid } from "nanoid";
import { useToast } from "vue-toast-notification";

import { useThrottleFn } from "@/shared/composables/useThrottleFn.ts";

import type { Account } from "./types.ts";
import { accountLocalStorageManager } from "../lib/accountLocalStorageManager.ts";

export const useAccountsStore = defineStore("accounts", () => {
  const accounts = reactive<Account[]>(
    accountLocalStorageManager.getData() ?? [],
  );

  const toast = useToast();

  const addAccount = () => {
    accounts.push({
      id: nanoid(),
      login: "",
      password: "",
      type: "local",
      label: [],
    });

    toast.open({ message: "Учетная запись добавлена" });
  };

  const deleteAccount = (id: Account["id"]) => {
    const accountItemIndex = accounts.findIndex((account) => account.id === id);

    if (accountItemIndex >= 0) {
      accounts.splice(accountItemIndex, 1);
      toast.open({ message: "Учетная запись удалена" });
    }
  };

  const editedAccountToast = useThrottleFn(
    () => toast.open({ message: "Учетная запись изменена" }),
    100,
  );

  const editAccount = <T extends keyof Account>({
    id,
    fieldName,
    value,
  }: {
    id: Account["id"];
    fieldName: T;
    value: Account[T];
  }) => {
    const account = accounts.find((account) => account.id === id);

    if (account) {
      account[fieldName] = value;
      editedAccountToast();
    }
  };

  watch(
    accounts,
    (accounts) => {
      accountLocalStorageManager.setData(accounts);
    },
    { deep: true, immediate: true },
  );

  return { accounts, addAccount, deleteAccount, editAccount };
});
