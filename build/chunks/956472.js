/** Chunk was on 40849 **/
/** chunk id: 956472, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Ip: () => _,
  oQ: () => b,
  oo: () => d
}), require("./539854.js");
var Chunk932563 = require("./932563.js"),
  Chunk825102 = require("./825102.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk27123 = require("./27123.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js");
let o = e => {
    let {
      product: t,
      isPremiumUser: r
    } = e, n = (0, u.v)({
      product: t,
      isPremiumUser: r
    }), {
      enabled: i
    } = (0, l.CE)({
      location: "getShopBasePricingData"
    }), a = i ? n.find(e => e.currency === c.pKx.DISCORD_ORB) : true, s = n.find(e => e.currency !== c.pKx.DISCORD_ORB), o = 1 === n.length && null != a;
    return {
      orbPrice: a,
      fiatPrice: s,
      isOrbExclusive: o
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
      isOrbExclusive: u
    } = o({
      product: t,
      isPremiumUser: r
    }), c = [];
    return n === s.AW.ORBS ? null != i && (c = [i]) : (null != a && c.push(a), null == i || l || c.push(i)), {
      orbPrice: i,
      fiatPrice: a,
      isOrbExclusive: u,
      displayPrices: c
    }
  },
  h = e => {
    var t;
    let {
      hasSufficientOrbs: r,
      orbPrice: n,
      fiatPrice: l,
      isOrbExclusive: i,
      hasDiscountOffer: a = false,
      tab: u = null
    } = e, o = [];
    null != n && null != l ? r && (!a || u === s.AW.ORBS) ? o.push(n, l) : o.push(l, n) : null != n ? o.push(n) : null != l && o.push(l);
    let d = o.length > 0 && (null == (t = o[0]) ? true : t.currency) === c.pKx.DISCORD_ORB;
    return {
      checkoutEligiblePrices: o,
      isOrbExclusive: i,
      hasSufficientOrbs: r,
      shouldCheckoutWithOrbs: d
    }
  },
  b = e => {
    let {
      product: t
    } = e, r = (0, n.zl)(), l = i.default.getCurrentUser(), {
      orbPrice: u,
      fiatPrice: s,
      isOrbExclusive: c
    } = o({
      product: t,
      isPremiumUser: a.ZP.canUseCollectibles(l)
    }), d = null != u && null != r && r >= u.amount, {
      shouldCheckoutWithOrbs: b
    } = h({
      orbPrice: u,
      fiatPrice: s,
      isOrbExclusive: c,
      hasSufficientOrbs: d
    });
    return b
  };

function _(e) {
  let {
    product: t,
    isPremiumUser: r,
    tab: l,
    hasDiscountOffer: i = false
  } = e, {
    orbPrice: a,
    fiatPrice: u,
    isOrbExclusive: s,
    displayPrices: c
  } = d({
    product: t,
    isPremiumUser: r,
    tab: l,
    hasDiscountOffer: i
  }), o = (0, n.V_)(null != a ? a.amount : null);
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
  }, h({
    orbPrice: a,
    fiatPrice: u,
    isOrbExclusive: s,
    hasSufficientOrbs: o,
    hasDiscountOffer: i,
    tab: l
  }))
}