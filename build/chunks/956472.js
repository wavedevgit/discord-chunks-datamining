/** Chunk was on 204 **/
/** chunk id: 956472, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Ip: () => b,
  oQ: () => f,
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
      isPremiumUser: r
    } = e, n = (0, o.v)({
      product: t,
      isPremiumUser: r
    }), {
      enabled: i
    } = (0, l.CE)({
      location: "getShopBasePricingData"
    }), a = i ? n.find(e => e.currency === c.pKx.DISCORD_ORB) : true, s = n.find(e => e.currency !== c.pKx.DISCORD_ORB), u = 1 === n.length && null != a;
    return {
      orbPrice: a,
      fiatPrice: s,
      isOrbExclusive: u
    }
  },
  d = e => {
    let {
      product: t,
      isPremiumUser: r,
      tab: n,
      hasDiscountOffer: l = false
    } = e, {
      orbPrice: i,
      fiatPrice: a,
      isOrbExclusive: o
    } = u({
      product: t,
      isPremiumUser: r
    }), c = [];
    return n === s.AW.ORBS ? null != i && (c = [i]) : (null != a && c.push(a), null == i || l || c.push(i)), {
      orbPrice: i,
      fiatPrice: a,
      isOrbExclusive: o,
      displayPrices: c
    }
  },
  p = e => {
    var t;
    let {
      hasSufficientOrbs: r,
      orbPrice: n,
      fiatPrice: l,
      isOrbExclusive: i,
      hasDiscountOffer: a = false,
      tab: o = null
    } = e, u = [];
    null != n && null != l ? r && (!a || o === s.AW.ORBS) ? u.push(n, l) : u.push(l, n) : null != n ? u.push(n) : null != l && u.push(l);
    let d = u.length > 0 && (null == (t = u[0]) ? true : t.currency) === c.pKx.DISCORD_ORB;
    return {
      checkoutEligiblePrices: u,
      isOrbExclusive: i,
      hasSufficientOrbs: r,
      shouldCheckoutWithOrbs: d
    }
  },
  f = e => {
    let {
      product: t
    } = e, r = (0, n.zl)(), l = i.default.getCurrentUser(), {
      orbPrice: o,
      fiatPrice: s,
      isOrbExclusive: c
    } = u({
      product: t,
      isPremiumUser: a.ZP.canUseCollectibles(l)
    }), d = null != o && null != r && r >= o.amount, {
      shouldCheckoutWithOrbs: f
    } = p({
      orbPrice: o,
      fiatPrice: s,
      isOrbExclusive: c,
      hasSufficientOrbs: d
    });
    return f
  };

function b(e) {
  let {
    product: t,
    isPremiumUser: r,
    tab: l,
    hasDiscountOffer: i = false
  } = e, {
    orbPrice: a,
    fiatPrice: o,
    isOrbExclusive: s,
    displayPrices: c
  } = d({
    product: t,
    isPremiumUser: r,
    tab: l,
    hasDiscountOffer: i
  }), u = (0, n.V_)(null != a ? a.amount : null);
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
  }, p({
    orbPrice: a,
    fiatPrice: o,
    isOrbExclusive: s,
    hasSufficientOrbs: u,
    hasDiscountOffer: i,
    tab: l
  }))
}