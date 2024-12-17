import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: '**/*.svg?react',
    }),
  ],
  server: {
    port: 4500,
  },

  resolve: {
    alias: { '@': path.resolve(__dirname, 'src/') },
  },

  build: {
    manifest: false,
    sourcemap: false,
    minify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-main': ['react', 'react-router-dom', 'react-dom'],
          'vendor-lib': ['antd'],
        },
      },
    },
  },

  envPrefix: 'APP_',
});
