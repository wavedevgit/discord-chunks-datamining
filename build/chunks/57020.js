/** Chunk was on 58197 **/
/** chunk id: 57020, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Ak: () => m,
  FI: () => g
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
      product: i,
      isPremiumUser: n
    } = e, {
      enabled: l
    } = (0, r.m)({
      location: "getShopBasePricingData"
    }), s = l ? (0, o.CW)({
      product: i,
      isPremiumUser: n
    }) : true;
    return {
      orbPrice: s,
      fiatPrice: null != (t = (0, o.$K)({
        product: i,
        isPremiumUser: n
      })) ? t : true,
      isOrbExclusive: !!l && (0, o.Ab)(i)
    }
  },
  p = e => {
    var t;
    let {
      hasSufficientOrbs: i,
      orbPrice: n,
      fiatPrice: r,
      isOrbExclusive: l,
      hasDiscountOffer: s = false,
      prioritizedCurrency: o = null
    } = e, c = [], d = o === a.Hi.ORBS;
    null != n && null != r ? d || i && !s ? c.push(n, r) : c.push(r, n) : null != n ? c.push(n) : null != r && c.push(r);
    let p = c.length > 0 && (null == (t = c[0]) ? true : t.currency) === u.Yri.DISCORD_ORB;
    return {
      checkoutEligiblePrices: c,
      isOrbExclusive: l,
      hasSufficientOrbs: i,
      shouldCheckoutWithOrbs: p
    }
  },
  m = e => {
    let {
      product: t
    } = e, i = (0, n.r_)(), r = l.default.getCurrentUser(), {
      orbPrice: o,
      fiatPrice: a,
      isOrbExclusive: c
    } = d({
      product: t,
      isPremiumUser: s.Ay.canUseCollectibles(r)
    }), u = null != o && null != i && i >= o.amount, {
      shouldCheckoutWithOrbs: m
    } = p({
      orbPrice: o,
      fiatPrice: a,
      isOrbExclusive: c,
      hasSufficientOrbs: u
    });
    return m
  };

function g(e) {
  let {
    product: t,
    isPremiumUser: i,
    prioritizedCurrency: r,
    hasDiscountOffer: l = false,
    isRental: s = false
  } = e, {
    orbPrice: o,
    fiatPrice: a,
    isOrbExclusive: u
  } = s ? {
    orbPrice: c.nE,
    fiatPrice: true,
    isOrbExclusive: true
  } : d({
    product: t,
    isPremiumUser: i
  }), m = (0, n.kj)(null != o ? o.amount : null);
  return p({
    orbPrice: o,
    fiatPrice: a,
    isOrbExclusive: u,
    hasSufficientOrbs: m,
    hasDiscountOffer: l,
    prioritizedCurrency: r
  })
}