/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  Ip: () => u,
  oQ: () => c
}), r(47120);
var n = r(932563),
  l = r(594174),
  i = r(74538),
  o = r(215023),
  a = r(981631);
let s = e => {
    var t, r, n, l;
    let {
      product: i,
      isPremiumUser: s,
      tab: c,
      orbBalance: u
    } = e, d = null !== (l = null === (n = i.prices[s ? a.tuJ.PREMIUM_TIER_2 : a.tuJ.DEFAULT]) || void 0 === n ? void 0 : null === (r = n.countryPrices) || void 0 === r ? void 0 : null === (t = r.prices) || void 0 === t ? void 0 : t.slice(0, 2)) && void 0 !== l ? l : [], p = d.find(e => e.currency === a.pKx.DISCORD_ORB), f = 1 === d.length && null != p;
    return c === o.AW.ORBS ? null != p ? {
      displayPrices: [p],
      checkoutEligiblePrices: [p],
      isOrbExclusive: f,
      shouldCheckoutWithOrbs: !0
    } : {
      displayPrices: [],
      checkoutEligiblePrices: [],
      isOrbExclusive: f,
      shouldCheckoutWithOrbs: !1
    } : null != p && null != u && u >= p.amount ? {
      displayPrices: d,
      checkoutEligiblePrices: [p, ...d.filter(e => e !== p)],
      isOrbExclusive: f,
      shouldCheckoutWithOrbs: !0
    } : {
      displayPrices: d,
      checkoutEligiblePrices: d,
      isOrbExclusive: f,
      shouldCheckoutWithOrbs: !1
    }
  },
  c = e => {
    let {
      tab: t,
      product: r
    } = e, o = (0, n.z)(), a = l.default.getCurrentUser(), {
      shouldCheckoutWithOrbs: c
    } = s({
      product: r,
      isPremiumUser: i.ZP.canUseCollectibles(a),
      orbBalance: o,
      tab: t
    });
    return c
  };

function u(e) {
  let {
    product: t,
    isPremiumUser: r,
    tab: l
  } = e;
  return s({
    product: t,
    isPremiumUser: r,
    tab: l,
    orbBalance: (0, n.c)()
  })
}