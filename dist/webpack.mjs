/*! Keep it simple, keep it free */
import { Starter } from "./index.mjs";
//#region src/webpack.ts
/**
* This entry file is for webpack plugin.
*
* @module
*/
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
const webpack = Starter.webpack;
//#endregion
export { webpack as default, webpack as "module.exports" };

/*! Built with love & coffee ☕ */
//# sourceMappingURL=webpack.mjs.map