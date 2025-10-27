import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite build config
export default defineConfig({
  plugins: [react()],
  root: '.', // root of the app
  build: {
    outDir: 'dist',
  },
  server: {
    port: 5173,
  },
})
