import { defineConfig,loadEnv } from 'vite'
import createVitePlugins from './vite/plugins'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({mode, command}) =>{
  const env = loadEnv(mode, process.cwd())
  return {
    plugins: createVitePlugins(env, command === 'build'),

    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  }
})
