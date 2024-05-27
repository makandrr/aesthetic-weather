import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@scss': path.resolve(__dirname, './src/scss')
    }
  },
  plugins: [react()],
})
