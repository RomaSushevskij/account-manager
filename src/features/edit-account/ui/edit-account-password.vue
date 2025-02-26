<script setup lang="ts">
import { computed, ref, watch } from "vue";

import { UiInputPassword } from "@/shared/ui/ui-input";
import { useFieldVisited } from "@/shared/composables/useFieldVisited.ts";
import { type Account, useAccountsStore } from "@/entities/account";

import { validateAccount } from "../lib/validateAccount.ts";

defineOptions({ name: "EditAccountPassword" });

const props = defineProps<{
  id: Account["id"];
  password: Account["password"];
}>();

const password = ref(props.password ?? "");

watch(
  () => props.password,
  (propsPassword) => {
    password.value = propsPassword ?? "";
  },
  { immediate: true },
);

const { isFieldVisited, setFieldVisited } = useFieldVisited();

const validationErrorMessage = computed(() => {
  if (!isFieldVisited.value) return "";

  return validateAccount.password(password);
});

const { editAccount } = useAccountsStore();

const handleBlur = () => {
  setFieldVisited();

  if (Boolean(validationErrorMessage.value)) {
    return;
  }

  editAccount({ id: props.id, fieldName: "password", value: password.value });
};
</script>

<template>
  <ui-input-password
    v-model="password"
    @blur="handleBlur"
    @input="setFieldVisited"
    :error="Boolean(validationErrorMessage)"
    :error-message="validationErrorMessage"
    name="custom-password"
    autocomplete="new-password"
    type="password"
    label="Пароль"
  />
</template>

<style scoped></style>
