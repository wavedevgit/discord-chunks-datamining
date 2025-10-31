/** Chunk was on web.js **/
/** chunk id: 215023, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AW: () => m,
  Cm: () => O,
  HU: () => A,
  IV: () => v,
  J0: () => I,
  K8: () => S,
  RE: () => E,
  Vt: () => N,
  aK: () => b,
  aP: () => D,
  f7: () => h,
  kN: () => T,
  lb: () => y,
  o0: () => P,
  o8: () => C,
  xg: () => w,
  yf: () => p
}), require("./388685.js");
var Chunk463570 = require("./463570.js"),
  i = require.n(Chunk463570),
  Chunk961238 = require("./961238.js"),
  o = require.n(Chunk961238),
  Chunk705108 = require("./705108.js"),
  l = require.n(Chunk705108),
  Chunk335818 = require("./335818.js"),
  Chunk497598 = require("./497598.js"),
  Chunk792091 = require("./792091.js"),
  Chunk314794 = require("./314794.js");
let _ = ["1385035256058482798", "1385035256083648542", "1385035256104620154"],
  p = o()([...l()(_, i()(Array(_.length), new Date("2025-07-02").getTime()))]);
var h = function(e) {
    return e[e.VISIBLE = 0] = "VISIBLE", e[e.HIDDEN = 1] = "HIDDEN", e[e.IN = 2] = "IN", e[e.OUT = 3] = "OUT", e
  }({}),
  m = function(e) {
    return e.HOME = "home", e.CATALOG = "catalog", e.ORBS = "orbs", e.AVATAR_DECORATIONS = "avatar-decorations", e.PROFILE_EFFECTS = "profile-effects", e.NAMEPLATES = "nameplates", e.BUNDLES = "bundles", e
  }({});
let g = ["avatar-decorations", "profile-effects", "nameplates", "bundles"],
  E = e => g.includes(e),
  b = e => null != e && "home" !== e && "catalog" !== e,
  y = 800,
  O = 6048e5,
  v = 12,
  I = 518,
  T = 5,
  S = 3,
  A = ["1212569433839636530", "1212570343567261736", "1212582298893946880"];
var C = function(e) {
  return e[e.FIAT = 0] = "FIAT", e[e.ORB = 1] = "ORB", e[e.PREMIUM_PURCHASE = 2] = "PREMIUM_PURCHASE", e[e.PROMOTIONAL = 3] = "PROMOTIONAL", e[e.TENURE_REWARD = 4] = "TENURE_REWARD", e[e.GIFT = 5] = "GIFT", e
}({});
let N = {
    ORB_PROFILE_BADGE: "1342211853484429445",
    FRACTIONAL_PREMIUM: Chunk314794.a.PREMIUM_TIER_2_3_DAY
  },
  R = new Set(Object.values(N)),
  P = e => R.has(e),
  w = [Chunk335818.G.AVATAR_DECORATION, Chunk335818.G.PROFILE_EFFECT, Chunk335818.G.NAMEPLATE, Chunk335818.G.BUNDLE],
  D = [{
    sortType: Chunk792091.E.RELEVANCE,
    sortDirection: Chunk497598.F.DESC
  }, {
    sortType: Chunk792091.E.RECENCY,
    sortDirection: Chunk497598.F.DESC
  }, {
    sortType: Chunk792091.E.PRICE,
    sortDirection: Chunk497598.F.ASC
  }, {
    sortType: Chunk792091.E.PRICE,
    sortDirection: Chunk497598.F.DESC
  }, {
    sortType: Chunk792091.E.POPULARITY,
    sortDirection: Chunk497598.F.DESC
  }]