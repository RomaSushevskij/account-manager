<script setup lang="ts">
import { UiButton } from "@/shared/ui/ui-button";
import AddIcon from "@/shared/ui/icons/add-icon.vue";
import { useAccountsStore } from "@/entities/account";

defineOptions({ name: "AddAccountBtn" });

const { addAccount } = useAccountsStore();
</script>

<template>
  <ui-button @click="addAccount">
    <add-icon class="icon" />
  </ui-button>
</template>

<style scoped>
.icon {
  width: 2rem;
  height: 2rem;
}
</style>
