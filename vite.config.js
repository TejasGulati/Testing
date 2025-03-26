import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BUILD_TYPE || './', // Ensures flexibility based on environment variable
  build: {
    outDir: 'dist',
  },
  css: {
    postcss: {
      plugins: [],
    },
  },
});
