/*! Keep it simple, keep it free */
import { Starter } from "./index.mjs";

//#region src/webpack.d.ts
/**
 * Webpack plugin
 *
 * @example
 *   ```js
 *   // webpack.config.js
 *   import Starter from "unplugin-jdoss/webpack";
 *
 *   export default {
 *     plugins: [Starter()],
 *   };
 *   ```;
 */
declare const webpack: typeof Starter.webpack;
//#endregion
export { webpack as default, webpack as "module.exports" };
/*! Built with love & coffee ☕ */
//# sourceMappingURL=webpack.d.mts.map