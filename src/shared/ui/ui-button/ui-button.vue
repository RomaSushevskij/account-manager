<script setup lang="ts">
import type { Props, Variant } from "./types.ts";

defineOptions({ name: "UiButton" });

withDefaults(defineProps<Props>(), {
  variant: "text",
  type: "button",
  disabled: undefined,
});

const variantClassesMapper: Record<Variant, string> = {
  outline: "outline",
  text: "text",
};
</script>

<template>
  <button class="button" :class="variantClassesMapper[variant]">
    <slot />
  </button>
</template>

<style scoped>
.button {
  background: var(--primary-bgc);
  border: none;
  cursor: pointer;
  transition: background 0.15s ease-in-out;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: var(--body2-font-size);
  line-height: var(--body2-line-height);
}

.outline {
  outline: 0.0625rem solid var(--border);
}

@media (hover: hover) {
  .button:hover {
    background: #f5f8fa;
  }
}

@media (hover: none) {
  .button:active {
    background: #f5f8fa;
  }
}
</style>
