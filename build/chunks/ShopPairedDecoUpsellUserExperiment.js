/** Chunk was on 87624 **/
/** chunk id: 587792, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  g: () => l,
  o: () => a
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let l = (0, Chunk818083.B)({
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
  }),
  a = t => l.useExperiment({
    location: t
  }).showPairedDecoUpsell