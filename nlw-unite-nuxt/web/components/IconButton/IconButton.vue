<template>
  <button
    class="rounded-md border border-white/10 p-1.5 disabled:cursor-not-allowed disabled:opacity-50"
    :class="[props.transparent ? 'bg-black/20' : 'bg-white/10']"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
const props = defineProps<{
  transparent?: boolean
}>()
</script>

<style></style>
