<script setup lang="ts">
  import type { RouteLocationRaw } from "vue-router";

  const props = defineProps<{ to: RouteLocationRaw }>();
</script>

<template>
  <NuxtLink
    :to="props.to"
    :class="[
      'inline-flex items-center px-4 py-2',
      'border border-gray-300 shadow-sm',
      'rounded-md text-sm font-medium text-gray-700',
      'bg-white hover:bg-gray-50',
      'focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
    ]"
  >
    <slot />
  </NuxtLink>
</template>
