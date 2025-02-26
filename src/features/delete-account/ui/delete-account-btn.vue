<script setup lang="ts">
import GarbageIcon from "@/shared/ui/icons/garbage-icon.vue";
import { UiButton } from "@/shared/ui/ui-button";
import { type Account, useAccountsStore } from "@/entities/account";

defineOptions({ name: "DeleteAccountBtn" });

defineProps<{ accountId: Account["id"] }>();

const { deleteAccount } = useAccountsStore();
</script>

<template>
  <ui-button variant="outline" @click="deleteAccount(accountId)">
    <garbage-icon class="icon" />
  </ui-button>
</template>

<style scoped>
.icon {
  width: 1.5rem;
  height: 1.25rem;
}
</style>
