# unplugin-jdoss

<!-- automd:badges bundlephobia license engine provider=npmx -->

[![npm version](https://npmx.dev/api/registry/badge/version/unplugin-jdoss)](https://npmjs.com/package/unplugin-jdoss)
[![npm downloads](https://npmx.dev/api/registry/badge/downloads/unplugin-jdoss)](https://npm.chart.dev/unplugin-jdoss)
[![bundle size](https://npmx.dev/api/registry/badge/size/unplugin-jdoss)](https://bundlephobia.com/package/unplugin-jdoss)
[![license](https://npmx.dev/api/registry/badge/license/unplugin-jdoss)](https://github.com/bjmhe/unplugin-jdoss/blob/main/LICENSE)
[![engine](https://npmx.dev/api/registry/badge/engines/unplugin-jdoss)](https://npmx.dev/api/registry/badge/engines/unplugin-jdoss)

<!-- /automd -->

A build plugin based on [unplugin](https://github.com/unjs/unplugin) that automatically uploads files to JD OSS after build completion.

It supports multiple build tools, including Vite, Webpack, Rspack, Rollup, Rolldown, esbuild and Farm. The plugin integrates `@jd/upload-oss-tools` and automatically performs uploads in the `writeBundle` hook, eliminating the need for manual deployment of static assets.

## Install

```bash
npm i -D -E unplugin-jdoss
```

## Features

- **Automatic OSS Upload** - Automatically uploads build artifacts to JD OSS after build completion via the `writeBundle` hook
- **Multi-Builder Support** - Works seamlessly with Vite, Webpack, Rspack, Rollup, Rolldown, esbuild, and Farm
- **Zero Configuration** - Integrates with `@jd/upload-oss-tools` out of the box, no manual deployment needed
- **Build Tool Agnostic** - Built on [unplugin](https://github.com/unjs/unplugin) for universal compatibility across modern build tools
- **Static Asset Deployment** - Eliminates the need for manual static asset deployment workflows

## Usage

```typescript
/// vite.config.ts

import path from "node:path";
import VitePluginJdoss from "unplugin-jdoss/vite";
import { defineConfig, loadEnv, searchForWorkspaceRoot } from "vite";

export default defineConfig(({ mode }) => {
  const workspaceRoot = searchForWorkspaceRoot(process.cwd());
  const env = loadEnv(mode, workspaceRoot);

  return {
    base: env.VITE_BASE_URL,
    plugins: [
      mode === "production" &&
        VitePluginJdoss({
          localFullPath: path.resolve(workspaceRoot, "dist"),
          access: env.VITE_OSS_ACCESS,
          secret: env.VITE_OSS_SECRET,
          site: "storage.jd.local",
          cover: true,
          timeout: "30000",
          printCdnFile: false,
          bucket: env.VITE_OSS_BUCKET,
          folder: env.VITE_OSS_FOLDER,
          ignoreRegexp: "",
        }),
    ],
  };
});
```

## Ecology

- [x] Rollup
- [x] Vite
- [x] Webpack
- [x] Esbuild
- [x] Rspack
- [x] Farm
- [x] Rolldown
- [x] Bun

## License

<!-- automd:contributors markupGoLogo anon author="bjmhe" license="MIT" -->

Published under the [MIT](https://github.com/bjmhe/unplugin-jdoss/blob/main/LICENSE) license.
Made by [@bjmhe](https://github.com/bjmhe) and [community](https://github.com/bjmhe/unplugin-jdoss/graphs/contributors) 💛
<br><br>
<a href="https://github.com/bjmhe/unplugin-jdoss/graphs/contributors">
<img src="https://contrib.rocks/image?repo=bjmhe/unplugin-jdoss&anon=true" />
</a>

<!-- /automd -->

<!-- automd:with-automd -->

---

_🤖 auto updated with [automd](https://automd.unjs.io)_

<!-- /automd -->
