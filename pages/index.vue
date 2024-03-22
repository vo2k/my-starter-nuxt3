<template>
  <div class="px-10 py-20 text-center">
    <TheLogo class="mb-6" />
    <Suspense>
      <PageView />
      <template #fallback>
        <div class="italic opacity-50">
          <span class="pulse">Loading...</span>
        </div>
      </template>
    </Suspense>
    <InputEntry />
  </div>
</template>
