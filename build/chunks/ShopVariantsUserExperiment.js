/** Chunk was on web.js **/
/** chunk id: 228624, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ed: () => l,
  hv: () => s,
  k: () => a
});
var Chunk311570 = require("./311570.js"),
  Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let a = (0, Chunk818083.B)({
    kind: "user",
    id: "2024-10_shop_variants",
    label: "Shop Variants Experiment",
    defaultConfig: {
      variantsReturnStyle: Chunk311570.v.INDIVIDUAL_PRODUCTS
    },
    treatments: [{
      id: 1,
      label: "Return Variants as Group",
      config: {
        variantsReturnStyle: Chunk311570.v.VARIANTS_GROUP
      }
    }],
    commonTriggerPoint: Chunk987338.$P.COLLECTIBLES_SHOP_OPEN
  }),
  s = e => a.useExperiment({
    location: e
  }).variantsReturnStyle,
  l = e => s(e) === r.v.VARIANTS_GROUP