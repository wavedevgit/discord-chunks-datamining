/** Chunk was on web.js **/
/** chunk id: 666468, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => s,
  j2: () => l
}), require("./896048.js");
var Chunk997101 = require("./997101.js"),
  Chunk600975 = require("./600975.js"),
  Chunk788868 = require("./788868.js");
let s = (0, Chunk600975.C)({
    kind: "user",
    id: "2022-02_multi_month_plans",
    label: "Multi Month Plans",
    defaultConfig: {
      newPlans: []
    },
    treatments: [{
      id: 1,
      label: "3 and 6 Month Plans",
      config: {
        newPlans: [Chunk788868.gD.PREMIUM_6_MONTH_TIER_2, Chunk788868.gD.PREMIUM_3_MONTH_TIER_2]
      }
    }, {
      id: 2,
      label: "3 Month Plan Only",
      config: {
        newPlans: [Chunk788868.gD.PREMIUM_3_MONTH_TIER_2]
      }
    }]
  }),
  o = new Set([Chunk997101.d.US, Chunk997101.d.CA]);

function l(e) {
  return null == e || o.has(e.country)
}