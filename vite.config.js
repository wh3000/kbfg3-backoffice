import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        //target: 'http://10.200.93.141:7211',// env.MANAGE_API_URL
        target: 'http://localhost:8091', // process.env.MANAGE_API_URL,
        changeOrigin: true,
        //rewrite: (path) => path.replace(/^\/api/, ''),
        secure: false,
        ws: true
      },
      '/sso': {
        target: 'http://10.200.81.114:9082', // process.env.MANAGE_API_URL,
        // target: 'http://wh3000.asuscomm.com:58080/',// env.MANAGE_API_URL
        changeOrigin: true,
        //rewrite: (path) => path.replace(/^\/api/, ''),
        secure: false,
        ws: true
      },
    }
  },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'commCSS':`/public/css/common_kbfg.css`,
      'compCSS':`/public/css/components_kbfg.css`,
    }
  }
})
