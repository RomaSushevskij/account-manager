import type { Ref } from "vue";

import { VALIDATION_MESSAGES } from "@/shared/constants/validationMessages.ts";

export const validateAccount = {
  login(login: Ref<string>) {
    if (!login.value) {
      return VALIDATION_MESSAGES.REQUIRED;
    }

    if (login.value.length > 100) {
      return VALIDATION_MESSAGES.maxLength(100);
    }

    return "";
  },
  password(password: Ref<string>) {
    const MAX_LENGTH = 100;

    if (!password.value) {
      return VALIDATION_MESSAGES.REQUIRED;
    }

    if (password.value.length > MAX_LENGTH) {
      return VALIDATION_MESSAGES.maxLength(MAX_LENGTH);
    }

    return "";
  },
  label(label: Ref<string>) {
    const MAX_LENGTH = 50;

    if (label.value.length > MAX_LENGTH) {
      return VALIDATION_MESSAGES.maxLength(MAX_LENGTH);
    }

    return "";
  },
};
