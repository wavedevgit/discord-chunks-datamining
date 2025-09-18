/** Chunk was on web.js **/
/** chunk id: 215023, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AW: () => b,
  Ch: () => U,
  Cm: () => T,
  HU: () => w,
  IV: () => S,
  J0: () => C,
  K8: () => P,
  RE: () => O,
  Vt: () => x,
  a$: () => R,
  aK: () => v,
  aP: () => k,
  f7: () => E,
  i0: () => g,
  kN: () => N,
  lb: () => I,
  o0: () => j,
  o8: () => D,
  pv: () => A,
  rL: () => _,
  xg: () => M,
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
  p = ["1385035256058482798", "1385035256083648542", "1385035256104620154"],
  h = ["1144308439720394944", "1154896005045694555", "1144307257807491094", "1144305233707671573", "1144307629225672846", "1144308196723408958", "1144307957425778779", "1212569856189407352", "1212570343567261736", "1212570596970467378", "1212581390936178768", "1212569433839636530", "1212581147675205652", "1139323101881061466", "1139323093551165533", "1139323101008642101", "1212582298893946880", "1212582372877541427", "1212582452640350238", "1139323100568244355"],
  m = o()([...l()(p, i()(Array(p.length), new Date("2025-07-02").getTime()))]),
  g = o()([...l()(h, i()(Array(h.length), new Date("2025-03-08").getTime()))]);
var E = function(e) {
    return e[e.VISIBLE = 0] = "VISIBLE", e[e.HIDDEN = 1] = "HIDDEN", e[e.IN = 2] = "IN", e[e.OUT = 3] = "OUT", e
  }({}),
  b = function(e) {
    return e.HOME = "home", e.CATALOG = "catalog", e.ORBS = "orbs", e.AVATAR_DECORATIONS = "avatar-decorations", e.PROFILE_EFFECTS = "profile-effects", e.NAMEPLATES = "nameplates", e.BUNDLES = "bundles", e
  }({});
let y = ["avatar-decorations", "profile-effects", "nameplates", "bundles"],
  O = e => y.includes(e),
  v = e => null != e && "home" !== e && "catalog" !== e,
  I = 800,
  T = 6048e5,
  S = 12,
  A = 1128,
  C = 518,
  N = 5,
  R = new Date("2025-02-15T23:59:00-08:00"),
  P = 3,
  w = ["1212569433839636530", "1212570343567261736", "1212582298893946880"];
var D = function(e) {
  return e[e.FIAT = 0] = "FIAT", e[e.ORB = 1] = "ORB", e[e.PREMIUM_PURCHASE = 2] = "PREMIUM_PURCHASE", e[e.PROMOTIONAL = 3] = "PROMOTIONAL", e[e.TENURE_REWARD = 4] = "TENURE_REWARD", e[e.GIFT = 5] = "GIFT", e
}({});
let x = {
    ORB_PROFILE_BADGE: "1342211853484429445",
    FRACTIONAL_PREMIUM: Chunk314794.a.PREMIUM_TIER_2_3_DAY
  },
  L = new Set(Object.values(x)),
  j = e => L.has(e),
  M = [Chunk335818.G.AVATAR_DECORATION, Chunk335818.G.PROFILE_EFFECT, Chunk335818.G.NAMEPLATE, Chunk335818.G.BUNDLE],
  k = [{
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
var U = function(e) {
  return e.DEFAULT = "default", e.THUMBNAIL = "thumbnail", e
}({})