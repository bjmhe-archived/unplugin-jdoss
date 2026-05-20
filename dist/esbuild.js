import { Starter } from "./index.js";
//#region src/esbuild.ts
/**
* This entry file is for esbuild plugin.
*
* @module
*/
/**
* Esbuild plugin
*
* @example
* ```ts
* import { build } from 'esbuild'
* import Starter from 'unplugin-jdoss/esbuild'
* 
* build({ plugins: [Starter()] })
```
*/
const esbuild = Starter.esbuild;
//#endregion
export { esbuild as default, esbuild as "module.exports" };
