/** Chunk was on web.js **/
/** chunk id: 27123, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T4: () => a,
  cf: () => s,
  vH: () => i,
  yB: () => o
}), require("./388685.js");
var Chunk981631 = require("./981631.js");
let i = e => {
    var t, n, i, a;
    let {
      product: o,
      isPremiumUser: s
    } = e;
    return null != (a = null == (i = o.prices[s ? r.tuJ.PREMIUM_TIER_2 : r.tuJ.DEFAULT]) || null == (n = i.countryPrices) || null == (t = n.prices) ? true : t.slice(0, 2)) ? a : []
  },
  a = e => {
    var t;
    let {
      product: n,
      isPremiumUser: a
    } = e;
    return null != (t = i({
      product: n,
      isPremiumUser: a
    }).find(e => e.currency === r.pKx.DISCORD_ORB)) ? t : null
  },
  o = e => {
    let t = i({
      product: e,
      isPremiumUser: false
    });
    return t.length > 0 && true === t.find(e => e.currency !== r.pKx.DISCORD_ORB)
  },
  s = e => e.filter(e => {
    let t = i({
        product: e,
        isPremiumUser: false
      }),
      n = false,
      a = false;
    for (let e of t)
      if (e.currency === r.pKx.DISCORD_ORB ? n = true : a = true, n && a) break;
    return n && a
  })