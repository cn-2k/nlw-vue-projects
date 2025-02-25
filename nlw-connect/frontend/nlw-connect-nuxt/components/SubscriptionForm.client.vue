<template>
  <form
    class="w-full bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 md:max-w-[440px]"
    @submit.prevent="onSubmit"
  >
    <h2 class="font-heading font-semibold text-gray-200 text-xl">
      Inscrição
    </h2>

    <div class="space-y-3">
      <div class="space-y-2">
        <InputRoot :error="!!errors.name">
          <InputIcon>
            <LucideUser class="size-6" />
          </InputIcon>
          <InputField
            v-model="name"
            name="name"
            type="text"
            placeholder="Nome completo"
          />
        </InputRoot>

        <p
          v-if="errors.name"
          class="text-danger font-semibold text-xs"
        >
          {{ errors.name }}
        </p>
      </div>

      <div class="space-y-2">
        <InputRoot :error="!!errors.email">
          <InputIcon>
            <LucideMail class="size-6" />
          </InputIcon>
          <InputField
            v-model="email"
            type="text"
            name="email"
            placeholder="E-mail"
          />
        </InputRoot>

        <p
          v-if="errors.email"
          class="text-danger font-semibold text-xs"
        >
          {{ errors.email }}
        </p>
      </div>
    </div>

    <CustomButton type="submit">
      Confirmar
      <LucideArrowRight class="size-6" />
    </CustomButton>
  </form>
</template>

<script setup lang="ts">
import { z } from 'zod'
import { useField, useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { subscribeToEvent } from '@/http/api'
import { InputRoot, InputIcon, InputField } from '@/components/Input'

const validationSchema = toTypedSchema(
  z.object({
    name: z.string().min(4, 'Digite seu nome completo'),
    email: z.string().min(1, { message: 'Esse campo é obrigatório' }).email({ message: 'Digite um e-mail válido' }),
  }),
)

const { handleSubmit, errors } = useForm({
  validationSchema,
})

const router = useRouter()
const route = useRoute()

const { value: name } = useField<string>('name')
const { value: email } = useField<string>('email')

const onSubmit = handleSubmit(async () => {
  try {
    const referrer = (route.query.referrer as string) || null

    const { subscriberId } = await subscribeToEvent({
      name: name.value,
      email: email.value,
      referrer,
    })

    router.push(`/invite/${subscriberId}`)
  }
  catch (error) {
    console.error('Erro ao processar inscrição:', error)
  }
})
</script>
