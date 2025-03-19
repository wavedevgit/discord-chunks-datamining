/** Chunk was on 95682 **/
n.d(t, {
  Ip: () => u,
  oQ: () => c
}), n(47120);
var r = n(932563),
  i = n(594174),
  o = n(74538),
  l = n(215023),
  a = n(981631);
let s = e => {
    var t, n, r, i;
    let {
      product: o,
      isPremiumUser: s,
      tab: c,
      orbBalance: u
    } = e, d = null !== (i = null === (r = o.prices[s ? a.tuJ.PREMIUM_TIER_2 : a.tuJ.DEFAULT]) || void 0 === r ? void 0 : null === (n = r.countryPrices) || void 0 === n ? void 0 : null === (t = n.prices) || void 0 === t ? void 0 : t.slice(0, 2)) && void 0 !== i ? i : [], h = d.find(e => e.currency === a.pKx.DISCORD_ORB), b = 1 === d.length && null != h;
    return c === l.AW.ORBS ? null != h ? {
      displayPrices: [h],
      checkoutEligiblePrices: [h],
      isOrbExclusive: b,
      shouldCheckoutWithOrbs: !0
    } : {
      displayPrices: [],
      checkoutEligiblePrices: [],
      isOrbExclusive: b,
      shouldCheckoutWithOrbs: !1
    } : null != h && null != u && u >= h.amount ? {
      displayPrices: d,
      checkoutEligiblePrices: [h, ...d.filter(e => e !== h)],
      isOrbExclusive: b,
      shouldCheckoutWithOrbs: !0
    } : {
      displayPrices: d,
      checkoutEligiblePrices: d,
      isOrbExclusive: b,
      shouldCheckoutWithOrbs: !1
    }
  },
  c = e => {
    let {
      tab: t,
      product: n
    } = e, l = (0, r.z)(), a = i.default.getCurrentUser(), {
      shouldCheckoutWithOrbs: c
    } = s({
      product: n,
      isPremiumUser: o.ZP.canUseCollectibles(a),
      orbBalance: l,
      tab: t
    });
    return c
  };

function u(e) {
  let {
    product: t,
    isPremiumUser: n,
    tab: i
  } = e;
  return s({
    product: t,
    isPremiumUser: n,
    tab: i,
    orbBalance: (0, r.c)()
  })
}