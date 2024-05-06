<template>
  <td
    :class="twMerge('px-4 py-3 text-sm text-zinc-300', attrs.class as ClassNameValue)"
  >
    <slot />
  </td>
</template>

<script lang="ts" setup>
import { useAttrs } from "vue"
import { twMerge, type ClassNameValue } from "tailwind-merge"
import type { TdHTMLAttributes } from "vue"

interface TableCellProps extends /* @vue-ignore */ TdHTMLAttributes {}

const attrs = useAttrs()
defineProps<TableCellProps>()
</script>
