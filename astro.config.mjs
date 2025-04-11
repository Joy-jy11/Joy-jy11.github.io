import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"
import icon from "astro-icon"
import mdx from "@astrojs/mdx"
import react from "@astrojs/react"
import svelte from "@astrojs/svelte"

export default defineConfig({
  site: 'https://Joy-jy11.github.io',  // <--- this is enough
  output: 'static',
  integrations: [tailwind(), icon(), mdx(), react(), svelte()],
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    }
  }
})
