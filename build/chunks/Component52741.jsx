/** Chunk was on web.js **/
/** chunk id: 52741, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  s = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js"),
  Chunk78839 = require("./78839.js"),
  Chunk74538 = require("./74538.js"),
  Chunk140465 = require("./140465.js"),
  Chunk622909 = require("./622909.js"),
  Chunk639119 = require("./639119.js"),
  Chunk230916 = require("./230916.js"),
  Chunk504865 = require("./504865.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk560230 = require("./560230.js");

function O(e) {
  var t;
  let {
    defaultPriceString: n,
    subscriptionPlan: i,
    discountOffer: a
  } = e, o = (0, h.Aq)(i);
  return (0, r.jsx)(r.Fragment, {
    children: b.intl.format(b.t.sJTwHQ, {
      numMonths: null != (t = a.discount.user_usage_limit) ? t : E.rt,
      discountedPrice: o,
      regularPrice: n
    })
  })
}

function v(e) {
  let {
    isGift: t,
    premiumTier: n,
    offerTierMatchesCard: i,
    offerType: o,
    showYearlyPrice: h,
    priceOptions: v,
    textVariant: S,
    className: I,
    isApplicationHome: T,
    enablePremiumBrandRefresh: A,
    headerClassName: C,
    headingVariant: N = "heading-md/normal",
    headingColor: P
  } = e, R = (0, l.e7)([d.Z], () => d.Z.getPremiumTypeSubscription()), D = (0, l.e7)([u.default], () => u.default.getCurrentUser()), w = (0, p.t7)(), x = (0, p.lr)(), L = n === E.PremiumTypes.TIER_0 ? E.Si.TIER_0 : E.Si.TIER_2, j = (null == R ? true : R.hasActiveTrial) ? null == D ? true : D.premiumType : w ? E.PremiumTypes.TIER_2 : null, M = (0, m.N)(), k = (0, _.N)(), U = null == M ? true : M.subscription_trial;
  if (!T && !t && null != j && n === j && null != R && null != R.planIdFromItems) {
    let e = null != R.trialEndsAt ? s()(null == R ? true : R.trialEndsAt).diff(s()(), "d") : 0,
      t = E.GP[R.planIdFromItems],
      n = f.ZP.formatPriceString(f.ZP.getDefaultPrice(t.id), t.interval),
      i = () => {
        var t, r, i;
        return o === E.C.PREMIUM_TRIAL ? b.intl.format(b.t["2CGBri"], {
          remainingTime: e,
          price: n
        }) : R.planIdFromItems === E.Xh.PREMIUM_YEAR_TIER_2 ? b.intl.format(b.t["+qqh6g"], {
          percent: null != (t = null == x ? true : x.percentage) ? t : E.Bo,
          regularPrice: n
        }) : b.intl.formatToPlainString(b.t["3ZiutU"], {
          percent: null != (r = null == x ? true : x.percentage) ? r : E.M_,
          regularPrice: n,
          numMonths: null != (i = null == x ? true : x.duration) ? i : E.rt
        })
      };
    return (0, r.jsx)(c.Heading, {
      variant: N,
      color: P,
      className: a()(y.trialHeader, C),
      children: i()
    })
  }
  if (!T && !t && i) {
    let e = f.ZP.formatPriceString(f.ZP.getDefaultPrice(n === E.PremiumTypes.TIER_0 ? E.Xh.PREMIUM_MONTH_TIER_0 : E.Xh.PREMIUM_MONTH_TIER_2), E.rV.MONTH);
    if (o === E.C.PREMIUM_TRIAL) {
      var G, Z, B, F;
      return (0, r.jsx)(c.Heading, {
        variant: N,
        color: P,
        className: a()(y.trialHeader, C),
        children: b.intl.format(b.t["9vyovu"], {
          planName: (0, f.MF)(null != (Z = E.IW[null != (G = null == U ? true : U.sku_id) ? G : E.Si.NONE]) ? Z : E.Xh.PREMIUM_MONTH_TIER_2),
          duration: (0, f.if)({
            intervalType: null != (B = null == U ? true : U.interval) ? B : E.rV.DAY,
            intervalCount: null != (F = null == U ? true : U.interval_count) ? F : 30,
            capitalize: false
          }),
          price: e
        })
      })
    }
    if (null != k) return (0, r.jsx)(c.Heading, {
      variant: N,
      color: P,
      className: a()(y.trialHeader, C),
      children: (0, r.jsx)(O, {
        defaultPriceString: e,
        subscriptionPlan: E.Xh.PREMIUM_MONTH_TIER_2,
        discountOffer: k
      })
    })
  }
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(g.Z, {
      subscriptionTier: L,
      isGift: t,
      className: null != I ? I : y.price,
      priceOptions: v,
      variant: S,
      isApplicationHome: T,
      enablePremiumBrandRefresh: A
    }), h && (0, r.jsx)(g.Z, {
      subscriptionTier: L,
      interval: E.rV.YEAR,
      className: null != I ? I : y.price,
      isGift: t,
      priceOptions: v,
      variant: S,
      isApplicationHome: T,
      enablePremiumBrandRefresh: A
    })]
  })
}