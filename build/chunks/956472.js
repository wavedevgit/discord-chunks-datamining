/** Chunk was on 93886 **/
/** chunk id: 956472, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ip: () => f,
  oQ: () => _,
  oo: () => d
}), require("./539854.js");
var Chunk932563 = require("./932563.js"),
  Chunk825102 = require("./825102.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk27123 = require("./27123.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js");
let u = e => {
    let {
      product: t,
      isPremiumUser: n
    } = e, r = (0, a.v)({
      product: t,
      isPremiumUser: n
    }), {
      enabled: o
    } = (0, i.CE)({
      location: "getShopBasePricingData"
    }), l = o ? r.find(e => e.currency === c.pKx.DISCORD_ORB) : true, s = r.find(e => e.currency !== c.pKx.DISCORD_ORB), u = 1 === r.length && null != l;
    return {
      orbPrice: l,
      fiatPrice: s,
      isOrbExclusive: u
    }
  },
  d = e => {
    let {
      product: t,
      isPremiumUser: n,
      tab: r,
      hasDiscountOffer: i = false
    } = e, {
      orbPrice: o,
      fiatPrice: l,
      isOrbExclusive: a
    } = u({
      product: t,
      isPremiumUser: n
    }), c = [];
    return r === s.AW.ORBS ? null != o && (c = [o]) : (null != l && c.push(l), null == o || i || c.push(o)), {
      orbPrice: o,
      fiatPrice: l,
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
      isOrbExclusive: o,
      hasDiscountOffer: l = false,
      tab: a = null
    } = e, u = [];
    null != r && null != i ? n && (!l || a === s.AW.ORBS) ? u.push(r, i) : u.push(i, r) : null != r ? u.push(r) : null != i && u.push(i);
    let d = u.length > 0 && (null == (t = u[0]) ? true : t.currency) === c.pKx.DISCORD_ORB;
    return {
      checkoutEligiblePrices: u,
      isOrbExclusive: o,
      hasSufficientOrbs: n,
      shouldCheckoutWithOrbs: d
    }
  },
  _ = e => {
    let {
      product: t
    } = e, n = (0, r.zl)(), i = o.default.getCurrentUser(), {
      orbPrice: a,
      fiatPrice: s,
      isOrbExclusive: c
    } = u({
      product: t,
      isPremiumUser: l.ZP.canUseCollectibles(i)
    }), d = null != a && null != n && n >= a.amount, {
      shouldCheckoutWithOrbs: _
    } = p({
      orbPrice: a,
      fiatPrice: s,
      isOrbExclusive: c,
      hasSufficientOrbs: d
    });
    return _
  };

function f(e) {
  let {
    product: t,
    isPremiumUser: n,
    tab: i,
    hasDiscountOffer: o = false
  } = e, {
    orbPrice: l,
    fiatPrice: a,
    isOrbExclusive: s,
    displayPrices: c
  } = d({
    product: t,
    isPremiumUser: n,
    tab: i,
    hasDiscountOffer: o
  }), u = (0, r.V_)(null != l ? l.amount : null);
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
    orbPrice: l,
    fiatPrice: a,
    isOrbExclusive: s,
    hasSufficientOrbs: u,
    hasDiscountOffer: o,
    tab: i
  }))
}