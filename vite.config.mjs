import path from 'path'

import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, 'env')
  const htmlPlugin = () => ({
    name: 'html-transform',
    transformIndexHtml(html) {
      return html.replace(
        /%\s*([a-zA-Z_]+)\s*%/g,
        (match, variableName) => env[variableName]
      )
    },
  })

  return {
    server: {
      host: 'localhost',
      port: 8080,
    },
    plugins: [htmlPlugin(), react()],
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src/'),
      },
    },
  }
})
