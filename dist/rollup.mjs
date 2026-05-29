/*! Keep it simple, keep it free */
import { Starter } from "./index.mjs";
//#region src/rollup.ts
/**
* This entry file is for Rollup plugin.
*
* @module
*/
/**
* Rollup plugin
*
* @example
*   ```ts
*   // rollup.config.js
*   import Starter from "unplugin-jdoss/rollup";
*
*   export default {
*     plugins: [Starter()],
*   };
*   ```;
*/
const rollup = Starter.rollup;
//#endregion
export { rollup as default, rollup as "module.exports" };

/*! Built with love & coffee ☕ */
//# sourceMappingURL=rollup.mjs.map