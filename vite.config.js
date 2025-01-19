import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: '/index.html',
        company: '/company/index.html',
        openroles: '/open-roles/index.html',
        applications: '/applications/',
        notavailable: '/not-available-yet/index.html',
      },
    },
  },
});
