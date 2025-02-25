<script
  setup
  lang="ts"
  generic="GenericOption extends Option<OptionValue>, OptionValue"
>
import VueSelect, { type Option } from "vue3-select-component";

import type { TProps } from "./types.ts";

const props = defineProps<TProps<GenericOption, OptionValue>>();

defineEmits<
  {
    (e: "optionSelected", option: GenericOption): void;
    (e: "optionDeselected", option: GenericOption | null): void;
    (e: "optionCreated", value: string): void;
    (e: "menuOpened"): void;
    (e: "menuClosed"): void;
    (e: "search", value: string): void;
  } & ((evt: "update:modelValue", value: OptionValue | OptionValue[]) => void)
>();

const slots = defineSlots<{
  value(_: { option: GenericOption }): any;
  tag(_: { option: GenericOption; removeOption: () => void }): any;
  clear(_: {}): any;
  dropdown(_: {}): any;
  loading(_: {}): any;
  "menu-header"(_: {}): any;
  option(_: { option: GenericOption }): any;
  "no-options"(_: {}): any;
  "taggable-no-options"(_: { option: string }): any;
}>();
</script>

<template>
  <vue-select v-bind="props" class="custom-select">
    <template v-for="(_, name) in slots" v-slot:[name]="data" :key="name">
      <!-- @vue-ignore -->
      <slot :name="name" v-bind="data" />
    </template>
  </vue-select>
</template>

<style scoped>
.custom-select {
  --vs-border-radius: var(--rounded);
  --vs-text-color: var(--text);
  --vs-line-height: var(--body1-line-height);
  --vs-font-size: var(--body1-font-size);
  --vs-border: 1px solid var(--border);
  --vs-padding: 0 1rem;
  --vs-outline-color: var(--teal-600);
  --vs-outline-width: 0;
  --vs-option-padding: 0.5rem 1rem;
  --vs-option-selected-background-color: var(--teal-100);
  --vs-indicator-icon-color: var(--teal-700);
}
</style>
