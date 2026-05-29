/*! Keep it simple, keep it free */
import { Starter } from "./index.mjs";
//#region src/rspack.ts
/**
* This entry file is for Rspack plugin.
*
* @module
*/
/**
* Rspack plugin
*
* @example
*   ```js
*   // rspack.config.js
*   import Starter from "unplugin-jdoss/rspack";
*
*   export default {
*     plugins: [Starter()],
*   };
*   ```;
*/
const rspack = Starter.rspack;
//#endregion
export { rspack as default, rspack as "module.exports" };

/*! Built with love & coffee ☕ */
//# sourceMappingURL=rspack.mjs.map