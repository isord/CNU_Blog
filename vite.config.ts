import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'localhost:8000/CNU_Blog/',
  plugins: [react()],
});
