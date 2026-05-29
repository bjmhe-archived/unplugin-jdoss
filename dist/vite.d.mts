/*! Keep it simple, keep it free */
import { Starter } from "./index.mjs";

//#region src/vite.d.ts
/**
 * Vite plugin
 *
 * @example
 *   ```ts
 *   // vite.config.ts
 *   import Starter from "unplugin-jdoss/vite";
 *
 *   export default defineConfig({
 *     plugins: [Starter()],
 *   });
 *   ```;
 */
declare const vite: typeof Starter.vite;
//#endregion
export { vite as default, vite as "module.exports" };
/*! Built with love & coffee ☕ */
//# sourceMappingURL=vite.d.mts.map