/** Chunk was on web.js **/
/** chunk id: 57020, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ak: () => _,
  FI: () => h
}), require("./321073.js");
var Chunk855104 = require("./855104.js"),
  Chunk151252 = require("./151252.js"),
  Chunk287809 = require("./287809.js"),
  Chunk927578 = require("./927578.js"),
  Chunk623373 = require("./623373.js"),
  Chunk561769 = require("./561769.js"),
  Chunk758836 = require("./758836.js"),
  Chunk652215 = require("./652215.js");
let d = e => {
    var t;
    let {
      product: n,
      isPremiumUser: r
    } = e, {
      enabled: a
    } = (0, i.m)({
      location: "getShopBasePricingData"
    }), s = a ? (0, o.CW)({
      product: n,
      isPremiumUser: r
    }) : true;
    return {
      orbPrice: s,
      fiatPrice: null != (t = (0, o.$K)({
        product: n,
        isPremiumUser: r
      })) ? t : true,
      isOrbExclusive: !!a && (0, o.Ab)(n)
    }
  },
  f = e => {
    var t;
    let {
      hasSufficientOrbs: n,
      orbPrice: r,
      fiatPrice: i,
      isOrbExclusive: a,
      hasDiscountOffer: s = false,
      prioritizedCurrency: o = null
    } = e, c = [], d = o === l.Hi.ORBS;
    null != r && null != i ? d || n && !s ? c.push(r, i) : c.push(i, r) : null != r ? c.push(r) : null != i && c.push(i);
    let f = c.length > 0 && (null == (t = c[0]) ? true : t.currency) === u.Yri.DISCORD_ORB;
    return {
      checkoutEligiblePrices: c,
      isOrbExclusive: a,
      hasSufficientOrbs: n,
      shouldCheckoutWithOrbs: f
    }
  },
  p = () => ({
    orbPrice: c.nE,
    fiatPrice: true,
    isOrbExclusive: true
  }),
  _ = e => {
    let {
      product: t
    } = e, n = (0, r.r_)(), i = a.default.getCurrentUser(), {
      orbPrice: o,
      fiatPrice: l,
      isOrbExclusive: c
    } = d({
      product: t,
      isPremiumUser: s.Ay.canUseCollectibles(i)
    }), u = null != o && null != n && n >= o.amount, {
      shouldCheckoutWithOrbs: p
    } = f({
      orbPrice: o,
      fiatPrice: l,
      isOrbExclusive: c,
      hasSufficientOrbs: u
    });
    return p
  };

function h(e) {
  let {
    product: t,
    isPremiumUser: n,
    prioritizedCurrency: i,
    hasDiscountOffer: a = false,
    isRental: s = false
  } = e, {
    orbPrice: o,
    fiatPrice: l,
    isOrbExclusive: c
  } = s ? p() : d({
    product: t,
    isPremiumUser: n
  }), u = (0, r.kj)(null != o ? o.amount : null);
  return f({
    orbPrice: o,
    fiatPrice: l,
    isOrbExclusive: c,
    hasSufficientOrbs: u,
    hasDiscountOffer: a,
    prioritizedCurrency: i
  })
}