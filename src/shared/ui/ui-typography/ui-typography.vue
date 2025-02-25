<script setup lang="ts">
import type { Props, Variant } from "./types.ts";

defineOptions({ name: "UiTypography" });

withDefaults(defineProps<Props>(), { as: "p", variant: "body1" });

const variantClassesMapper: Record<Variant, string> = {
  h1: "h1",
  h2: "h2",
  body1: "body1",
  body2: "body2",
};
</script>

<template>
  <component :is="as" class="typography" :class="variantClassesMapper[variant]">
    <slot />
  </component>
</template>

<style scoped>
.typography {
  margin: 0;
  font-weight: 400;
}

.h1 {
  font-weight: var(--h1-font-weight);
  font-size: var(--h1-font-size);
  line-height: var(--h1-line-height);
}

.body1 {
  font-size: var(--body1-font-size);
  line-height: var(--body1-line-height);
}

.body2 {
  font-size: var(--body2-font-size);
  line-height: var(--body2-line-height);
}
</style>
