/** Chunk was on 74249 **/
n.d(t, {
  Ip: () => b,
  T4: () => u,
  oQ: () => h
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
    }), h = d ? u.find(e => e.currency === s.pKx.DISCORD_ORB) : void 0, b = u.find(e => e.currency !== s.pKx.DISCORD_ORB), p = [], f = [], g = 1 === u.length && null != h, O = null != h && null != l && l >= h.amount;
    null != h && null != b ? (O ? p.push(h, b) : p.push(b, h), o === a.AW.ORBS ? f.push(h) : f.push(b, h)) : null != h ? (p.push(h), f.push(h)) : null != b && (p.push(b), o !== a.AW.ORBS && f.push(b));
    let v = p.length > 0 && (null === (t = p[0]) || void 0 === t ? void 0 : t.currency) === s.pKx.DISCORD_ORB;
    return {
      displayPrices: f,
      checkoutEligiblePrices: p,
      isOrbExclusive: g,
      hasSufficientOrbs: O,
      shouldCheckoutWithOrbs: v
    }
  },
  h = e => {
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

function b(e) {
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