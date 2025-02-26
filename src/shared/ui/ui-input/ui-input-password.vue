<script setup lang="ts">
import { computed, type InputTypeHTMLAttribute, ref } from "vue";

import { UiInput } from "@/shared/ui/ui-input";
import EyeIcon from "@/shared/ui/icons/eye-icon.vue";
import EyeOffIcon from "@/shared/ui/icons/eye-off-icon.vue";

import type { Props } from "./types.ts";

defineOptions({ name: "UiInputPassword" });

const props = withDefaults(defineProps<Props>(), {
  error: undefined,
  type: "password",
});

const isVisible = ref(false);

const inputType = computed<InputTypeHTMLAttribute>(() => {
  if (isVisible.value) {
    return "text";
  }

  return "password";
});

const handleVisibilityBtnClick = () => {
  isVisible.value = !isVisible.value;
};

const modelValue = defineModel<string>();
</script>

<template>
  <ui-input v-model.trim="modelValue" v-bind="props" :type="inputType">
    <template #append>
      <button class="visibility-btn" @click="handleVisibilityBtnClick">
        <eye-icon class="icon" v-if="isVisible" />
        <eye-off-icon class="icon" v-else />
      </button>
    </template>
  </ui-input>
</template>

<style scoped>
.visibility-btn {
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
}

.icon {
  width: 100%;
  height: 100%;
  fill: var(--teal-600);
}
</style>
