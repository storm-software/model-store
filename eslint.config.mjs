/* -------------------------------------------------------------------

            ⚡ Storm Software - Model Store

 This code was released as part of the Model Store project. Model Store
 is maintained by Storm Software under the Apache-2.0 license, and is
 free for commercial and private use. For more information, please visit
 our licensing page at https://stormsoftware.com/licenses/projects/model-store.

 Website:                  https://stormsoftware.com
 Repository:               https://github.com/storm-software/model-store
 Documentation:            https://docs.stormsoftware.com/projects/model-store
 Contact:                  https://stormsoftware.com/contact

 SPDX-License-Identifier:  Apache-2.0

 ------------------------------------------------------------------- */

import { defineConfig } from "@storm-software/eslint";

Error.stackTraceLimit = Number.POSITIVE_INFINITY;

/** @type {import('eslint').Linter.Config[]} */
export default defineConfig({
  name: "model-store",
  nx: {
    depsCheck: false
  },
  tsdoc: {
    configFile: "@powerlines/tsdoc/recommended.json"
  }
});
