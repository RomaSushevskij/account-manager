<script setup lang="ts">
import { onMounted, ref } from "vue";

import type { Props } from "./types.ts";
import { UiTypography } from "@/shared/ui/ui-typography";

defineOptions({ name: "UiTextarea" });

const props = withDefaults(defineProps<Props>(), {
  error: undefined,
  errorMessage: undefined,
  label: undefined,
});

const emits = defineEmits<{
  (eventName: "blur", event: FocusEvent): void;
  (eventName: "input"): void;
}>();

defineSlots<{ append(): any }>();

const modelValue = defineModel<string>();

const textarea = ref<HTMLTextAreaElement | null>(null);

const resize = () => {
  if (!textarea.value) {
    return;
  }
  textarea.value.style.height = "2.15rem";
  textarea.value.style.height = `${textarea.value.scrollHeight / 16}rem`;
};

onMounted(() => {
  resize();
});

const handleInput = () => {
  emits("input");
  resize();
};
</script>

<template>
  <label>
    <ui-typography class="label" v-if="label" variant="body2">
      {{ label }}
    </ui-typography>
    <div class="wrapper" :class="{ error: error }">
      <textarea
        class="textarea"
        v-model.trim="modelValue"
        v-bind="props"
        ref="textarea"
        @blur="$emit('blur', $event)"
        @input="handleInput"
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

.textarea {
  width: 100%;
  overflow: hidden;
  border: none;
  background: inherit;
  border-radius: inherit;
  outline: 0;
  padding: 0.5rem 1rem;
  resize: none;
  height: 2.15rem;
  color: var(--text);
}

.append {
  display: flex;
  align-items: center;
}

.label {
  margin-block-end: var(--xs);
}

.wrapper.error {
  border-color: var(--red-500);
}

.error-message {
  color: var(--red-500);
  margin-block-start: var(--xs);
}
</style>
