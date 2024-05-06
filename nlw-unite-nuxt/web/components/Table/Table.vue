<template>
  <div class="rounded-lg border border-white/10">
    <table
      v-bind="props"
      class="w-full"
    >
      <slot />
    </table>
  </div>
</template>

<script lang="ts" setup>
import type { TableHTMLAttributes } from "vue"

interface TableProps extends /* @vue-ignore */ TableHTMLAttributes {}

const props = defineProps<TableProps>()
</script>
