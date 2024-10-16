import { resolve } from 'node:path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import svgr from 'vite-plugin-svgr';

import { version } from './package.json';

export default defineConfig({
  define: {
    VERSION: JSON.stringify(version),
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'process.env.NODE_ENV': JSON.stringify(
      process.env.NODE_ENV ?? 'development',
    ),
  },

  plugins: [react(), svgr(), cssInjectedByJsPlugin()],

  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.jsx'),
      fileName: 'admin',
      formats: ['es'],
    },
  },

  server: {
    port: 9010,
    proxy: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      '/token': 'http://127.0.0.1:8360',
      // eslint-disable-next-line @typescript-eslint/naming-convention
      '/user': 'http://127.0.0.1:8360',
			// eslint-disable-next-line @typescript-eslint/naming-convention
      '/upload': 'http://127.0.0.1:8360',
			// eslint-disable-next-line @typescript-eslint/naming-convention
      '/get-user-by-email': 'https://izanami.rest/api/v1/sys',
    },
  },
});
