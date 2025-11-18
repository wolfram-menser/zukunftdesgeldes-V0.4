import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: true,
  },
  optimizeDeps: {
    include: [
      'react-markdown',
      'remark-gfm',
      'rehype-slug',
      'rehype-autolink-headings'
    ]
  }
})
