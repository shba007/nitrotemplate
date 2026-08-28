import { defineConfig } from 'nitro'
import mcp from 'nitro-mcp-toolkit/module'

export default defineConfig({
  modules: [mcp()],
  serverDir: './server',
  runtimeConfig: {
    app: {
      version: '',
      buildTime: '',
    },
  },
})
