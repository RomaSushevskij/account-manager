<script setup lang="ts">
import type { Props } from "./types.ts";

defineOptions({ name: "UiCard" });

withDefaults(defineProps<Props>(), { as: "div" });
</script>

<template>
  <component :is="as" class="card">
    <slot />
  </component>
</template>

<style scoped>
.card {
  background: var(--card-bgc);
  border-radius: var(--rounded);
  padding: 0.5rem 1rem;
  box-shadow:
    rgba(0, 0, 0, 0.1) 0rem 0.0625rem 0.1875rem 0rem,
    rgba(0, 0, 0, 0.06) 0rem 0.0625rem 0.125rem 0rem;
}
</style>
