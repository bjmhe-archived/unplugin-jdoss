/*! Keep it simple, keep it free */
import { Starter } from "./index.mjs";

//#region src/farm.d.ts
/**
 * Farm plugin
 *
 * @example
 *   ```ts
 *   // farm.config.js
 *   import Starter from "unplugin-jdoss/farm";
 *
 *   export default {
 *     plugins: [Starter()],
 *   };
 *   ```;
 */
declare const farm: typeof Starter.farm;
//#endregion
export { farm as default, farm as "module.exports" };
/*! Built with love & coffee ☕ */
//# sourceMappingURL=farm.d.mts.map