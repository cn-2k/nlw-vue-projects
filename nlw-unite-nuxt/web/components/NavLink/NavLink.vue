<template>
  <a
    v-bind="props"
    class="text-sm font-medium text-zinc-300"
  >{{ props.label }}</a>
</template>

<script lang="ts" setup>
import type { AnchorHTMLAttributes } from "vue"

interface NavLinkProps extends /* @vue-ignore */ AnchorHTMLAttributes {
  label: string
}

const props = defineProps<NavLinkProps>()
</script>
