<template>
  <div class="w-full max-w-[440px] space-y-5">
    <h2 class="text-gray-200 text-xl font-heading font-semibold leading-none">
      Ranking de indicações
    </h2>

    <div class="space-y-4">
      <div
        v-for="(rank, rankingPosition) in ranking"
        :key="rank.id"
        class="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3"
      >
        <span class="text-sm text-gray-300 leading-none">
          <span class="font-semibold">{{ rankingPosition + 1 }}&ordm;</span> |
          {{ rank.name }}
        </span>

        <span class="font-heading text-2xl font-semibold text-gray-200 leading-none">
          {{ rank.score }}
        </span>

        <NuxtImg
          v-if="rankingPosition + 1 === 1"
          src="/medal-gold.svg"
          alt="Ouro"
          densities="x1"
          class="absolute top-0 right-8"
        />

        <NuxtImg
          v-if="rankingPosition + 1 === 2"
          src="/medal-silver.svg"
          alt="Prata"
          densities="x1"
          class="absolute top-0 right-8"
        />

        <NuxtImg
          v-if="rankingPosition + 1 === 3"
          src="/medal-cooper.svg"
          alt="Bronze"
          densities="x1"
          class="absolute top-0 right-8"
        />
      </div>

      <p
        v-if="ranking.length === 0"
        class="text-gray-300"
      >
        Nenhuma indicação registrada
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getRanking } from '@/http/api'

const { ranking } = await getRanking()
</script>
