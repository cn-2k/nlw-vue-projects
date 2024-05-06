<template>
  <ScDialog :open="isDialogOpen" @update:open="isDialogOpen = !isDialogOpen">
    <ScDialogTrigger
      class="flex flex-col gap-3 overflow-hidden rounded-md bg-slate-700 p-5 text-left outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400"
    >
      <span class="text-sm font-medium text-slate-200"> Add note </span>
      <p class="break-all text-sm leading-6 text-slate-400">
        Record an audio note that
        <strong>will be converted to text automatically</strong> or use text
        only with <strong>AI asssistance</strong>.
      </p>
    </ScDialogTrigger>
    <ScDialogContent
      class="flex h-[60vh] min-h-[400px] w-full max-w-[640px] flex-col overflow-hidden rounded-md border-transparent bg-slate-700 p-0 outline-none"
      @close-auto-focus="handleClose"
      @interact-outside="(e) => e.preventDefault()"
    >
      <ScDialogHeader class="px-5 pt-5">
        <ScDialogTitle>
          <span class="text-sm font-medium text-slate-300">
            Create a new note
          </span></ScDialogTitle
        >
      </ScDialogHeader>
      <div v-if="shouldShowOnboarding" class="flex flex-1 flex-col gap-3 p-5">
        <p class="text-sm leading-6 text-slate-400">
          Start by
          <button
            class="font-medium text-lime-400 hover:underline"
            @click="handleStartRecording"
          >
            recording an audio note
          </button>
          or if you prefer
          <button
            class="font-medium text-lime-400 hover:underline"
            @click="handleStartEditor"
          >
            use text only.
          </button>
        </p>
      </div>
      <ScContextMenu v-if="!shouldShowOnboarding">
        <ScContextMenuTrigger class="flex flex-1 flex-col">
          <ScContextMenuContent class="w-[400px]">
            <div v-focus class="mb-2 p-2">
              <ScTextarea
                v-model="prompt"
                placeholder="The llama is waiting for you, enter your prompt..."
                @keydown.stop
              />
            </div>
            <ScContextMenuItem
              inset
              :disabled="!prompt"
              class="cursor-pointer"
              @click="handleTextGenerate"
            >
              Send message
              <ScContextMenuShortcut>🦙</ScContextMenuShortcut>
            </ScContextMenuItem>
            <ScContextMenuItem inset>
              Reload
              <ScContextMenuShortcut>⌘R</ScContextMenuShortcut>
            </ScContextMenuItem>
            <ScContextMenuSub>
              <ScContextMenuSubTrigger inset>
                More Tools
              </ScContextMenuSubTrigger>
              <ScContextMenuSubContent class="w-48">
                <ScContextMenuItem>
                  Save Page As...
                  <ScContextMenuShortcut>⇧⌘S</ScContextMenuShortcut>
                </ScContextMenuItem>
                <ScContextMenuItem>Create Shortcut...</ScContextMenuItem>
                <ScContextMenuItem>Name Window...</ScContextMenuItem>
                <ScContextMenuSeparator />
                <ScContextMenuItem>Developer Tools</ScContextMenuItem>
              </ScContextMenuSubContent>
            </ScContextMenuSub>
            <ScContextMenuSeparator />
            <ScContextMenuCheckboxItem checked>
              Show Bookmarks Bar
              <ScContextMenuShortcut>⌘⇧B</ScContextMenuShortcut>
            </ScContextMenuCheckboxItem>
            <ScContextMenuCheckboxItem
              >Show Full URLs</ScContextMenuCheckboxItem
            >
          </ScContextMenuContent>
          <div class="flex flex-1 flex-col gap-3 p-5">
            <textarea
              v-if="!shouldShowOnboarding && !isTextGenerating"
              v-model="content"
              v-focus
              class="w-full flex-1 resize-none bg-transparent pr-2 text-sm leading-6 text-slate-300 outline-none scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-300/20"
              :placeholder="
                isRecording
                  ? 'Start talking or write something here...'
                  : 'Start typing your note or right click here to get IA help tools...'
              "
              @input="handleContentChanged"
            />
            <p class="text-sm text-center text-slate-400 animate-pulse" v-if="isTextGenerating">
              The llama is shouting something to us... 🦙
            </p>
          </div>
        </ScContextMenuTrigger>
      </ScContextMenu>
      <ScDialogFooter class="w-full">
        <button
          v-if="isRecording"
          type="button"
          class="flex w-full items-center justify-center gap-2 bg-slate-900 py-4 text-center text-sm font-medium text-slate-300 outline-none hover:text-slate-100"
          @click="handleStopRecording"
        >
          <div class="size-3 animate-pulse rounded-full bg-red-500" />
          Recording! (click here for stop)
        </button>

        <button
          v-if="!isRecording"
          type="button"
          :disabled="!content"
          class="w-full bg-lime-400 py-4 text-center text-sm font-medium text-lime-950 outline-none hover:bg-lime-500 disabled:cursor-not-allowed disabled:bg-lime-700"
          @click="handleSaveNote"
        >
          Save note
        </button>
      </ScDialogFooter>
    </ScDialogContent>
  </ScDialog>
</template>

<script setup lang="ts">
import { toast } from "vue-sonner";

const emit = defineEmits<{
  onNoteCreated: [content: string];
}>();

const vFocus = {
  mounted: (el: HTMLElement) => el.focus(),
};

const shouldShowOnboarding = ref<boolean>(true);
const isDialogOpen = ref<boolean>(false);
const content = ref<string>("");
const prompt = ref<string>("");
const isRecording = ref<boolean>(false);
const SpeechRecognitionAPI =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const speechRecognition = new SpeechRecognitionAPI();

function handleStartEditor() {
  shouldShowOnboarding.value = false;
}

function handleContentChanged() {
  if (content.value === "") {
    shouldShowOnboarding.value = true;
  }
}

function handleSaveNote() {
  if (content.value === "") {
    return;
  }

  emit("onNoteCreated", content.value);

  content.value = "";
  shouldShowOnboarding.value = true;
  toast.success("Note created with success!");
  isDialogOpen.value = false;
}

function handleStartRecording() {
  const isSpeechRecognitionAPIAvailable =
    "SpeechRecognition" in window || "webkitSpeechRecognition" in window;

  if (!isSpeechRecognitionAPIAvailable) {
    alert(
      "Infelizmente seu navegador não suporta a API de reconhecimento de fala.",
    );
    return;
  }

  isRecording.value = true;
  shouldShowOnboarding.value = false;

  speechRecognition.lang = "pt-BR";
  speechRecognition.continuous = true;
  speechRecognition.maxAlternatives = 1;
  speechRecognition.interimResults = true;

  speechRecognition.onresult = (event) => {
    const transcription = Array.from(event.results).reduce((text, result) => {
      return text.concat(result[0].transcript);
    }, "");

    content.value = transcription;
  };

  speechRecognition.onerror = (event) => {
    console.error(event);
  };

  speechRecognition.start();
}

function handleStopRecording() {
  isRecording.value = false;

  if (speechRecognition !== null) {
    speechRecognition.stop();
  }
}

function handleClose() {
  shouldShowOnboarding.value = true;
  content.value = "";
  prompt.value = "";
  isTextGenerating.value = false;
  handleStopRecording();
}

const isTextGenerating = ref<boolean>(false);

const handleTextGenerate = () => {
  isTextGenerating.value = true;

  const storyEventSource = new EventSource(
  `https://nottia-worker.caio-vinnicius2k.workers.dev/story?prompt=${encodeURIComponent(prompt.value)}`,
);

  storyEventSource.onmessage = function (event) {
    if (event.data === "[DONE]") {
      storyEventSource.close();
      return;
    }

    const data = JSON.parse(event.data);

    if (data && data.response) {
      isTextGenerating.value = false;
      content.value += data.response;
    }
  };
};
</script>
