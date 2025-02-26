<script setup lang="ts">
import { UiTypography } from "@/shared/ui/ui-typography";

import type { Props } from "./types.ts";

defineOptions({ name: "UiInput", inheritAttrs: false });

const props = withDefaults(defineProps<Props>(), {
  error: undefined,
  errorMessage: undefined,
  type: "text",
  label: undefined,
});

defineSlots<{ append(): any }>();

defineEmits<{
  (eventName: "blur", event: FocusEvent): void;
  (eventName: "input"): void;
}>();

const modelValue = defineModel<string>();
</script>

<template>
  <label>
    <ui-typography class="label" v-if="label" variant="body2">
      {{ label }}
    </ui-typography>
    <div class="wrapper" :class="{ error: error }">
      <input
        class="input"
        v-model.trim="modelValue"
        v-bind="props"
        @input="$emit('input')"
        @blur="$emit('blur', $event)"
      />
      <div class="append">
        <slot name="append" />
      </div>
    </div>
    <ui-typography variant="body2" class="error-message" v-if="errorMessage">
      {{ errorMessage }}
    </ui-typography>
  </label>
</template>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  background: var(--card-bgc);
  border: 0.0625rem solid var(--border);
  border-radius: var(--rounded);
  transition: border 0.15s ease-in-out;
  padding-inline-end: 1rem;
}

.wrapper:focus-within {
  border-color: var(--teal-600);
}

.input {
  width: 100%;
  border: none;
  background: inherit;
  border-radius: inherit;
  outline: 0;
  padding: 0.5rem 1rem;
  color: var(--text);
}

.label {
  margin-block-end: var(--xs);
}

.append {
  display: flex;
  align-items: center;
}

.wrapper.error {
  border-color: var(--red-500);
}

.error-message {
  color: var(--red-500);
  margin-block-start: var(--xs);
}
</style>
