import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default {
  root: resolve(__dirname, 'src'),
  base: '/Vite_portfolio/',  // Убедитесь, что имя репозитория точно такое же
  build: {
    outDir: resolve(__dirname, '../dist'),
    emptyOutDir: true,  // Очищает папку перед сборкой
  },
  server: {
    port: 8080
  },
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: [
          'import',
          'mixed-decls',
          'color-functions',
          'global-builtin',
        ],
      },
    },
  },
}
