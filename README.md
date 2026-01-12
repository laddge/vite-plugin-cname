# vite-plugin-cname
## install

```bash
npm i -D vite-plugin-cname
```

## usage

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import cname from 'vite-plugin-cname'

export default defineConfig({
  plugins: [cname('example.com')],
})
```

↓ `vite build`

```ts
// ./dist/CNAME
example.com
```
