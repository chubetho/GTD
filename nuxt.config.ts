export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxt/icon',
    '@nuxt/eslint',
  ],
  app: {
    head: {
      title: 'GTD',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'format-detection', content: 'no' },
      ],
      bodyAttrs: {
        class: 'font-text antialiased',
      },
    },
  },
  experimental: {
    typedPages: true,
  },
  css: [
    '@unocss/reset/tailwind.css',
  ],
  vite: {
    clearScreen: false,
    envPrefix: ['VITE_', 'TAURI_'],
    server: {
      strictPort: true,
      hmr: {
        protocol: 'ws',
        host: '0.0.0.0',
        port: 3001,
      },
      watch: {
        ignored: ['**/src-tauri/**'],
      },
    },
  },
  srcDir: 'src/',
  ssr: false,
  devServer: {
    host: '0.0.0.0',
  },
  eslint: {
    config: {
      standalone: false,
    },
  },
  compatibilityDate: '2024-08-01',
})
