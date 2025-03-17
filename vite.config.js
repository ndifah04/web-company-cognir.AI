import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: ['cognir.ai']
  },
  server: {
    host: true,
    port: 4173
  }
})

