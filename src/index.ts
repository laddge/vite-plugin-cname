import type { Plugin, ResolvedConfig } from 'vite'
import { writeFileSync } from 'fs'
import { resolve } from 'path'

export default function cname(domain: string): Plugin {
  let config: ResolvedConfig

  return {
    name: 'vite-plugin-cname',
    apply: 'build',

    configResolved(resolvedConfig) {
      config = resolvedConfig
    },

    closeBundle() {
      const filePath = resolve(config.build.outDir, 'CNAME')
      writeFileSync(filePath, domain + '\n', 'utf-8')
      console.log(`${domain} => ${filePath}`)
    },
  }
}

