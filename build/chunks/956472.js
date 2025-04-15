/** Chunk was on 12862 **/
n.d(t, {
  Ip: () => f,
  T4: () => u,
  oQ: () => h
}), n(539854);
var i = n(932563),
  r = n(822857),
  l = n(594174),
  o = n(74538),
  s = n(215023),
  a = n(981631);
let c = e => {
    var t, n, i, r;
    let {
      product: l,
      isPremiumUser: o
    } = e;
    return null != (r = null == (i = l.prices[o ? a.tuJ.PREMIUM_TIER_2 : a.tuJ.DEFAULT]) || null == (n = i.countryPrices) || null == (t = n.prices) ? void 0 : t.slice(0, 2)) ? r : []
  },
  u = e => {
    var t;
    let {
      product: n,
      isPremiumUser: i
    } = e;
    return null != (t = c({
      product: n,
      isPremiumUser: i
    }).find(e => e.currency === a.pKx.DISCORD_ORB)) ? t : null
  },
  d = e => {
    var t;
    let {
      product: n,
      isPremiumUser: i,
      tab: l,
      orbBalance: o
    } = e, u = c({
      product: n,
      isPremiumUser: i
    }), {
      enabled: d
    } = (0, r.C)({
      location: "getShopProductPrices"
    }), h = d ? u.find(e => e.currency === a.pKx.DISCORD_ORB) : void 0, f = u.find(e => e.currency !== a.pKx.DISCORD_ORB), p = [], g = [], E = 1 === u.length && null != h, b = null != h && null != o && o >= h.amount;
    null != h && null != f ? (b ? p.push(h, f) : p.push(f, h), l === s.AW.ORBS ? g.push(h) : g.push(f, h)) : null != h ? (p.push(h), g.push(h)) : null != f && (p.push(f), l !== s.AW.ORBS && g.push(f));
    let O = p.length > 0 && (null == (t = p[0]) ? void 0 : t.currency) === a.pKx.DISCORD_ORB;
    return {
      displayPrices: g,
      checkoutEligiblePrices: p,
      isOrbExclusive: E,
      hasSufficientOrbs: b,
      shouldCheckoutWithOrbs: O
    }
  },
  h = e => {
    let {
      tab: t,
      product: n
    } = e, r = (0, i.z)(), s = l.default.getCurrentUser(), {
      shouldCheckoutWithOrbs: a
    } = d({
      product: n,
      isPremiumUser: o.ZP.canUseCollectibles(s),
      orbBalance: r,
      tab: t
    });
    return a
  };

function f(e) {
  let {
    product: t,
    isPremiumUser: n,
    tab: r
  } = e;
  return d({
    product: t,
    isPremiumUser: n,
    tab: r,
    orbBalance: (0, i.c)()
  })
}