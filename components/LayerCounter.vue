<script setup lang="ts">
  const { count, inc, dec } = useCount();
</script>

<template>
  <div class="flex items-center justify-center py-8">
    <button
      class="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 p-2 text-white"
      @click="dec()"
    >
      <Icon name="heroicons-solid:minus" class="h-5 w-5 text-white" />
    </button>
    <div class="mx-4">
      {{ count }}
    </div>
    <button
      class="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 p-2 text-white"
      @click="inc()"
    >
      <Icon name="heroicons-solid:plus" class="h-5 w-5 text-white" />
    </button>
  </div>
</template>
