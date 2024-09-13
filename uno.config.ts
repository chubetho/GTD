import {
  defineConfig,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['flex-center', 'flex justify-center items-center'],
  ],
  presets: [
    presetUno(),
    presetWebFonts({
      fonts: {
        heading: {
          name: 'Montserrat',
          weights: ['200', '400', '700'],
        },
        text: 'Inter',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
