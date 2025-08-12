/** Chunk was on 96910 **/
/** chunk id: 956472, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Ip: () => f,
  T4: () => u,
  oQ: () => h,
  oo: () => p
}), require("./539854.js");
var Chunk932563 = require("./932563.js"),
  Chunk822857 = require("./822857.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js");
let c = e => {
    var t, r, n, a;
    let {
      product: i,
      isPremiumUser: l
    } = e;
    return null != (a = null == (n = i.prices[l ? s.tuJ.PREMIUM_TIER_2 : s.tuJ.DEFAULT]) || null == (r = n.countryPrices) || null == (t = r.prices) ? true : t.slice(0, 2)) ? a : []
  },
  u = e => {
    var t;
    let {
      product: r,
      isPremiumUser: n
    } = e;
    return null != (t = c({
      product: r,
      isPremiumUser: n
    }).find(e => e.currency === s.pKx.DISCORD_ORB)) ? t : null
  },
  d = e => {
    let {
      product: t,
      isPremiumUser: r
    } = e, n = c({
      product: t,
      isPremiumUser: r
    }), {
      enabled: i
    } = (0, a.CE)({
      location: "getShopBasePricingData"
    }), l = i ? n.find(e => e.currency === s.pKx.DISCORD_ORB) : true, o = n.find(e => e.currency !== s.pKx.DISCORD_ORB), u = 1 === n.length && null != l;
    return {
      orbPrice: l,
      fiatPrice: o,
      isOrbExclusive: u
    }
  },
  p = e => {
    let {
      product: t,
      isPremiumUser: r,
      tab: n,
      hasDiscountOffer: a = false
    } = e, {
      orbPrice: i,
      fiatPrice: l,
      isOrbExclusive: s
    } = d({
      product: t,
      isPremiumUser: r
    }), c = [];
    return n === o.AW.ORBS ? null != i && (c = [i]) : (null != l && c.push(l), null == i || a || c.push(i)), {
      orbPrice: i,
      fiatPrice: l,
      isOrbExclusive: s,
      displayPrices: c
    }
  },
  b = e => {
    var t;
    let {
      hasSufficientOrbs: r,
      orbPrice: n,
      fiatPrice: a,
      isOrbExclusive: i,
      hasDiscountOffer: l = false
    } = e, o = [];
    null != n && null != a ? r && !l ? o.push(n, a) : o.push(a, n) : null != n ? o.push(n) : null != a && o.push(a);
    let c = o.length > 0 && (null == (t = o[0]) ? true : t.currency) === s.pKx.DISCORD_ORB;
    return {
      checkoutEligiblePrices: o,
      isOrbExclusive: i,
      hasSufficientOrbs: r,
      shouldCheckoutWithOrbs: c
    }
  },
  h = e => {
    let {
      product: t
    } = e, r = (0, n.zl)(), a = i.default.getCurrentUser(), {
      orbPrice: o,
      fiatPrice: s,
      isOrbExclusive: c
    } = d({
      product: t,
      isPremiumUser: l.ZP.canUseCollectibles(a)
    }), u = null != o && null != r && r >= o.amount, {
      shouldCheckoutWithOrbs: p
    } = b({
      orbPrice: o,
      fiatPrice: s,
      isOrbExclusive: c,
      hasSufficientOrbs: u
    });
    return p
  };

function f(e) {
  let {
    product: t,
    isPremiumUser: r,
    tab: a,
    hasDiscountOffer: i = false
  } = e, {
    orbPrice: l,
    fiatPrice: o,
    isOrbExclusive: s,
    displayPrices: c
  } = p({
    product: t,
    isPremiumUser: r,
    tab: a,
    hasDiscountOffer: i
  }), u = (0, n.V_)(null != l ? l.amount : null);
  return function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
        n = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable
      }))), n.forEach(function(t) {
        var n;
        n = r[t], t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = n
      })
    }
    return e
  }({
    displayPrices: c
  }, b({
    orbPrice: l,
    fiatPrice: o,
    isOrbExclusive: s,
    hasSufficientOrbs: u,
    hasDiscountOffer: i
  }))
}