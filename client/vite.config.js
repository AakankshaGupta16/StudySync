import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'

// Export the configuration for Vite
export default defineConfig({
  server: {
    port: 3000,  // You can choose a different port if needed
  },
  plugins: [
    tailwindcss(),
  ],
});
