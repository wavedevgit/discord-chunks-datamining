/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  I: () => a
}), r(47120);
var n = r(932563),
  l = r(215023),
  i = r(981631);

function a(e) {
  var t, r, a, o;
  let {
    product: s,
    isPremiumUser: c,
    tab: d
  } = e, u = null !== (o = null === (a = s.prices[c ? i.tuJ.PREMIUM_TIER_2 : i.tuJ.DEFAULT]) || void 0 === a ? void 0 : null === (r = a.countryPrices) || void 0 === r ? void 0 : null === (t = r.prices) || void 0 === t ? void 0 : t.slice(0, 2)) && void 0 !== o ? o : [], p = (0, n.c)(), f = u.find(e => e.currency === i.pKx.DISCORD_ORB), h = 1 === u.length && null != f;
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