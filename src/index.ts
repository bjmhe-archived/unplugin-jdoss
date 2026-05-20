import UploadOssPlugin from '@jd/upload-oss-tools'
import { createUnplugin, type UnpluginInstance } from 'unplugin'

export const Starter: UnpluginInstance<any, false> = createUnplugin(
  (options = {}) => {
    const name = 'unplugin-jdoss'
    return {
      name,
      writeBundle() {
        // @ts-ignore
        const _ploadOssPlugin = new UploadOssPlugin(options)
        _ploadOssPlugin.upload()
      },
    }
  },
)
