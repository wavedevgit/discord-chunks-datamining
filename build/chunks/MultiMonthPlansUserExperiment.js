/** Chunk was on web.js **/
/** chunk id: 711459, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => a,
  aQ: () => l
}), require("./388685.js");
var Chunk742280 = require("./742280.js"),
  Chunk818083 = require("./818083.js"),
  Chunk474936 = require("./474936.js");
let a = (0, Chunk818083.B)({
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
        newPlans: [Chunk474936.Xh.PREMIUM_6_MONTH_TIER_2, Chunk474936.Xh.PREMIUM_3_MONTH_TIER_2]
      }
    }, {
      id: 2,
      label: "3 Month Plan Only",
      config: {
        newPlans: [Chunk474936.Xh.PREMIUM_3_MONTH_TIER_2]
      }
    }]
  }),
  s = new Set([Chunk742280.S.US, Chunk742280.S.CA]);

function l(e) {
  return null == e || s.has(e.country)
}