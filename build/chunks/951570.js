/** Chunk was on web.js **/
/** chunk id: 951570, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q1: () => h,
  TO: () => _,
  h3: () => m,
  lB: () => d
});
var Chunk913527 = require("./913527.js"),
  i = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk47280 = require("./47280.js"),
  Chunk553094 = require("./553094.js"),
  Chunk474936 = require("./474936.js");
let d = "https://support.discord.com/hc/articles/34679678303255",
  f = "2025-09-30";
var _ = function(e) {
  return e[e.UNKNOWN = 0] = "UNKNOWN", e[e.COHORT_1 = 1] = "COHORT_1", e[e.COHORT_2 = 2] = "COHORT_2", e[e.COHORT_3 = 3] = "COHORT_3", e
}({});

function p(e) {
  return null == e ? 0 : s.ZP.isPremiumExactly(e, u.p9.TIER_2) ? 3 : s.ZP.isPremiumExactly(e, u.p9.TIER_1) || s.ZP.isPremiumExactly(e, u.p9.TIER_0) ? 2 : 1
}

function h() {
  let e = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()),
    t = (0, Chunk553094.o)({
      location: "useSeptember2025MarketingMomentEligibility"
    }),
    n = (0, Chunk47280.ZP)({
      location: "useSeptember2025MarketingMomentEligibility"
    }),
    r = true,
    i = false;
  return {
    isEligible: exports && require && Chunk913527 && !i,
    cohort: p(module)
  }
}

function m() {
  return Math.max(0, Math.ceil(i()(f).endOf("day").diff(i()(), "days", true)))
}