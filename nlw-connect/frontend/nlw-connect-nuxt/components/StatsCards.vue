<template>
  <div class="grid md:grid-cols-3 gap-3">
    <div class="relative rounded-xl bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1">
      <span class="font-heading text-2xl font-semibold text-gray-200 leading-none">
        {{ accessCount }}
      </span>
      <span class="text-sm text-gray-300 leading-none text-center">
        Acessos ao link
      </span>
      <LucideMousePointerClick class="size-5 text-purple top-3 left-3 absolute" />
    </div>

    <div class="relative rounded-xl bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1">
      <span class="font-heading text-2xl font-semibold text-gray-200 leading-none">
        {{ inviteCount }}
      </span>
      <span class="text-sm text-gray-300 leading-none text-center">
        Inscrições feitas
      </span>
      <LucideBadgeCheck class="size-5 text-purple top-3 left-3 absolute" />
    </div>

    <div class="relative rounded-xl bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1">
      <span class="font-heading text-2xl font-semibold text-gray-200 leading-none">
        {{ rankingPosition ? rankingPosition + '&ordm;' : '-' }}
      </span>
      <span class="text-sm text-gray-300 leading-none text-center">
        Posição no ranking
      </span>
      <LucideMedal class="size-5 text-purple top-3 left-3 absolute" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  getSubscriberInviteClicks,
  getSubscriberInviteCount,
  getSubscriberRankingPosition,
} from '@/http/api'

const props = defineProps<{
  subscriberId: string
}>()

const { count: accessCount } = await getSubscriberInviteClicks(props.subscriberId)
const { count: inviteCount } = await getSubscriberInviteCount(props.subscriberId)
const { position: rankingPosition }
    = await getSubscriberRankingPosition(props.subscriberId)
</script>
