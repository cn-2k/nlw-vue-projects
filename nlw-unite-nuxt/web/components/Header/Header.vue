<template>
  <div class="flex items-center gap-5 py-2">
    <img
      :src="nlwUniteIcon"
      alt="NLW Unite"
    />
    <nav class="flex items-center gap-5">
      <NavLink
        href="/eventos"
        label="Eventos"
      />
      <NavLink
        href="/participantes"
        label="Participantes"
      />
    </nav>
  </div>
</template>

<script lang="ts" setup>
import nlwUniteIcon from "@/assets/nlw-unite-icon.svg"
</script>

<style>

</style>
