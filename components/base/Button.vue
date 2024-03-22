<template>
  <button
    :class="[
      'inline-flex items-center px-4 py-2',
      'border border-transparent',
      'rounded-md text-sm font-medium text-white shadow-sm',
      'bg-indigo-600 hover:bg-indigo-700',
      'focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
    ]"
  >
    <slot />
  </button>
</template>
