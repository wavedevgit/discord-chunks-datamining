/** Chunk was on 95193 **/
n.d(t, {
  Ip: () => f,
  T4: () => c,
  oQ: () => g,
  oo: () => h
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
    let {
      product: t,
      isPremiumUser: n
    } = e, i = u({
      product: t,
      isPremiumUser: n
    }), {
      enabled: l
    } = (0, r.CE)({
      location: "getShopBasePricingData"
    }), o = l ? i.find(e => e.currency === a.pKx.DISCORD_ORB) : void 0, s = i.find(e => e.currency !== a.pKx.DISCORD_ORB), c = 1 === i.length && null != o;
    return {
      orbPrice: o,
      fiatPrice: s,
      isOrbExclusive: c
    }
  },
  h = e => {
    let {
      product: t,
      isPremiumUser: n,
      tab: i,
      hasDiscountOffer: r = !1
    } = e, {
      orbPrice: l,
      fiatPrice: o,
      isOrbExclusive: a
    } = d({
      product: t,
      isPremiumUser: n
    }), u = [];
    return i === s.AW.ORBS ? null != l && (u = [l]) : (null != o && u.push(o), null == l || r || u.push(l)), {
      orbPrice: l,
      fiatPrice: o,
      isOrbExclusive: a,
      displayPrices: u
    }
  },
  p = e => {
    var t;
    let {
      hasSufficientOrbs: n,
      orbPrice: i,
      fiatPrice: r,
      isOrbExclusive: l,
      hasDiscountOffer: o = !1
    } = e, s = [];
    null != i && null != r ? n && !o ? s.push(i, r) : s.push(r, i) : null != i ? s.push(i) : null != r && s.push(r);
    let u = s.length > 0 && (null == (t = s[0]) ? void 0 : t.currency) === a.pKx.DISCORD_ORB;
    return {
      checkoutEligiblePrices: s,
      isOrbExclusive: l,
      hasSufficientOrbs: n,
      shouldCheckoutWithOrbs: u
    }
  },
  g = e => {
    let {
      product: t
    } = e, n = (0, i.zl)(), r = l.default.getCurrentUser(), {
      orbPrice: s,
      fiatPrice: a,
      isOrbExclusive: u
    } = d({
      product: t,
      isPremiumUser: o.ZP.canUseCollectibles(r)
    }), c = null != s && null != n && n >= s.amount, {
      shouldCheckoutWithOrbs: h
    } = p({
      orbPrice: s,
      fiatPrice: a,
      isOrbExclusive: u,
      hasSufficientOrbs: c
    });
    return h
  };

function f(e) {
  let {
    product: t,
    isPremiumUser: n,
    tab: r,
    hasDiscountOffer: l = !1
  } = e, {
    orbPrice: o,
    fiatPrice: s,
    isOrbExclusive: a,
    displayPrices: u
  } = h({
    product: t,
    isPremiumUser: n,
    tab: r,
    hasDiscountOffer: l
  }), c = (0, i.V_)(null != o ? o.amount : null);
  return function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        i = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), i.forEach(function(t) {
        var i;
        i = n[t], t in e ? Object.defineProperty(e, t, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = i
      })
    }
    return e
  }({
    displayPrices: u
  }, p({
    orbPrice: o,
    fiatPrice: s,
    isOrbExclusive: a,
    hasSufficientOrbs: c,
    hasDiscountOffer: l
  }))
}