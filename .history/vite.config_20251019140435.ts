import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 👈 این قسمت جدید است
  server: {
    port: 3008, // پورت مورد نظر شما
  },
  // 👆 تا اینجا
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});








