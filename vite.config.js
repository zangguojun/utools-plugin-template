import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import utools from 'vite-plugin-utools';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    utools({
    external: 'uTools',
    preload: {
      path: './src/preload.ts',
      watch: true,
      name: 'window.preload',
    },
    buildUpx: {
      pluginPath: './plugin.json',
      outDir: 'upx',
      outName: '[pluginName]_[version].upx',
    },
  }),]
})
