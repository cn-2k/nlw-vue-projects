import type { Config } from "tailwindcss"
import tailwindFormsPlugin from "@tailwindcss/forms"

// Default are on https://tailwindcss.nuxtjs.org/tailwind/config#default-configuration
export default <Partial<Config>>{
  content: [],
  theme: {},
  plugins: [tailwindFormsPlugin],
}
