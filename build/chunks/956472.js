/** Chunk was on 18475 **/
n.d(t, {
  Ip: () => f,
  T4: () => u,
  oQ: () => p
}), n(653041);
var r = n(932563),
  i = n(822857),
  o = n(594174),
  l = n(74538),
  a = n(215023),
  s = n(981631);
let c = e => {
    var t, n, r, i;
    let {
      product: o,
      isPremiumUser: l
    } = e;
    return null !== (i = null === (r = o.prices[l ? s.tuJ.PREMIUM_TIER_2 : s.tuJ.DEFAULT]) || void 0 === r ? void 0 : null === (n = r.countryPrices) || void 0 === n ? void 0 : null === (t = n.prices) || void 0 === t ? void 0 : t.slice(0, 2)) && void 0 !== i ? i : []
  },
  u = e => {
    var t;
    let {
      product: n,
      isPremiumUser: r
    } = e;
    return null !== (t = c({
      product: n,
      isPremiumUser: r
    }).find(e => e.currency === s.pKx.DISCORD_ORB)) && void 0 !== t ? t : null
  },
  d = e => {
    var t;
    let {
      product: n,
      isPremiumUser: r,
      tab: o,
      orbBalance: l
    } = e, u = c({
      product: n,
      isPremiumUser: r
    }), {
      enabled: d
    } = (0, i.C)({
      location: "getShopProductPrices"
    }), p = d ? u.find(e => e.currency === s.pKx.DISCORD_ORB) : void 0, f = u.find(e => e.currency !== s.pKx.DISCORD_ORB), h = [], _ = [], m = 1 === u.length && null != p, b = null != p && null != l && l >= p.amount;
    null != p && null != f ? (b ? h.push(p, f) : h.push(f, p), o === a.AW.ORBS ? _.push(p) : _.push(f, p)) : null != p ? (h.push(p), _.push(p)) : null != f && (h.push(f), o !== a.AW.ORBS && _.push(f));
    let g = h.length > 0 && (null === (t = h[0]) || void 0 === t ? void 0 : t.currency) === s.pKx.DISCORD_ORB;
    return {
      displayPrices: _,
      checkoutEligiblePrices: h,
      isOrbExclusive: m,
      hasSufficientOrbs: b,
      shouldCheckoutWithOrbs: g
    }
  },
  p = e => {
    let {
      tab: t,
      product: n
    } = e, i = (0, r.z)(), a = o.default.getCurrentUser(), {
      shouldCheckoutWithOrbs: s
    } = d({
      product: n,
      isPremiumUser: l.ZP.canUseCollectibles(a),
      orbBalance: i,
      tab: t
    });
    return s
  };

function f(e) {
  let {
    product: t,
    isPremiumUser: n,
    tab: i
  } = e;
  return d({
    product: t,
    isPremiumUser: n,
    tab: i,
    orbBalance: (0, r.c)()
  })
}