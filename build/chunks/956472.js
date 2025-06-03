/** Chunk was on 77978 **/
n.d(t, {
  Ip: () => p,
  T4: () => c,
  oQ: () => f,
  oo: () => h
}), n(539854);
var i = n(932563),
  l = n(822857),
  r = n(594174),
  o = n(74538),
  s = n(215023),
  a = n(981631);
let u = e => {
    var t, n, i, l;
    let {
      product: r,
      isPremiumUser: o
    } = e;
    return null != (l = null == (i = r.prices[o ? a.tuJ.PREMIUM_TIER_2 : a.tuJ.DEFAULT]) || null == (n = i.countryPrices) || null == (t = n.prices) ? void 0 : t.slice(0, 2)) ? l : []
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
      enabled: r
    } = (0, l.CE)({
      location: "getShopBasePricingData"
    }), o = r ? i.find(e => e.currency === a.pKx.DISCORD_ORB) : void 0, s = i.find(e => e.currency !== a.pKx.DISCORD_ORB), c = 1 === i.length && null != o;
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
      tab: i
    } = e, {
      orbPrice: l,
      fiatPrice: r,
      isOrbExclusive: o
    } = d({
      product: t,
      isPremiumUser: n
    }), a = [];
    return i === s.AW.ORBS ? null != l && (a = [l]) : (null != r && a.push(r), null != l && a.push(l)), {
      orbPrice: l,
      fiatPrice: r,
      isOrbExclusive: o,
      displayPrices: a
    }
  },
  g = e => {
    var t;
    let {
      hasSufficientOrbs: n,
      orbPrice: i,
      fiatPrice: l,
      isOrbExclusive: r
    } = e, o = [];
    null != i && null != l ? n ? o.push(i, l) : o.push(l, i) : null != i ? o.push(i) : null != l && o.push(l);
    let s = o.length > 0 && (null == (t = o[0]) ? void 0 : t.currency) === a.pKx.DISCORD_ORB;
    return {
      checkoutEligiblePrices: o,
      isOrbExclusive: r,
      hasSufficientOrbs: n,
      shouldCheckoutWithOrbs: s
    }
  },
  f = e => {
    let {
      product: t
    } = e, n = (0, i.zl)(), l = r.default.getCurrentUser(), {
      orbPrice: s,
      fiatPrice: a,
      isOrbExclusive: u
    } = d({
      product: t,
      isPremiumUser: o.ZP.canUseCollectibles(l)
    }), c = null != s && null != n && n >= s.amount, {
      shouldCheckoutWithOrbs: h
    } = g({
      orbPrice: s,
      fiatPrice: a,
      isOrbExclusive: u,
      hasSufficientOrbs: c
    });
    return h
  };

function p(e) {
  let {
    product: t,
    isPremiumUser: n,
    tab: l
  } = e, {
    orbPrice: r,
    fiatPrice: o,
    isOrbExclusive: s,
    displayPrices: a
  } = h({
    product: t,
    isPremiumUser: n,
    tab: l
  }), u = (0, i.V_)(null != r ? r.amount : null);
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
    displayPrices: a
  }, g({
    orbPrice: r,
    fiatPrice: o,
    isOrbExclusive: s,
    hasSufficientOrbs: u
  }))
}