import path from 'path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  build: {
    sourcemap: true,
    target: ['es2020', 'edge88', 'firefox78', 'chrome61', 'safari14'],
    commonjsOptions: {
      // Suggested here for DETERMINISTIC BUILD: https://github.com/vitejs/vite/issues/13672#issuecomment-1784110536
      strictRequires: true
    },
    rollupOptions: {
      // Suggested here for DETERMINISTIC BUILD: https://github.com/vitejs/vite/issues/10506 (from https://github.com/vitejs/vite/issues/13672)
      maxParallelFileOps: 1,
      output: {
        entryFileNames: `[name].js`,
        //chunkFileNames: `[name].js`,
        //assetFileNames: `[name].[ext]`,
        assetFileNames: (assetInfo) => {
          // Check if the asset is a CSS file
          if (assetInfo.name.endsWith('.css')) {
              // Return a name pattern without hash for CSS files
              return `assets/[name].[ext]`;
          } else {
              // For all other types of assets, include the hash in the filename
              return `assets/[name]-[hash].[ext]`;
          }
        },
        manualChunks(id) 
        {
          if (id.includes('node_modules/@js-joda/'))
          {
            return 'js-joda';
          }
          if (id.includes('node_modules/ol/'))
          {
            return 'ol';
          }
          /*
          if (id.includes('taxi-lib-js/lib/'))
          {
            return 'taxi-lib';
          }
          if (id.includes('taxi-lib-js/admin/src/locales'))
          {
            //console.log(id)
            return 'i18n';
          }
          */
          if (id.includes('node_modules'))
          {
            //return id.toString().split('node_modules/')[1].split('/')[0].toString();
            //return id.toString().replace('/','_').toString();
            return 'vendor';
          }
        }
      }
    }
  },
  plugins: [
    vue(),
    vuetify({ styles: { configFile: 'src/vuetify.scss' } }),
    svgLoader(({
      defaultImport: 'url',
      svgo: false,
    })),
  ],
  optimizeDeps: {
    include: [
      'earcut',
      'pbf',
      'geotiff',
      'sockjs-client',
    ],
  },
  define: {
    // Feature flags for vue-i18n
    __VUE_I18N_FULL_INSTALL__: false,
    __VUE_I18N_LEGACY_API__: false,
    __INTLIFY_PROD_DEVTOOLS__: false,
  },
})
