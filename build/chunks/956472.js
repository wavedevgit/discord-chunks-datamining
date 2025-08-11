/** Chunk was on 34779 **/
/** chunk id: 956472, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ip: () => g,
  T4: () => u,
  oQ: () => f,
  oo: () => h
}), require("./539854.js");
var Chunk932563 = require("./932563.js"),
  Chunk822857 = require("./822857.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js");
let c = e => {
    var t, n, r, i;
    let {
      product: l,
      isPremiumUser: o
    } = e;
    return null != (i = null == (r = l.prices[o ? a.tuJ.PREMIUM_TIER_2 : a.tuJ.DEFAULT]) || null == (n = r.countryPrices) || null == (t = n.prices) ? true : t.slice(0, 2)) ? i : []
  },
  u = e => {
    var t;
    let {
      product: n,
      isPremiumUser: r
    } = e;
    return null != (t = c({
      product: n,
      isPremiumUser: r
    }).find(e => e.currency === a.pKx.DISCORD_ORB)) ? t : null
  },
  d = e => {
    let {
      product: t,
      isPremiumUser: n
    } = e, r = c({
      product: t,
      isPremiumUser: n
    }), {
      enabled: l
    } = (0, i.CE)({
      location: "getShopBasePricingData"
    }), o = l ? r.find(e => e.currency === a.pKx.DISCORD_ORB) : true, s = r.find(e => e.currency !== a.pKx.DISCORD_ORB), u = 1 === r.length && null != o;
    return {
      orbPrice: o,
      fiatPrice: s,
      isOrbExclusive: u
    }
  },
  h = e => {
    let {
      product: t,
      isPremiumUser: n,
      tab: r,
      hasDiscountOffer: i = false
    } = e, {
      orbPrice: l,
      fiatPrice: o,
      isOrbExclusive: a
    } = d({
      product: t,
      isPremiumUser: n
    }), c = [];
    return r === s.AW.ORBS ? null != l && (c = [l]) : (null != o && c.push(o), null == l || i || c.push(l)), {
      orbPrice: l,
      fiatPrice: o,
      isOrbExclusive: a,
      displayPrices: c
    }
  },
  p = e => {
    var t;
    let {
      hasSufficientOrbs: n,
      orbPrice: r,
      fiatPrice: i,
      isOrbExclusive: l,
      hasDiscountOffer: o = false
    } = e, s = [];
    null != r && null != i ? n && !o ? s.push(r, i) : s.push(i, r) : null != r ? s.push(r) : null != i && s.push(i);
    let c = s.length > 0 && (null == (t = s[0]) ? true : t.currency) === a.pKx.DISCORD_ORB;
    return {
      checkoutEligiblePrices: s,
      isOrbExclusive: l,
      hasSufficientOrbs: n,
      shouldCheckoutWithOrbs: c
    }
  },
  f = e => {
    let {
      product: t
    } = e, n = (0, r.zl)(), i = l.default.getCurrentUser(), {
      orbPrice: s,
      fiatPrice: a,
      isOrbExclusive: c
    } = d({
      product: t,
      isPremiumUser: o.ZP.canUseCollectibles(i)
    }), u = null != s && null != n && n >= s.amount, {
      shouldCheckoutWithOrbs: h
    } = p({
      orbPrice: s,
      fiatPrice: a,
      isOrbExclusive: c,
      hasSufficientOrbs: u
    });
    return h
  };

function g(e) {
  let {
    product: t,
    isPremiumUser: n,
    tab: i,
    hasDiscountOffer: l = false
  } = e, {
    orbPrice: o,
    fiatPrice: s,
    isOrbExclusive: a,
    displayPrices: c
  } = h({
    product: t,
    isPremiumUser: n,
    tab: i,
    hasDiscountOffer: l
  }), u = (0, r.V_)(null != o ? o.amount : null);
  return function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        var r;
        r = n[t], t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = r
      })
    }
    return e
  }({
    displayPrices: c
  }, p({
    orbPrice: o,
    fiatPrice: s,
    isOrbExclusive: a,
    hasSufficientOrbs: u,
    hasDiscountOffer: l
  }))
}