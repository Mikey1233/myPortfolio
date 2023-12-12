import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', // Automatically register the PWA for updates
      manifest: {
        name: 'Michael Emmanuel',
        short_name: 'Mikey',
        icons: [
          {
            src: '/Assets/star-2.svg',
            sizes: '192x192',
            type: 'image/svg',
          },
        ],
      },
    }),
  ],
});
