/** Chunk was on 44022 **/
n.d(t, {
  Ip: () => g,
  T4: () => c,
  oQ: () => h
}), n(539854);
var i = n(932563),
  r = n(822857),
  l = n(594174),
  o = n(74538),
  s = n(215023),
  a = n(981631);
let u = e => {
    var t, n, i, r;
    let {
      product: l,
      isPremiumUser: o
    } = e;
    return null != (r = null == (i = l.prices[o ? a.tuJ.PREMIUM_TIER_2 : a.tuJ.DEFAULT]) || null == (n = i.countryPrices) || null == (t = n.prices) ? void 0 : t.slice(0, 2)) ? r : []
  },
  c = e => {
    var t;
    let {
      product: n,
      isPremiumUser: i
    } = e;
    return null != (t = u({
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
    } = e, c = u({
      product: n,
      isPremiumUser: i
    }), {
      enabled: d
    } = (0, r.CE)({
      location: "getShopProductPrices"
    }), h = d ? c.find(e => e.currency === a.pKx.DISCORD_ORB) : void 0, g = c.find(e => e.currency !== a.pKx.DISCORD_ORB), p = [], f = [], E = 1 === c.length && null != h, m = null != h && null != o && o >= h.amount;
    null != h && null != g ? (m ? p.push(h, g) : p.push(g, h), l === s.AW.ORBS ? f.push(h) : f.push(g, h)) : null != h ? (p.push(h), f.push(h)) : null != g && (p.push(g), l !== s.AW.ORBS && f.push(g));
    let b = p.length > 0 && (null == (t = p[0]) ? void 0 : t.currency) === a.pKx.DISCORD_ORB;
    return {
      displayPrices: f,
      checkoutEligiblePrices: p,
      isOrbExclusive: E,
      hasSufficientOrbs: m,
      shouldCheckoutWithOrbs: b
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

function g(e) {
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