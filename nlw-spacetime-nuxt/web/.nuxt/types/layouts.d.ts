import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "/home/caio.vinicius/nlw-vue-projects/nlw-spacetime-nuxt/web/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}