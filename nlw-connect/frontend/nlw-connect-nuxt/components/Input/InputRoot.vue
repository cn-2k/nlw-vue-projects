<template>
  <div
    v-bind="$attrs"
    :data-error="error"
    class="group bg-gray-800 h-12 border border-gray-600 rounded-xl px-4 flex items-center gap-2 focus-within:border-gray-100 data-[error=true]:border-danger"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  error?: boolean
}>(), {
  error: false,
})
</script>
