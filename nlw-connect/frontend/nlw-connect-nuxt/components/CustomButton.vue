<template>
  <button
    v-bind="$attrs"
    class="px-5 h-12 flex items-center justify-between bg-gray-500 text-blue font-semibold rounded-xl w-full cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900"
  >
    <slot />
  </button>
</template>
