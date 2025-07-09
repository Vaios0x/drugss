import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-scroll': 'react-scroll/modules/index.js'
    }
  },
  server: {
    port: 3007
  },
  build: {
    outDir: 'dist'
  }
})
