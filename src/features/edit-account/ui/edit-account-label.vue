<script setup lang="ts">
import { computed, ref, watch } from "vue";

import { type Account, useAccountsStore } from "@/entities/account";
import { UiTextarea } from "@/shared/ui/ui-textarea";
import { useFieldVisited } from "@/shared/composables/useFieldVisited.ts";

import { convertAccountLabel } from "../lib/prepareAccountLabel.ts";
import { validateAccount } from "../lib/validateAccount.ts";

defineOptions({ name: "EditAccountLabel" });
const props = defineProps<{ id: Account["id"]; label: Account["label"] }>();

const label = ref(convertAccountLabel.toString(props.label));

watch(
  () => props.label,
  (propsLabel) => {
    label.value = convertAccountLabel.toString(propsLabel);
  },
  { immediate: true },
);

const { isFieldVisited, setFieldVisited } = useFieldVisited();

const validationErrorMessage = computed(() => {
  if (!isFieldVisited.value) return "";

  return validateAccount.label(label);
});

const { editAccount } = useAccountsStore();

const handleBlur = () => {
  setFieldVisited();

  if (Boolean(validationErrorMessage.value)) {
    return;
  }

  const accountLabel: Account["label"] = convertAccountLabel.toArray(
    label.value,
  );

  editAccount({ id: props.id, fieldName: "label", value: accountLabel });
};
</script>

<template>
  <ui-textarea
    v-model="label"
    @blur="handleBlur"
    @input="setFieldVisited"
    :error="Boolean(validationErrorMessage)"
    :error-message="validationErrorMessage"
    label="Метки"
  />
</template>

<style scoped></style>
