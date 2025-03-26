import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BUILD_TYPE || './' || './Testing',
  build: {
    outDir: 'dist',
  },
  css: {
    postcss: {
      plugins: [],
    },
  },
});
