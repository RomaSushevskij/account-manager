<script setup lang="ts">
import UiCard from "@/shared/ui/ui-card/ui-card.vue";

defineOptions({ name: "AccountCard" });

defineSlots<{
  label(): any;
  type(): any;
  login(): any;
  password(): any;
  deleteAccount(): void;
}>();
</script>

<template>
  <ui-card class="wrapper">
    <slot name="label" />
    <slot name="type" />
    <slot name="login" />
    <slot name="password" />

    <slot name="deleteAccount" />
  </ui-card>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: var(--md);
}
</style>
