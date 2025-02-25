<template>
  <main class="max-w-[1240px] mx-auto px-5 py-8 md:py-0">
    <slot />
  </main>
</template>

<script setup lang="ts">
useHead({
  title: 'devstage',
  htmlAttrs: {
    lang: 'en',
  },
  bodyAttrs: {
    class: 'bg-gray-900 text-gray-100 antialiased bg-[url(/background.png)] bg-no-repeat bg-top md:bg-right-top',
  },
})
</script>
