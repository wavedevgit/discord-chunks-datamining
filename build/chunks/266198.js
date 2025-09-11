/** Chunk was on web.js **/
/** chunk id: 266198, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Fw: () => m,
  G2: () => v,
  Q1: () => y,
  TO: () => E,
  h3: () => O,
  lB: () => p,
  w_: () => g
});
var Chunk913527 = require("./913527.js"),
  i = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk47280 = require("./47280.js"),
  Chunk553094 = require("./553094.js"),
  Chunk219333 = require("./219333.js"),
  Chunk284662 = require("./284662.js"),
  Chunk474936 = require("./474936.js"),
  Chunk304426 = require("./304426.js");
let p = "https://support.discord.com/hc/articles/34679678303255",
  h = "2025-09-30",
  m = "1410030846337093672",
  g = "2025_08-nitro-drop";
var E = function(e) {
  return e[e.UNKNOWN = 0] = "UNKNOWN", e[e.COHORT_1 = 1] = "COHORT_1", e[e.COHORT_2 = 2] = "COHORT_2", e[e.COHORT_3 = 3] = "COHORT_3", e
}({});

function b(e) {
  return null == e ? 0 : s.ZP.isPremiumExactly(e, f.p9.TIER_2) ? 3 : s.ZP.isPremiumExactly(e, f.p9.TIER_1) || s.ZP.isPremiumExactly(e, f.p9.TIER_0) ? 2 : 1
}

function y() {
  let e = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()),
    t = (0, Chunk553094.o)({
      location: "useSeptember2025MarketingMomentEligibility"
    }),
    n = (0, Chunk47280.ZP)({
      location: "useSeptember2025MarketingMomentEligibility"
    }),
    {
      isEligible: r
    } = (0, Chunk284662.d)(),
    i = (0, Chunk219333.W)({
      campaignID: Chunk304426.m.NITRO_DROP
    });
  return {
    isEligible: exports && require && Chunk913527 && !i,
    cohort: b(module)
  }
}

function O() {
  return Math.max(0, Math.ceil(i()(h).endOf("day").diff(i()(), "days", true)))
}

function v() {
  return "production" !== window.GLOBAL_ENV.PROJECT_ENV || 3 >= O()
}