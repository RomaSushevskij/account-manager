<script setup lang="ts">
import UiCard from "@/shared/ui/ui-card/ui-card.vue";
import QuestionIcon from "@/shared/ui/icons/question-icon.vue";
import { UiTypography } from "@/shared/ui/ui-typography";

defineOptions({ name: "AccountLabelHint" });
</script>

<template>
  <ui-card class="wrapper">
    <question-icon class="icon" />
    <ui-typography variant="body2">
      Для указания нескольких меток для одной пары логин/пароль используйте
      разделитель ";"
    </ui-typography>
  </ui-card>
</template>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  column-gap: var(--md);
  max-width: max-content;
}

.icon {
  width: 1.5rem;
  min-width: 1.5rem;
  height: 1.5rem;
  min-height: 1.5rem;
}
</style>
