/*! Keep it simple, keep it free */
import { Starter } from "./index.mjs";

//#region src/rollup.d.ts
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
declare const rollup: typeof Starter.rollup;
//#endregion
export { rollup as default, rollup as "module.exports" };
/*! Built with love & coffee ☕ */
//# sourceMappingURL=rollup.d.mts.map