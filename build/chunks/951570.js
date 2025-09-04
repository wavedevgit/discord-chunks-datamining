/** Chunk was on web.js **/
/** chunk id: 951570, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q1: () => f,
  TO: () => u,
  lB: () => c
});
var Chunk442837 = require("./442837.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk47280 = require("./47280.js"),
  Chunk553094 = require("./553094.js"),
  Chunk474936 = require("./474936.js");
let c = "https://support.discord.com/hc/articles/34679678303255";
var u = function(e) {
  return e[e.UNKNOWN = 0] = "UNKNOWN", e[e.COHORT_1 = 1] = "COHORT_1", e[e.COHORT_2 = 2] = "COHORT_2", e[e.COHORT_3 = 3] = "COHORT_3", e
}({});

function d(e) {
  return null == e ? 0 : a.ZP.isPremiumExactly(e, l.p9.TIER_2) ? 1 : a.ZP.isPremiumExactly(e, l.p9.TIER_1) ? 2 : 3 * !!a.ZP.isPremiumExactly(e, l.p9.TIER_0)
}

function f() {
  let e = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()),
    t = (0, Chunk553094.o)({
      location: "useSeptember2025MarketingMomentEligibility"
    }),
    n = (0, Chunk47280.ZP)({
      location: "useSeptember2025MarketingMomentEligibility"
    }),
    a = true,
    l = false;
  return {
    isEligible: exports && require && Chunk74538 && !Chunk474936,
    cohort: d(module)
  }
}