import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: '/index.html',
        company: '/company/index.html',
        openroles: '/jobs/index.html',
        djangoapplication: '/applications/',
      },
    },
  },
});
