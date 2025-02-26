<script setup lang="ts">
import { computed, type HTMLAttributes, ref, watch } from "vue";

import { UiInput } from "@/shared/ui/ui-input";
import { useFieldVisited } from "@/shared/composables/useFieldVisited.ts";
import { type Account, useAccountsStore } from "@/entities/account";

import { validateAccount } from "../lib/validateAccount.ts";

defineOptions({ name: "EditAccountLogin" });
const props = defineProps<{
  id: Account["id"];
  login: Account["login"];
  class?: HTMLAttributes["class"];
}>();

const login = ref(props.login);

watch(
  () => props.login,
  (propsLogin) => {
    login.value = propsLogin;
  },
  { immediate: true },
);

const { isFieldVisited, setFieldVisited } = useFieldVisited();

const validationErrorMessage = computed(() => {
  if (!isFieldVisited.value) return "";

  return validateAccount.login(login);
});

const { editAccount } = useAccountsStore();

const handleBlur = () => {
  setFieldVisited();

  if (Boolean(validationErrorMessage.value)) {
    return;
  }

  editAccount({ id: props.id, fieldName: "login", value: login.value });
};
</script>

<template>
  <ui-input
    v-model="login"
    @blur="handleBlur"
    @input="setFieldVisited"
    :error="Boolean(validationErrorMessage)"
    :error-message="validationErrorMessage"
    :class="$props.class"
    label="Логин"
  />
</template>

<style scoped></style>
