/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  I: () => o
}), r(47120);
var n = r(932563),
  l = r(215023),
  i = r(981631);

function o(e) {
  var t, r, o, a;
  let {
    product: s,
    isPremiumUser: c,
    tab: d
  } = e, u = null !== (a = null === (o = s.prices[c ? i.tuJ.PREMIUM_TIER_2 : i.tuJ.DEFAULT]) || void 0 === o ? void 0 : null === (r = o.countryPrices) || void 0 === r ? void 0 : null === (t = r.prices) || void 0 === t ? void 0 : t.slice(0, 2)) && void 0 !== a ? a : [], p = (0, n.c)(), f = u.find(e => e.currency === i.pKx.DISCORD_ORB), h = 1 === u.length && null != f;
  return d === l.AW.ORBS ? null != f ? {
    displayPrices: [f],
    checkoutEligiblePrices: [f],
    isOrbExclusive: h
  } : {
    displayPrices: [],
    checkoutEligiblePrices: [],
    isOrbExclusive: h
  } : null != f && null != p && p >= f.amount ? {
    displayPrices: u,
    checkoutEligiblePrices: [f, ...u.filter(e => e !== f)],
    isOrbExclusive: h
  } : {
    displayPrices: u,
    checkoutEligiblePrices: u,
    isOrbExclusive: h
  }
}