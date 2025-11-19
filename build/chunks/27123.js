/** Chunk was on web.js **/
/** chunk id: 27123, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T4: () => o,
  cf: () => l,
  r1: () => s,
  vH: () => a
}), require("./388685.js");
var Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js");
let a = e => {
    var t, n, r, a;
    let {
      product: o,
      isPremiumUser: s
    } = e;
    return null != (a = null == (r = o.prices[s ? i.tuJ.PREMIUM_TIER_2 : i.tuJ.DEFAULT]) || null == (n = r.countryPrices) || null == (t = n.prices) ? true : t.slice(0, 2)) ? a : []
  },
  o = e => {
    var t;
    let {
      product: n,
      isPremiumUser: o,
      isRental: s
    } = e;
    return s ? r.sT : null != (t = a({
      product: n,
      isPremiumUser: o
    }).find(e => e.currency === i.pKx.DISCORD_ORB)) ? t : null
  },
  s = e => {
    if (null == e) returnfalse;
    let t = a({
      product: e,
      isPremiumUser: false
    });
    return t.length > 0 && true === t.find(e => e.currency !== i.pKx.DISCORD_ORB)
  },
  l = e => e.filter(e => {
    let t = a({
        product: e,
        isPremiumUser: false
      }),
      n = false,
      r = false;
    for (let e of t)
      if (e.currency === i.pKx.DISCORD_ORB ? n = true : r = true, n && r) break;
    return n && r
  })