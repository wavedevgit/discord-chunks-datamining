/** Chunk was on web.js **/
/** chunk id: 951570, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G2: () => v,
  Q1: () => b,
  TO: () => g,
  h3: () => y,
  lB: () => h,
  lK: () => O
});
var Chunk951288 = require("./951288.js"),
  Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk47280 = require("./47280.js"),
  Chunk553094 = require("./553094.js"),
  Chunk474936 = require("./474936.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}
let h = "https://support.discord.com/hc/articles/34679678303255",
  m = "2025-09-30";
var g = function(e) {
  return e[e.UNKNOWN = 0] = "UNKNOWN", e[e.COHORT_1 = 1] = "COHORT_1", e[e.COHORT_2 = 2] = "COHORT_2", e[e.COHORT_3 = 3] = "COHORT_3", e
}({});

function E(e) {
  return null == e ? 0 : c.ZP.isPremiumExactly(e, f.p9.TIER_2) ? 3 : c.ZP.isPremiumExactly(e, f.p9.TIER_1) || c.ZP.isPremiumExactly(e, f.p9.TIER_0) ? 2 : 1
}

function b() {
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
    isEligible: exports && require && Chunk951288 && !Chunk913527,
    cohort: E(module)
  }
}

function y() {
  return Math.max(0, Math.ceil(a()(m).endOf("day").diff(a()(), "days", true)))
}

function O() {
  (0, Chunk481060.ZDy)(async () => {
    let {
      default: e
    } = await require.e("75056").then(require.bind(require, 16919));
    return t => (0, r.jsx)(e, p({}, t))
  })
}

function v() {
  return "production" !== window.GLOBAL_ENV.PROJECT_ENV || 3 >= y()
}