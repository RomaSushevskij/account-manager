<script setup lang="ts">
import type { Option } from "vue3-select-component";

import { type Account, useAccountsStore } from "@/entities/account";
import { UiSelect } from "@/shared/ui/ui-select";

defineOptions({ name: "EditAccountType" });

const props = defineProps<{ id: Account["id"]; type: Account["type"] }>();

const { editAccount } = useAccountsStore();

const accountTypeOptions: Option<Account["type"]>[] = [
  { value: "local", label: "Локальная" },
  { value: "ldap", label: "LDAP" },
];

const handleUpdateType = (type: Account["type"] | Account["type"][]) => {
  if (Array.isArray(type)) {
    return;
  }

  editAccount({ id: props.id, fieldName: "type", value: type });

  if (type === "ldap") {
    editAccount({ id: props.id, fieldName: "password", value: null });
  }
};
</script>

<template>
  <ui-select
    :model-value="type"
    @update:model-value="handleUpdateType"
    :options="accountTypeOptions"
    label="Тип записи"
    close-on-select
  />
</template>

<style scoped></style>
