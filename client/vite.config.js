import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// No need for `@tailwindcss/vite` plugin – Tailwind works through PostCSS setup
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [react()],
});
