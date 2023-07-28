import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/react_AgriBazaar_website/",
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
