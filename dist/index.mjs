/*! Keep it simple, keep it free */
import UploadOssPlugin from "@jd/upload-oss-tools";
import { createUnplugin } from "unplugin";
//#region src/index.ts
const Starter = createUnplugin((options) => {
	return {
		name: "unplugin-jdoss",
		writeBundle() {
			new UploadOssPlugin(options).upload();
		}
	};
});
//#endregion
export { Starter };

/*! Built with love & coffee ☕ */
//# sourceMappingURL=index.mjs.map