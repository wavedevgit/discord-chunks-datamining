/** Chunk was on web.js **/
/** chunk id: 956472, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ip: () => g,
  T4: () => f,
  oQ: () => m,
  oo: () => p
}), require("./539854.js");
var Chunk932563 = require("./932563.js"),
  Chunk822857 = require("./822857.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}
let d = e => {
    var t, n, r, i;
    let {
      product: a,
      isPremiumUser: o
    } = e;
    return null != (i = null == (r = a.prices[o ? l.tuJ.PREMIUM_TIER_2 : l.tuJ.DEFAULT]) || null == (n = r.countryPrices) || null == (t = n.prices) ? true : t.slice(0, 2)) ? i : []
  },
  f = e => {
    var t;
    let {
      product: n,
      isPremiumUser: r
    } = e;
    return null != (t = d({
      product: n,
      isPremiumUser: r
    }).find(e => e.currency === l.pKx.DISCORD_ORB)) ? t : null
  },
  _ = e => {
    let {
      product: t,
      isPremiumUser: n
    } = e, r = d({
      product: t,
      isPremiumUser: n
    }), {
      enabled: a
    } = (0, i.CE)({
      location: "getShopBasePricingData"
    }), o = a ? r.find(e => e.currency === l.pKx.DISCORD_ORB) : true, s = r.find(e => e.currency !== l.pKx.DISCORD_ORB), c = 1 === r.length && null != o;
    return {
      orbPrice: o,
      fiatPrice: s,
      isOrbExclusive: c
    }
  },
  p = e => {
    let {
      product: t,
      isPremiumUser: n,
      tab: r,
      hasDiscountOffer: i = false
    } = e, {
      orbPrice: a,
      fiatPrice: o,
      isOrbExclusive: l
    } = _({
      product: t,
      isPremiumUser: n
    }), c = [];
    return r === s.AW.ORBS ? null != a && (c = [a]) : (null != o && c.push(o), null == a || i || c.push(a)), {
      orbPrice: a,
      fiatPrice: o,
      isOrbExclusive: l,
      displayPrices: c
    }
  },
  h = e => {
    var t;
    let {
      hasSufficientOrbs: n,
      orbPrice: r,
      fiatPrice: i,
      isOrbExclusive: a,
      hasDiscountOffer: o = false
    } = e, s = [];
    null != r && null != i ? n && !o ? s.push(r, i) : s.push(i, r) : null != r ? s.push(r) : null != i && s.push(i);
    let c = s.length > 0 && (null == (t = s[0]) ? true : t.currency) === l.pKx.DISCORD_ORB;
    return {
      checkoutEligiblePrices: s,
      isOrbExclusive: a,
      hasSufficientOrbs: n,
      shouldCheckoutWithOrbs: c
    }
  },
  m = e => {
    let {
      product: t
    } = e, n = (0, r.zl)(), i = a.default.getCurrentUser(), {
      orbPrice: s,
      fiatPrice: l,
      isOrbExclusive: c
    } = _({
      product: t,
      isPremiumUser: o.ZP.canUseCollectibles(i)
    }), u = null != s && null != n && n >= s.amount, {
      shouldCheckoutWithOrbs: d
    } = h({
      orbPrice: s,
      fiatPrice: l,
      isOrbExclusive: c,
      hasSufficientOrbs: u
    });
    return d
  };

function g(e) {
  let {
    product: t,
    isPremiumUser: n,
    tab: i,
    hasDiscountOffer: a = false
  } = e, {
    orbPrice: o,
    fiatPrice: s,
    isOrbExclusive: l,
    displayPrices: c
  } = p({
    product: t,
    isPremiumUser: n,
    tab: i,
    hasDiscountOffer: a
  }), d = (0, r.V_)(null != o ? o.amount : null);
  return u({
    displayPrices: c
  }, h({
    orbPrice: o,
    fiatPrice: s,
    isOrbExclusive: l,
    hasSufficientOrbs: d,
    hasDiscountOffer: a
  }))
}