<template>
  <div class="m-5 flex justify-center gap-4 text-gray-400">
    <NuxtLink to="/">
      <Icon
        name="heroicons-outline:home"
        class="h-6 w-6 text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-200"
      />
    </NuxtLink>
    <a href="https://github.com/initred/nuxt3-tailwindcss3-starter-kit" target="_blank">
      <Icon
        name="carbon:logo-github"
        class="h-6 w-6 text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-200"
      />
    </a>
    <DarkToggle />
  </div>
</template>
