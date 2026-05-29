/*! Keep it simple, keep it free */
import { Starter } from "./index.mjs";
//#region src/rolldown.ts
/**
* This entry file is for Rolldown plugin.
*
* @module
*/
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
const rolldown = Starter.rolldown;
//#endregion
export { rolldown as default, rolldown as "module.exports" };

/*! Built with love & coffee ☕ */
//# sourceMappingURL=rolldown.mjs.map