import { resolve } from 'path'
import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, 'src') },
      { find: '@reeba/common', replacement: resolve(__dirname, '..', 'common', 'src') }
    ]
  },
  server: {
    port: 8080,
    open: true
  }
})
