<template>
  <InputRoot>
    <InputIcon>
      <LucideLink class="size-5" />
    </InputIcon>

    <InputField
      v-model="inviteLinkText"
      readonly
    />

    <IconButton
      class="-mr-2"
      @click="copyInviteLink"
    >
      <LucideCopy
        v-if="!copied"
        class="size-5"
      />
      <LucideCheck
        v-else
        class="size-5"
      />
    </IconButton>
  </InputRoot>
</template>

<script lang="ts" setup>
interface InviteLinkInputProps {
  inviteLink: string
}

const props = defineProps<InviteLinkInputProps>()
const copied = ref<boolean>(false)

const inviteLinkText = ref(props.inviteLink)

function copyInviteLink() {
  navigator.clipboard.writeText(props.inviteLink)
  copied.value = true

  setTimeout(() => {
    copied.value = false
  }, 4000)
}
</script>
