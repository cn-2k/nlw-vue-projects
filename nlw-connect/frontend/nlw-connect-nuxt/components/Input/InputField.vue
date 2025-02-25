<template>
  <input
    v-bind="$attrs"
    v-model="value"
    class="bg-transparent flex-1 outline-0 h-full placeholder:text-gray-400"
  >
</template>

<script setup lang="ts">
defineOptions({ inheritAttrs: false })

const value = defineModel<string>()
</script>
