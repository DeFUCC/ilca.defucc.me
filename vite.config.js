import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";

import Unocss from 'unocss/vite'
import { presetUno, presetIcons, transformerDirectives, extractorSplit } from "unocss";
import extractorPug from '@unocss/extractor-pug'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      // targets to transform
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue\??/, // .vue
      ],
      imports: ["vue", '@vueuse/core'],
    }),
    Components({
      dirs: ["src/components"],
      extensions: ["vue", "ts"],
      directoryAsNamespace: false,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      exclude: [/node_modules/, /\.git/],
    }),
    Unocss({
      presets: [
        presetIcons({
          extraProperties: {
            'display': 'inline-block',
            'vertical-align': 'middle',
          },
        }),
        presetUno()
      ],
      transformers: [
        transformerDirectives(),
      ],
      extractors: [
        extractorPug(),
        extractorSplit,
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
