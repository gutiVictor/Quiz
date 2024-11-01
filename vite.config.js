import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '10.68.245.148', // Permite conexiones desde cualquier IP en la red
    port: 3000 // Puedes cambiar el puerto si prefieres otro
  }
})
