import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/home/caio.vinicius/nlw-vue-projects/nlw-spacetime-nuxt/web/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}