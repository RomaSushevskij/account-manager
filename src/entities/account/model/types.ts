type AccountLabelElement = { text: string };

type LdapAccountData = {
  type: "ldap";
  password: null;
};

type LocalAccountData = {
  type: "local";
  password: string;
};

export type Account = {
  id: string;
  login: string;
  label: AccountLabelElement[];
} & (LdapAccountData | LocalAccountData);
