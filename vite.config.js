import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '.',                  // Root directory
  publicDir: 'public',        // Tell Vite where index.html is
  build: {
    outDir: 'dist',           // Output folder for Render to deploy
  },
  server: {
    port: 3000,
  },
})
