/** Chunk was on web.js **/
/** chunk id: 215023, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AW: () => E,
  Ch: () => M,
  Cm: () => I,
  HU: () => N,
  IV: () => T,
  J0: () => S,
  K8: () => C,
  RE: () => y,
  Vt: () => P,
  aK: () => O,
  aP: () => x,
  cv: () => p,
  f7: () => g,
  kN: () => A,
  lb: () => v,
  o0: () => D,
  o8: () => R,
  rL: () => _,
  xg: () => L,
  yf: () => m
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
let _ = "1225876188074082374",
  p = "1332505418219655258",
  h = ["1385035256058482798", "1385035256083648542", "1385035256104620154"],
  m = o()([...l()(h, i()(Array(h.length), new Date("2025-07-02").getTime()))]);
var g = function(e) {
    return e[e.VISIBLE = 0] = "VISIBLE", e[e.HIDDEN = 1] = "HIDDEN", e[e.IN = 2] = "IN", e[e.OUT = 3] = "OUT", e
  }({}),
  E = function(e) {
    return e.HOME = "home", e.CATALOG = "catalog", e.ORBS = "orbs", e.AVATAR_DECORATIONS = "avatar-decorations", e.PROFILE_EFFECTS = "profile-effects", e.NAMEPLATES = "nameplates", e.BUNDLES = "bundles", e
  }({});
let b = ["avatar-decorations", "profile-effects", "nameplates", "bundles"],
  y = e => b.includes(e),
  O = e => null != e && "home" !== e && "catalog" !== e,
  v = 800,
  I = 6048e5,
  T = 12,
  S = 518,
  A = 5,
  C = 3,
  N = ["1212569433839636530", "1212570343567261736", "1212582298893946880"];
var R = function(e) {
  return e[e.FIAT = 0] = "FIAT", e[e.ORB = 1] = "ORB", e[e.PREMIUM_PURCHASE = 2] = "PREMIUM_PURCHASE", e[e.PROMOTIONAL = 3] = "PROMOTIONAL", e[e.TENURE_REWARD = 4] = "TENURE_REWARD", e[e.GIFT = 5] = "GIFT", e
}({});
let P = {
    ORB_PROFILE_BADGE: "1342211853484429445",
    FRACTIONAL_PREMIUM: Chunk314794.a.PREMIUM_TIER_2_3_DAY
  },
  w = new Set(Object.values(P)),
  D = e => w.has(e),
  L = [Chunk335818.G.AVATAR_DECORATION, Chunk335818.G.PROFILE_EFFECT, Chunk335818.G.NAMEPLATE, Chunk335818.G.BUNDLE],
  x = [{
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
  }];
var M = function(e) {
  return e.DEFAULT = "default", e.THUMBNAIL = "thumbnail", e
}({})