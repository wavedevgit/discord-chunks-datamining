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
      product: o,
      isPremiumUser: a
    } = e;
    return null != (i = null == (r = o.prices[a ? l.tuJ.PREMIUM_TIER_2 : l.tuJ.DEFAULT]) || null == (n = r.countryPrices) || null == (t = n.prices) ? true : t.slice(0, 2)) ? i : []
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
      enabled: o
    } = (0, i.CE)({
      location: "getShopBasePricingData"
    }), a = o ? r.find(e => e.currency === l.pKx.DISCORD_ORB) : true, s = r.find(e => e.currency !== l.pKx.DISCORD_ORB), c = 1 === r.length && null != a;
    return {
      orbPrice: a,
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
      orbPrice: o,
      fiatPrice: a,
      isOrbExclusive: l
    } = _({
      product: t,
      isPremiumUser: n
    }), c = [];
    return r === s.AW.ORBS ? null != o && (c = [o]) : (null != a && c.push(a), null == o || i || c.push(o)), {
      orbPrice: o,
      fiatPrice: a,
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
      isOrbExclusive: o,
      hasDiscountOffer: a = false,
      tab: c = null
    } = e, u = [];
    null != r && null != i ? n && (!a || c === s.AW.ORBS) ? u.push(r, i) : u.push(i, r) : null != r ? u.push(r) : null != i && u.push(i);
    let d = u.length > 0 && (null == (t = u[0]) ? true : t.currency) === l.pKx.DISCORD_ORB;
    return {
      checkoutEligiblePrices: u,
      isOrbExclusive: o,
      hasSufficientOrbs: n,
      shouldCheckoutWithOrbs: d
    }
  },
  m = e => {
    let {
      product: t
    } = e, n = (0, r.zl)(), i = o.default.getCurrentUser(), {
      orbPrice: s,
      fiatPrice: l,
      isOrbExclusive: c
    } = _({
      product: t,
      isPremiumUser: a.ZP.canUseCollectibles(i)
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
    hasDiscountOffer: o = false
  } = e, {
    orbPrice: a,
    fiatPrice: s,
    isOrbExclusive: l,
    displayPrices: c
  } = p({
    product: t,
    isPremiumUser: n,
    tab: i,
    hasDiscountOffer: o
  }), d = (0, r.V_)(null != a ? a.amount : null);
  return u({
    displayPrices: c
  }, h({
    orbPrice: a,
    fiatPrice: s,
    isOrbExclusive: l,
    hasSufficientOrbs: d,
    hasDiscountOffer: o,
    tab: i
  }))
}