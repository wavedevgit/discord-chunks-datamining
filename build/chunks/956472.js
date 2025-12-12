/** Chunk was on web.js **/
/** chunk id: 956472, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ip: () => m,
  oQ: () => _
}), require("./539854.js");
var Chunk932563 = require("./932563.js"),
  Chunk825102 = require("./825102.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk27123 = require("./27123.js"),
  Chunk786040 = require("./786040.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js");
let d = e => {
    var t;
    let {
      product: n,
      isPremiumUser: r
    } = e, {
      enabled: o
    } = (0, i.C)({
      location: "getShopBasePricingData"
    }), a = o ? (0, s.T4)({
      product: n,
      isPremiumUser: r
    }) : true;
    return {
      orbPrice: a,
      fiatPrice: null != (t = (0, s.cB)({
        product: n,
        isPremiumUser: r
      })) ? t : true,
      isOrbExclusive: !!o && (0, s.r1)(n)
    }
  },
  f = e => {
    var t;
    let {
      hasSufficientOrbs: n,
      orbPrice: r,
      fiatPrice: i,
      isOrbExclusive: o,
      hasDiscountOffer: a = false,
      prioritizedCurrency: s = null
    } = e, c = [], d = s === l.tA.ORBS;
    null != r && null != i ? d || n && !a ? c.push(r, i) : c.push(i, r) : null != r ? c.push(r) : null != i && c.push(i);
    let f = c.length > 0 && (null == (t = c[0]) ? true : t.currency) === u.pKx.DISCORD_ORB;
    return {
      checkoutEligiblePrices: c,
      isOrbExclusive: o,
      hasSufficientOrbs: n,
      shouldCheckoutWithOrbs: f
    }
  },
  p = () => ({
    orbPrice: Chunk215023.sT,
    fiatPrice: true,
    isOrbExclusive: true
  }),
  _ = e => {
    let {
      product: t
    } = e, n = (0, r.zl)(), i = o.default.getCurrentUser(), {
      orbPrice: s,
      fiatPrice: l,
      isOrbExclusive: c
    } = d({
      product: t,
      isPremiumUser: a.ZP.canUseCollectibles(i)
    }), u = null != s && null != n && n >= s.amount, {
      shouldCheckoutWithOrbs: p
    } = f({
      orbPrice: s,
      fiatPrice: l,
      isOrbExclusive: c,
      hasSufficientOrbs: u
    });
    return p
  };

function m(e) {
  let {
    product: t,
    isPremiumUser: n,
    prioritizedCurrency: i,
    hasDiscountOffer: o = false,
    isRental: a = false
  } = e, {
    orbPrice: s,
    fiatPrice: l,
    isOrbExclusive: c
  } = a ? p() : d({
    product: t,
    isPremiumUser: n
  }), u = (0, r.V_)(null != s ? s.amount : null);
  return f({
    orbPrice: s,
    fiatPrice: l,
    isOrbExclusive: c,
    hasSufficientOrbs: u,
    hasDiscountOffer: o,
    prioritizedCurrency: i
  })
}