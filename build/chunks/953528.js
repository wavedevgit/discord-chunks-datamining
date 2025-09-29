/** Chunk was on 45620 **/
/** chunk id: 953528, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  QH: () => s,
  pj: () => i
});
var r, Chunk427164 = require("./427164.js"),
  i = ((r = {}).NO_BADGE = "no_badge", r.FIRST_BLOCK_ONLY = "first_block_only", r.RIGHT_BLOCK_ONLY = "right_block_only", r.BOTH_BLOCKS = "both_blocks", r);
let a = (0, Chunk427164.le)({
    name: "2025-10-collectibles-featured-block-new-badge",
    kind: "user",
    defaultConfig: {
      variant: "no_badge"
    },
    variations: {
      0: {
        variant: "no_badge"
      },
      1: {
        variant: "first_block_only"
      },
      2: {
        variant: "right_block_only"
      },
      3: {
        variant: "both_blocks"
      }
    }
  }),
  s = e => a.useConfig({
    location: e
  }).variant