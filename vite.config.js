import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression'

export default defineConfig({

  plugins: [
    react(),
    viteCompression(),
  ],

  server: {
    port: 5173,
    host: '0.0.0.0',
  },

  build: {

    outDir: 'dist',

    minify: 'terser',

    sourcemap: false,

    chunkSizeWarningLimit: 1000,

    rollupOptions: {

      output: {

        manualChunks: {

          motion: [
            'framer-motion',
          ],

          router: [
            'react-router-dom',
          ],

        },

      },

    },

  },

})