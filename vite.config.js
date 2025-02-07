import { defineConfig } from 'vite';

export default defineConfig({

  build: {
    minify: 'esbuild',
    terserOptions: {
      compress: {
        drop_console: false, 
      },
    },
  },

  envPrefix: 'VITE_',
});
