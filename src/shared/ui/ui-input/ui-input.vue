<script setup lang="ts">
import type { Props } from "./types.ts";

defineOptions({ name: "UiInput", inheritAttrs: false });

const props = withDefaults(defineProps<Props>(), {
  error: undefined,
  type: "text",
});

defineSlots<{ append(): any }>();

const modelValue = defineModel<string>();
</script>

<template>
  <div class="wrapper" :class="{ error: error }">
    <input class="input" v-model.trim="modelValue" v-bind="props" />
    <div class="append">
      <slot name="append" />
    </div>
  </div>
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

.append {
  display: flex;
  align-items: center;
}

.wrapper.error {
  border-color: tomato;
}
</style>
