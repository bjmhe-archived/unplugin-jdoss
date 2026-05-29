/*! Keep it simple, keep it free */
import { Starter } from "./index.mjs";

//#region src/rolldown.d.ts
/**
 * Rolldown plugin
 *
 * @example
 *   ```ts
 *   // rolldown.config.js
 *   import Starter from "unplugin-jdoss/rolldown";
 *
 *   export default {
 *     plugins: [Starter()],
 *   };
 *   ```;
 */
declare const rolldown: typeof Starter.rolldown;
//#endregion
export { rolldown as default, rolldown as "module.exports" };
/*! Built with love & coffee ☕ */
//# sourceMappingURL=rolldown.d.mts.map