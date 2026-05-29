/*! Keep it simple, keep it free */
import { Starter } from "./index.mjs";
//#region src/farm.ts
/**
* This entry file is for Farm plugin.
*
* @module
*/
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
const farm = Starter.farm;
//#endregion
export { farm as default, farm as "module.exports" };

/*! Built with love & coffee ☕ */
//# sourceMappingURL=farm.mjs.map