/** Chunk was on web.js **/
/** chunk id: 27123, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T4: () => a,
  cB: () => s,
  cf: () => d,
  ox: () => f,
  r1: () => u
});
var Chunk979554 = require("./979554.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js");
let a = e => {
    var t, n, r, a, s;
    let {
      product: l,
      isPremiumUser: c,
      isRental: u
    } = e;
    return u ? i.sT : null != (s = (null != (a = null == (r = l.prices[c ? o.tuJ.PREMIUM_TIER_2 : o.tuJ.DEFAULT]) || null == (n = r.countryPrices) || null == (t = n.prices) ? true : t.slice(0, 2)) ? a : []).find(e => e.currency === o.pKx.DISCORD_ORB)) ? s : null
  },
  s = e => {
    var t, n, r, i, a;
    let {
      product: s,
      isPremiumUser: l
    } = e;
    return null != (a = (null != (i = null == (r = s.prices[l ? o.tuJ.PREMIUM_TIER_2 : o.tuJ.DEFAULT]) || null == (n = r.countryPrices) || null == (t = n.prices) ? true : t.slice(0, 2)) ? i : []).find(e => e.currency !== o.pKx.DISCORD_ORB)) ? a : null
  },
  l = e => null != a({
    product: e,
    isPremiumUser: false,
    isRental: false
  }),
  c = e => null != s({
    product: e,
    isPremiumUser: false
  }),
  u = e => {
    if (null == e) returnfalse;
    let t = l(e),
      n = c(e);
    return t && !n
  },
  d = e => e.filter(e => {
    let t = l(e),
      n = c(e);
    return t && n
  }),
  f = e => e.type === r.Z.VARIANTS_GROUP && null != e.variants && 0 !== e.variants.length