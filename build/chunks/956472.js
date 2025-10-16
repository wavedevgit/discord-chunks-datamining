/** Chunk was on web.js **/
/** chunk id: 956472, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ip: () => g,
  oQ: () => m,
  oo: () => p
}), require("./539854.js");
var Chunk932563 = require("./932563.js"),
  Chunk825102 = require("./825102.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk27123 = require("./27123.js"),
  Chunk786040 = require("./786040.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}
let _ = e => {
    let {
      product: t,
      isPremiumUser: n
    } = e, r = (0, s.vH)({
      product: t,
      isPremiumUser: n
    }), {
      enabled: a
    } = (0, i.CE)({
      location: "getShopBasePricingData"
    }), o = a ? r.find(e => e.currency === u.pKx.DISCORD_ORB) : true, l = r.find(e => e.currency !== u.pKx.DISCORD_ORB), c = 1 === r.length && null != o;
    return {
      orbPrice: o,
      fiatPrice: l,
      isOrbExclusive: c
    }
  },
  p = e => {
    let {
      product: t,
      isPremiumUser: n,
      tab: r,
      prioritizedCurrency: i,
      hasDiscountOffer: a = false
    } = e, {
      orbPrice: o,
      fiatPrice: s,
      isOrbExclusive: u
    } = _({
      product: t,
      isPremiumUser: n
    }), d = [];
    return r === c.AW.ORBS || i === l.tA.ORBS ? null != o && (d = [o]) : (null != s && d.push(s), null == o || a || d.push(o)), {
      orbPrice: o,
      fiatPrice: s,
      isOrbExclusive: u,
      displayPrices: d
    }
  },
  h = e => {
    var t;
    let {
      hasSufficientOrbs: n,
      orbPrice: r,
      fiatPrice: i,
      isOrbExclusive: a,
      hasDiscountOffer: o = false,
      tab: s = null,
      prioritizedCurrency: d = null
    } = e, f = [], _ = s === c.AW.ORBS || d === l.tA.ORBS;
    null != r && null != i ? n && (!o || _) ? f.push(r, i) : f.push(i, r) : null != r ? f.push(r) : null != i && f.push(i);
    let p = f.length > 0 && (null == (t = f[0]) ? true : t.currency) === u.pKx.DISCORD_ORB;
    return {
      checkoutEligiblePrices: f,
      isOrbExclusive: a,
      hasSufficientOrbs: n,
      shouldCheckoutWithOrbs: p
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
    prioritizedCurrency: a,
    hasDiscountOffer: o = false
  } = e, {
    orbPrice: s,
    fiatPrice: l,
    isOrbExclusive: c,
    displayPrices: u
  } = p({
    product: t,
    isPremiumUser: n,
    tab: i,
    prioritizedCurrency: a,
    hasDiscountOffer: o
  }), d = (0, r.V_)(null != s ? s.amount : null);
  return f({
    displayPrices: u
  }, h({
    orbPrice: s,
    fiatPrice: l,
    isOrbExclusive: c,
    hasSufficientOrbs: d,
    hasDiscountOffer: o,
    tab: i,
    prioritizedCurrency: a
  }))
}