import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolvePath } from 'react-router-dom'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/Story-List-App",
  resolve:{
    alias:{
      '@':resolvePath(__dirname,'./src'),
    },
  },
})
 