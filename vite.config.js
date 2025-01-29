import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ['ios 12'], // Ensure compatibility with iPad Mini 2
      modernPolyfills: true,
    }),
  ],
});
