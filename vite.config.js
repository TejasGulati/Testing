import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  base: process.env.VITE_BUILD_TYPE ?? './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      external: [],
    },
  },
  css: {
    postcss: {
      plugins: [],
    },
  },
});
