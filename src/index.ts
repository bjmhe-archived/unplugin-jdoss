import { createUnplugin, type UnpluginInstance } from 'unplugin'

const UploadOssPlugin = require("@jd/upload-oss-tools");

export const Starter: UnpluginInstance<any, false> =
  createUnplugin((options = {}) => {
    const name = 'unplugin-jdoss'
    return {
      name,
      writeBundle() {
        const _ploadOssPlugin = new UploadOssPlugin(options)
        _ploadOssPlugin.upload();
      }
    }
  })
