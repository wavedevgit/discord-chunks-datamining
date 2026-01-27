/** Chunk was on web.js **/
/** chunk id: 623373, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $K: () => l,
  Ab: () => d,
  B1: () => p,
  CW: () => s,
  YW: () => h,
  ex: () => f,
  rb: () => _
}), require("./896048.js");
var Chunk575593 = require("./575593.js"),
  Chunk590180 = require("./590180.js"),
  Chunk758836 = require("./758836.js"),
  Chunk652215 = require("./652215.js");
let s = e => {
    var t, n, r, i, s;
    let {
      product: l,
      isPremiumUser: c,
      isRental: u
    } = e;
    return u ? a.nE : null != (n = (null != (t = null == (s = l.prices[c ? o.lid.PREMIUM_TIER_2 : o.lid.DEFAULT]) || null == (i = s.countryPrices) || null == (r = i.prices) ? true : r.slice(0, 2)) ? t : []).find(e => e.currency === o.Yri.DISCORD_ORB)) ? n : null
  },
  l = e => {
    var t, n, r, i, a;
    let {
      product: s,
      isPremiumUser: l
    } = e;
    return null != (n = (null != (t = null == (a = s.prices[l ? o.lid.PREMIUM_TIER_2 : o.lid.DEFAULT]) || null == (i = a.countryPrices) || null == (r = i.prices) ? true : r.slice(0, 2)) ? t : []).find(e => e.currency !== o.Yri.DISCORD_ORB)) ? n : null
  },
  c = e => null != s({
    product: e,
    isPremiumUser: false,
    isRental: false
  }),
  u = e => null != l({
    product: e,
    isPremiumUser: false
  }),
  d = e => {
    if (null == e) returnfalse;
    let t = c(e),
      n = u(e);
    return t && !n
  },
  f = e => e.filter(e => {
    let t = c(e),
      n = u(e);
    return t && n
  }),
  p = e => e.type === r.R.VARIANTS_GROUP && null != e.variants && 0 !== e.variants.length,
  _ = (e, t) => {
    var n, a, o;
    return e.type === r.R.VARIANTS_GROUP && null != t && null != (n = i.A.getProduct(null == (o = e.variants) || null == (a = o[t]) ? true : a.skuId)) ? n : e
  },
  h = e => {
    if (null == e) return null;
    if (e.type === r.R.VARIANTS_GROUP) {
      if (null == e.variants || 0 === e.variants.length) return null;
      let t = e.variants[0];
      if (null == t) return null;
      let [n] = t.items;
      return n.type
    }
    return e.type
  }