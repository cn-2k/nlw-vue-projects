<template>
  <div class="min-h-dvh flex items-center justify-between gap-16 flex-col md:flex-row">
    <div class="flex flex-col gap-10 w-full max-w-[550px]">
      <NuxtImg
        src="/logo.svg"
        alt="devstage"
        class="h-[30px] w-[108.5px]"
      />

      <div class="space-y-2">
        <h1 class="text-4xl font-semibold font-heading text-gray-100 leading-none">
          Inscrição confirmada!
        </h1>
        <p class="text-gray-300">
          Para entrar no evento, acesse o link enviado para seu e-mail.
        </p>
      </div>

      <div class="space-y-6">
        <div class="space-y-3">
          <h2 class="text-gray-200 text-xl font-heading font-semibold leading-none">
            Indique e ganhe
          </h2>
          <p class="text-gray-300">
            Convide mais pessoas para o evento e concorra a prêmios
            exclusivos! É só compartilhar o link abaixo e acompanhar as
            inscrições:
          </p>
        </div>
      </div>

      <InviteLinkInput :invite-link="inviteLink" />

      <StatsCards :subscriber-id="subscriberId" />
    </div>

    <InviteRanking />
  </div>
</template>

<script lang="ts" setup>
const subscriberId = useRoute().params.subscriberId.toString()
const inviteLink = `http://localhost:3333/invites/${subscriberId}`
</script>
