/** Chunk was on web.js **/
/** chunk id: 956472, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ip: () => m,
  oQ: () => h,
  oo: () => _
}), require("./539854.js");
var Chunk932563 = require("./932563.js"),
  Chunk825102 = require("./825102.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk27123 = require("./27123.js"),
  Chunk786040 = require("./786040.js"),
  Chunk981631 = require("./981631.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}
let f = e => {
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
    }), o = a ? r.find(e => e.currency === c.pKx.DISCORD_ORB) : true, l = r.find(e => e.currency !== c.pKx.DISCORD_ORB), u = 1 === r.length && null != o;
    return {
      orbPrice: o,
      fiatPrice: l,
      isOrbExclusive: u
    }
  },
  _ = e => {
    let {
      product: t,
      isPremiumUser: n,
      prioritizedCurrency: r,
      hasDiscountOffer: i = false
    } = e, {
      orbPrice: a,
      fiatPrice: o,
      isOrbExclusive: s
    } = f({
      product: t,
      isPremiumUser: n
    }), c = [];
    return r === l.tA.ORBS ? null != a && (c = [a]) : (null != o && c.push(o), null == a || i || c.push(a)), {
      orbPrice: a,
      fiatPrice: o,
      isOrbExclusive: s,
      displayPrices: c
    }
  },
  p = e => {
    var t;
    let {
      hasSufficientOrbs: n,
      orbPrice: r,
      fiatPrice: i,
      isOrbExclusive: a,
      hasDiscountOffer: o = false,
      prioritizedCurrency: s = null
    } = e, u = [], d = s === l.tA.ORBS;
    null != r && null != i ? d || n && !o ? u.push(r, i) : u.push(i, r) : null != r ? u.push(r) : null != i && u.push(i);
    let f = u.length > 0 && (null == (t = u[0]) ? true : t.currency) === c.pKx.DISCORD_ORB;
    return {
      checkoutEligiblePrices: u,
      isOrbExclusive: a,
      hasSufficientOrbs: n,
      shouldCheckoutWithOrbs: f
    }
  },
  h = e => {
    let {
      product: t
    } = e, n = (0, r.zl)(), i = a.default.getCurrentUser(), {
      orbPrice: s,
      fiatPrice: l,
      isOrbExclusive: c
    } = f({
      product: t,
      isPremiumUser: o.ZP.canUseCollectibles(i)
    }), u = null != s && null != n && n >= s.amount, {
      shouldCheckoutWithOrbs: d
    } = p({
      orbPrice: s,
      fiatPrice: l,
      isOrbExclusive: c,
      hasSufficientOrbs: u
    });
    return d
  };

function m(e) {
  let {
    product: t,
    isPremiumUser: n,
    prioritizedCurrency: i,
    hasDiscountOffer: a = false
  } = e, {
    orbPrice: o,
    fiatPrice: s,
    isOrbExclusive: l,
    displayPrices: c
  } = _({
    product: t,
    isPremiumUser: n,
    prioritizedCurrency: i,
    hasDiscountOffer: a
  }), u = (0, r.V_)(null != o ? o.amount : null);
  return d({
    displayPrices: c
  }, p({
    orbPrice: o,
    fiatPrice: s,
    isOrbExclusive: l,
    hasSufficientOrbs: u,
    hasDiscountOffer: a,
    prioritizedCurrency: i
  }))
}