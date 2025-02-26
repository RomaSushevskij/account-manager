<script setup lang="ts">
defineOptions({ name: "PageLayout" });

defineSlots<{
  title(): any;
  addAccount(): any;
  accountLabelHint(): any;
  accounts(): any;
}>();
</script>

<template>
  <section class="wrapper">
    <div class="container">
      <div class="header">
        <slot name="title" />
        <slot name="addAccount" />
      </div>

      <div class="account-label-hint">
        <slot name="accountLabelHint" />
      </div>

      <div class="accounts">
        <slot name="accounts" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.wrapper {
  padding-block: 3rem 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container {
  width: clamp(80svw, 90svw, 98svw);
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: var(--md);
}

.account-label-hint {
  margin-block: var(--xl);
}

.accounts {
  overflow-y: auto;
  height: clamp(18.75rem, 60svh, 70svh);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
  grid-template-rows: max-content;
  gap: var(--lg);
  align-items: start;
}
</style>
