import { Starter } from "./index.js";
//#region src/rspack.ts
/**
* This entry file is for Rspack plugin.
*
* @module
*/
/**
* Rspack plugin
*
* @example
* ```js
* // rspack.config.js
* import Starter from 'unplugin-jdoss/rspack'
*
* export default {
*   plugins: [Starter()],
* }
* ```
*/
const rspack = Starter.rspack;
//#endregion
export { rspack as default, rspack as "module.exports" };
