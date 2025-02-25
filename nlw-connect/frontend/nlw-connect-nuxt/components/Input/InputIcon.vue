<template>
  <span
    v-bind="$attrs"
    class="text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger"
  ><slot /></span>
</template>
