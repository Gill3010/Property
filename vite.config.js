import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/_protect/', // <--- Esta línea es clave
  plugins: [react()],
});