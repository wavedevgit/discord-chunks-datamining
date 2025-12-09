/** Chunk was on web.js **/
/** chunk id: 27123, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T4: () => o,
  cB: () => s,
  cf: () => d,
  ox: () => f,
  r1: () => u
});
var Chunk979554 = require("./979554.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js");
let o = e => {
    var t, n, r, o, s;
    let {
      product: l,
      isPremiumUser: c,
      isRental: u
    } = e;
    return u ? i.sT : null != (s = (null != (o = null == (r = l.prices[c ? a.tuJ.PREMIUM_TIER_2 : a.tuJ.DEFAULT]) || null == (n = r.countryPrices) || null == (t = n.prices) ? true : t.slice(0, 2)) ? o : []).find(e => e.currency === a.pKx.DISCORD_ORB)) ? s : null
  },
  s = e => {
    var t, n, r, i, o;
    let {
      product: s,
      isPremiumUser: l
    } = e;
    return null != (o = (null != (i = null == (r = s.prices[l ? a.tuJ.PREMIUM_TIER_2 : a.tuJ.DEFAULT]) || null == (n = r.countryPrices) || null == (t = n.prices) ? true : t.slice(0, 2)) ? i : []).find(e => e.currency !== a.pKx.DISCORD_ORB)) ? o : null
  },
  l = e => null != o({
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