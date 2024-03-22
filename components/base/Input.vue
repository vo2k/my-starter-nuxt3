<script setup lang="ts">
  interface Props {
    modelValue: string;
  }
  const props = withDefaults(defineProps<Props>(), {
    modelValue: "",
  });

  const emit = defineEmits(["update:modelValue"]);
  const input = ref<HTMLElement | null>(null);

  function updateModalValue(event: Event) {
    emit("update:modelValue", (event.target as HTMLInputElement).value);
  }
</script>

<template>
  <input
    ref="input"
    class="mx-auto block w-full max-w-xs rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
    :value="props.modelValue"
    @input="updateModalValue"
  />
</template>
