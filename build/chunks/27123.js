/** Chunk was on web.js **/
/** chunk id: 27123, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T4: () => a,
  cB: () => o,
  cf: () => u,
  r1: () => c
});
var Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js");
let a = e => {
    var t, n, a, o, s;
    let {
      product: l,
      isPremiumUser: c,
      isRental: u
    } = e;
    return u ? r.sT : null != (s = (null != (o = null == (a = l.prices[c ? i.tuJ.PREMIUM_TIER_2 : i.tuJ.DEFAULT]) || null == (n = a.countryPrices) || null == (t = n.prices) ? true : t.slice(0, 2)) ? o : []).find(e => e.currency === i.pKx.DISCORD_ORB)) ? s : null
  },
  o = e => {
    var t, n, r, a, o;
    let {
      product: s,
      isPremiumUser: l
    } = e;
    return null != (o = (null != (a = null == (r = s.prices[l ? i.tuJ.PREMIUM_TIER_2 : i.tuJ.DEFAULT]) || null == (n = r.countryPrices) || null == (t = n.prices) ? true : t.slice(0, 2)) ? a : []).find(e => e.currency !== i.pKx.DISCORD_ORB)) ? o : null
  },
  s = e => null != a({
    product: e,
    isPremiumUser: false,
    isRental: false
  }),
  l = e => null != o({
    product: e,
    isPremiumUser: false
  }),
  c = e => {
    if (null == e) returnfalse;
    let t = s(e),
      n = l(e);
    return t && !n
  },
  u = e => e.filter(e => {
    let t = s(e),
      n = l(e);
    return t && n
  })