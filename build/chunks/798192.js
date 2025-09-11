/** Chunk was on 54628 **/
/** chunk id: 798192, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => a
});
let a = {
  gamut_mapping: "css",
  precision: 5,
  deltaE: "76",
  verbose: globalThis?.process?.env?.NODE_ENV?.toLowerCase() !== "test",
  warn: function(e) {
    this.verbose && globalThis?.console?.warn?.(e)
  }
}