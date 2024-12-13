import { defineConfig } from 'vite';

export default defineConfig({
  // Configuration options go here
  server: {
    port: 3000,  
  },
  build: {
    outDir: 'dist', // Output directory for build files
  },
});
