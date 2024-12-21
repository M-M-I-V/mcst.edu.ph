import { defineConfig } from 'vite';

export default defineConfig({
  // Configuration options (if needed)
  base: '/mcst.edu.ph/',
  css: {
    postcss: './postcss.config.js',
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'src/about.html', // Add additional HTML files here
        programs: 'src/programs.html',
        informationsystems: 'src/informationsystems.html',
        communication: 'src/communication.html',
        mathematics: 'src/mathematics.html',
      },
    },
  },
});