/** Chunk was on 45620 **/
/** chunk id: 587792, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  g: () => s
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let s = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-02_shop_paired_deco_upsell",
  label: "Shop Paired Deco Upsell Experiment",
  defaultConfig: {
    showPairedDecoUpsell: false
  },
  treatments: [{
    id: 1,
    label: "Show paired deco upsell",
    config: {
      showPairedDecoUpsell: true
    }
  }],
  commonTriggerPoint: Chunk987338.$P.COLLECTIBLES_SHOP_OPEN
})