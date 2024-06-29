import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [
    react()
  ],
  resolve: {
    alias: {
      '/assets': '/src/assets',
      '/components': '/src/components',
      '/pages': '/src/pages',
      '/styles': '/src/styles'
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: '/index.html',
      }
    }
  }
});
