/** Chunk was on 40849 **/
/** chunk id: 27123, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  T: () => i,
  v: () => l
});
var Chunk981631 = require("./981631.js");
let l = e => {
    var t, r, l, i;
    let {
      product: a,
      isPremiumUser: u
    } = e;
    return null != (i = null == (l = a.prices[u ? n.tuJ.PREMIUM_TIER_2 : n.tuJ.DEFAULT]) || null == (r = l.countryPrices) || null == (t = r.prices) ? true : t.slice(0, 2)) ? i : []
  },
  i = e => {
    var t;
    let {
      product: r,
      isPremiumUser: i
    } = e;
    return null != (t = l({
      product: r,
      isPremiumUser: i
    }).find(e => e.currency === n.pKx.DISCORD_ORB)) ? t : null
  }