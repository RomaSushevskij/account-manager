import { ref } from "vue";

export function useFieldVisited() {
  const isFieldVisited = ref(false);

  const setFieldVisited = () => {
    isFieldVisited.value = true;
  };

  return {
    isFieldVisited,
    setFieldVisited,
  };
}
