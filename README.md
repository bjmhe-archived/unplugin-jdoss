# unplugin-jdoss

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]

A build plugin based on [unplugin](https://github.com/unjs/unplugin) that automatically uploads files to JD OSS after build completion.

It supports multiple build tools, including Vite, Webpack, Rspack, Rollup, Rolldown, esbuild and Farm. The plugin integrates `@jd/upload-oss-tools` and automatically performs uploads in the `writeBundle` hook, eliminating the need for manual deployment of static assets.

## Install

```bash
npm i -D -E unplugin-jdoss
```

## Features

- Feature 1
- Feature 2

## License

[MIT](./LICENSE) License © 2026-PRESENT [Benjamin He](https://github.com/bjmhe)
<br><br>
<a href="https://github.com/bjmhe/unplugin-jdoss/graphs/contributors">
<img src="https://contrib.rocks/image?repo=bjmhe/unplugin-jdoss" />
</a>

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/unplugin-jdoss.svg
[npm-version-href]: https://npmjs.com/package/unplugin-jdoss
[npm-downloads-src]: https://img.shields.io/npm/dm/unplugin-jdoss
[npm-downloads-href]: https://www.npmcharts.com/compare/unplugin-jdoss?interval=30
