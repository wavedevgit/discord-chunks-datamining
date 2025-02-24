/** Chunk was on 38597 **/
"use strict";
r.d(t, {
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