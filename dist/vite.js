import { Starter } from "./index.js";
//#region src/vite.ts
/**
* This entry file is for Vite plugin.
*
* @module
*/
/**
* Vite plugin
*
* @example
* ```ts
* // vite.config.ts
* import Starter from 'unplugin-jdoss/vite'
*
* export default defineConfig({
*   plugins: [Starter()],
* })
* ```
*/
const vite = Starter.vite;
//#endregion
export { vite as default, vite as "module.exports" };
