/*! Keep it simple, keep it free */
import { Starter } from "./index.mjs";

//#region src/esbuild.d.ts
/**
 * Esbuild plugin
 *
 * @example
 *   ```ts
 *   import { build } from "esbuild";
 *   import Starter from "unplugin-jdoss/esbuild";
 *
 *   build({ plugins: [Starter()] });
 *   ```;
 */
declare const esbuild: typeof Starter.esbuild;
//#endregion
export { esbuild as default, esbuild as "module.exports" };
/*! Built with love & coffee ☕ */
//# sourceMappingURL=esbuild.d.mts.map