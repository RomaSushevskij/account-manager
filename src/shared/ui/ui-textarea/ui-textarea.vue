<script setup lang="ts">
import type { Props } from "./types.ts";
import { onMounted, ref } from "vue";

defineOptions({ name: "UiTextarea" });

const props = withDefaults(defineProps<Props>(), {
  error: undefined,
});

defineSlots<{ append(): any }>();

const modelValue = defineModel<string>();

const textarea = ref<HTMLTextAreaElement | null>(null);

const resize = () => {
  if (!textarea.value) {
    return;
  }

  textarea.value.style.height = `${textarea.value.scrollHeight / 16}rem`;
};

onMounted(() => {
  resize();
});
</script>

<template>
  <div class="wrapper" :class="{ error: error }">
    <textarea
      class="textarea"
      v-model.trim="modelValue"
      v-bind="props"
      ref="textarea"
      @input="resize"
    />
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

.wrapper.error {
  border-color: tomato;
}
</style>
