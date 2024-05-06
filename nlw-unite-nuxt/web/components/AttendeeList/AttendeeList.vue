<template>
  <div class="flex flex-col gap-4">
    <div class="flex items-center gap-3">
      <h1 class="text-2xl font-bold">
        Participantes
      </h1>
      <div
        class="flex w-72 items-center gap-3 rounded-lg border border-white/10 px-3 py-1.5"
      >
        <LucideSearch class="size-4 text-emerald-300" />
        <input
          v-model="searchAttendee"
          class="flex-1 focus:ring-0 border-0 bg-transparent p-0 text-sm ring-0"
          placeholder="Buscar participante..."
          @input="onSearchInputChanged"
        />
      </div>
    </div>

    <Table class="w-full">
      <thead>
        <tr class="border-b border-white/10">
          <TableHeader :style="{ width: 48 }">
            <input
              type="checkbox"
              class="size-4 rounded border border-white/10 bg-black/20"
            />
          </TableHeader>
          <TableHeader>Código</TableHeader>
          <TableHeader>Participante</TableHeader>
          <TableHeader>Data de inscrição</TableHeader>
          <TableHeader>Data do check-in</TableHeader>
          <TableHeader :style="{ width: 64 }"></TableHeader>
        </tr>
      </thead>
      <tbody v-auto-animate>
        <template
          v-for="attendee in attendees"
          :key="attendee.id"
        >
          <TableRow
            class="border-b border-white/10 hover:bg-white/5"
          >
            <TableCell>
              <input
                type="checkbox"
                class="size-4 rounded border border-white/10 bg-black/20"
              />
            </TableCell>
            <TableCell>12383</TableCell>
            <TableCell>
              <div class="flex flex-col gap-1">
                <span class="font-semibold text-white">
                  {{ attendee.name }}
                </span>
                <span>{{ attendee.email }}</span>
              </div>
            </TableCell>
            <TableCell>
              {{
                formatDistanceToNow(attendee.createdAt, {
                  addSuffix: true,
                  locale: ptBR,
                })
              }}
            </TableCell>
            <TableCell>
              <span v-if="attendee.checkedInAt !== null">{{ formatDistanceToNow(attendee.checkedInAt, {
                addSuffix: true,
                locale: ptBR,
              }) }}</span>
              <span
                v-else
                class="text-orange-400"
              >Não fez check-in</span>
            </TableCell>
            <TableCell>
              <IconButton transparent>
                <LucideMoreHorizontal class-name="size-4" />
              </IconButton>
            </TableCell>
          </TableRow>
        </template>
        <TableRow
          v-if="!attendees.length"
          class="border-b border-white/10 hover:bg-white/5"
        >
          <TableCell
            class="text-center py-6"
            colspan="6"
          >
            Nenhum dado encontrado!
          </TableCell>
        </TableRow>
      </tbody>
      <tfoot>
        <tr>
          <TableCell colspan="3">
            Mostrando {{ attendees.length }} de {{ total }} itens
          </TableCell>
          <TableCell
            class="text-right"
            colspan="3"
          >
            <div class="inline-flex items-center gap-8">
              <span>Página {{ currentPage }} de {{ totalPages }}</span>

              <div class="flex gap-1.5">
                <IconButton
                  :disabled="currentPage === 1"
                  @click="goToFirstPage"
                >
                  <LucideChevronsLeft class="size-4" />
                </IconButton>
                <IconButton
                  :disabled="currentPage === 1"
                  @click="goToPreviousPage"
                >
                  <LucideChevronLeft class="size-4" />
                </IconButton>
                <IconButton
                  :disabled="currentPage === totalPages"
                  @click="goToNextPage"
                >
                  <LucideChevronRight class="size-4" />
                </IconButton>
                <IconButton
                  :disabled="currentPage === totalPages"
                  @click="goToLastPage"
                >
                  <LucideChevronsRight class="size-4" />
                </IconButton>
              </div>
            </div>
          </TableCell>
        </tr>
      </tfoot>
    </Table>
  </div>
</template>

<script lang="ts" setup>
import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"
import { vAutoAnimate } from "@formkit/auto-animate"

interface AttendeeProps {
  id: string
  name: string
  email: string
  createdAt: string
  checkedInAt: string | null
}

interface AttendeeResponseData {
  attendees: AttendeeProps[]
  total: number
}

const url = new URL(window.location.toString())

const attendees = ref<AttendeeProps[]>([])

const total = ref<number>(0)

const searchAttendee = ref<string | null>(
  url.searchParams.has("search") ? url.searchParams.get("search") : "",
)

const currentPage = ref<number>(
  url.searchParams.has("page") ? Number(url.searchParams.get("page")) : 1,
)

const totalPages = computed(() => {
  return Math.ceil(total.value / 10)
})

const eventId = "9e9bd979-9d10-4915-b339-3786b1634f33"

function setCurrentSearch(search: string) {
  url.searchParams.set("search", search)

  window.history.pushState({}, "", url)

  searchAttendee.value = search
}

function setCurrentPage(page: number) {
  url.searchParams.set("page", String(page))

  window.history.pushState({}, "", url)

  currentPage.value = page
}

function goToNextPage() {
  setCurrentPage(currentPage.value + 1)
}

function goToPreviousPage() {
  setCurrentPage(currentPage.value - 1)
}

function goToLastPage() {
  setCurrentPage(totalPages.value)
}

function goToFirstPage() {
  setCurrentPage(1)
}

function onSearchInputChanged() {
  setCurrentSearch(searchAttendee.value!)
  setCurrentPage(1)
}

watchEffect(() => {
  const url = new URL(`http://localhost:3333/events/${eventId}/attendees`)
  url.searchParams.set("pageIndex", String(currentPage.value - 1))

  if (searchAttendee.value && searchAttendee.value.length > 0) {
    url.searchParams.set("query", searchAttendee.value!)
  }

  fetch(url)
    .then(response => response.json())
    .then((data: AttendeeResponseData) => {
      attendees.value = data.attendees
      total.value = data.total
    })
})
</script>
