<script setup lang="ts">
import { storeToRefs } from "pinia";

import { UiTypography } from "@/shared/ui/ui-typography";
import { AddAccountBtn } from "@/features/create-account";
import {
  AccountLabelHint,
  EditAccountLabel,
  EditAccountLogin,
  EditAccountPassword,
  EditAccountType,
} from "@/features/edit-account";
import { DeleteAccountBtn } from "@/features/delete-account";
import { AccountCard, useAccountsStore } from "@/entities/account";

import PageLayout from "./page-layout.vue";

defineOptions({ name: "MainPage" });

const accountsStore = useAccountsStore();

const { accounts } = storeToRefs(accountsStore);
</script>

<template>
  <page-layout>
    <template #title>
      <ui-typography variant="h1">Учетные записи</ui-typography>
    </template>

    <template #addAccount>
      <add-account-btn />
    </template>

    <template #accountLabelHint>
      <account-label-hint />
    </template>

    <template #accounts v-if="Boolean(accounts.length)">
      <account-card v-for="account in accounts" :key="account.id">
        <template #label>
          <edit-account-label :id="account.id" :label="account.label" />
        </template>
        <template #type>
          <edit-account-type :id="account.id" :type="account.type" />
        </template>
        <template #login>
          <edit-account-login :id="account.id" :login="account.login" />
        </template>
        <template #password>
          <edit-account-password
            v-if="account.type === 'local'"
            :id="account.id"
            :password="account.password"
          />
        </template>
        <template #deleteAccount>
          <delete-account-btn :accountId="account.id" />
        </template>
      </account-card>
    </template>
  </page-layout>
</template>

<style scoped></style>
