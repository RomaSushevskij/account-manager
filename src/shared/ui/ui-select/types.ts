import { type Option } from "vue3-select-component";

type DefaultProps<GenericOption, OptionValue> = {
  /**
   * A list of options to render on the select component.
   */
  options: GenericOption[];
  /**
   * When passed to the component, only these specific options will be rendered
   * on the list of options.
   */
  displayedOptions?: GenericOption[];
  /**
   * The placeholder text to display when no option is selected.
   */
  placeholder?: string;
  /**
   * When set to true, the input can be cleared by clicking the clear button.
   */
  isClearable?: boolean;
  /**
   * When set to true, disable the select component.
   */
  isDisabled?: boolean;
  /**
   * When set to true, allow the user to filter the options by typing in the search input.
   */
  isSearchable?: boolean;
  /**
   * When set to true, allow the user to select multiple options. This will change the
   * `selected` model to an array of strings. You should pass an array of strings to the
   * `v-model` directive when using this prop.
   */
  isMulti?: boolean;
  /**
   * When set to true, allow the user to create a new option if it doesn't exist.
   */
  isTaggable?: boolean;
  /**
   * When set to true, show a loading spinner inside the select component. This is useful
   * when fetching the options asynchronously.
   */
  isLoading?: boolean;
  /**
   * Control the menu open state programmatically.
   */
  isMenuOpen?: boolean;
  /**
   * When set to true, focus the first option when the menu is opened.
   * When set to false, no option will be focused.
   */
  shouldAutofocusOption?: boolean;
  /**
   * When set to true, clear the search input when an option is selected.
   */
  closeOnSelect?: boolean;
  /**
   * Teleport the menu to another part of the DOM with higher priority such as `body`.
   * This way, you can avoid z-index issues. Menu position will be calculated using
   * JavaScript, instead of using CSS absolute & relative positioning.
   */
  teleport?: string;
  /**
   * The ID of the input element. This is useful for accessibility or forms.
   */
  inputId?: string;
  /**
   * CSS class to append to the select component at the root level.
   */
  class?: string;
  /**
   * Unique identifier to identify the select component, using `id` attribute.
   * This is useful for accessibility.
   */
  uid?: string | number;
  /**
   * ARIA attributes to describe the select component. This is useful for accessibility.
   */
  aria?: {
    labelledby?: string;
    required?: boolean;
  };
  /**
   * Callback to filter the options based on the search input. By default, it filters
   * the options based on the `label` property of the option. The label is retrieved
   * using `getOptionLabel`.
   *
   * @param option The option to filter.
   * @param label The label of the option.
   * @param search The search input value.
   */
  filterBy?: (option: GenericOption, label: string, search: string) => boolean;
  /**
   * Resolves option data to a string to compare options and specify value attributes.
   *
   * @param option The option to render.
   */
  getOptionValue?: (option: GenericOption) => OptionValue;
  /**
   * Resolves option data to a string to render the option label.
   *
   * @param option The option to render.
   */
  getOptionLabel?: (option: GenericOption) => string;
};

export type TProps<
  GenericOption extends Option<OptionValue>,
  OptionValue = string,
> = {
  modelValue: OptionValue | OptionValue[];
} & DefaultProps<GenericOption, OptionValue> & {
    "onUpdate:modelValue"?: (value: OptionValue | OptionValue[]) => void;
    onOptionSelected?: (option: GenericOption) => void;
    onOptionDeselected?: (option: GenericOption | null) => void;
    onOptionCreated?: (value: string) => void;
    onMenuOpened?: () => void;
    onMenuClosed?: () => void;
    onSearch?: (value: string) => void;
  };
