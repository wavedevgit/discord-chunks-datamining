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
  } = e, o = (0, m.Aq)(i);
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
    showYearlyPrice: m,
    priceOptions: v,
    textVariant: I,
    className: T,
    isApplicationHome: S,
    enablePremiumBrandRefresh: A,
    headerClassName: C,
    headingVariant: N = "heading-md/normal",
    headingColor: R
  } = e, P = (0, l.e7)([d.Z], () => d.Z.getPremiumTypeSubscription()), D = (0, l.e7)([u.default], () => u.default.getCurrentUser()), w = (0, _.t7)(), L = (0, _.lr)(), x = n === E.PremiumTypes.TIER_0 ? E.Si.TIER_0 : E.Si.TIER_2, M = (null == P ? true : P.hasActiveTrial) ? null == D ? true : D.premiumType : w ? E.PremiumTypes.TIER_2 : null, j = (0, h.N)(), k = (0, p.N)(), U = null == j ? true : j.subscription_trial;
  if (!S && !t && null != M && n === M && null != P && null != P.planIdFromItems) {
    let e = null != P.trialEndsAt ? s()(null == P ? true : P.trialEndsAt).diff(s()(), "d") : 0,
      t = E.GP[P.planIdFromItems],
      n = f.ZP.formatPriceString(f.ZP.getDefaultPrice(t.id), t.interval),
      i = () => {
        var t, r, i;
        return o === E.C.PREMIUM_TRIAL ? b.intl.format(b.t["2CGBri"], {
          remainingTime: e,
          price: n
        }) : P.planIdFromItems === E.Xh.PREMIUM_YEAR_TIER_2 ? b.intl.format(b.t["+qqh6g"], {
          percent: null != (t = null == L ? true : L.percentage) ? t : E.Bo,
          regularPrice: n
        }) : b.intl.formatToPlainString(b.t["3ZiutU"], {
          percent: null != (r = null == L ? true : L.percentage) ? r : E.M_,
          regularPrice: n,
          numMonths: null != (i = null == L ? true : L.duration) ? i : E.rt
        })
      };
    return (0, r.jsx)(c.Heading, {
      variant: N,
      color: R,
      className: a()(y.trialHeader, C),
      children: i()
    })
  }
  if (!S && !t && i) {
    let e = f.ZP.formatPriceString(f.ZP.getDefaultPrice(n === E.PremiumTypes.TIER_0 ? E.Xh.PREMIUM_MONTH_TIER_0 : E.Xh.PREMIUM_MONTH_TIER_2), E.rV.MONTH);
    if (o === E.C.PREMIUM_TRIAL) {
      var G, B, Z, F;
      return (0, r.jsx)(c.Heading, {
        variant: N,
        color: R,
        className: a()(y.trialHeader, C),
        children: b.intl.format(b.t["9vyovu"], {
          planName: (0, f.aq)(null != (B = E.IW[null != (G = null == U ? true : U.sku_id) ? G : E.Si.NONE]) ? B : E.Xh.PREMIUM_MONTH_TIER_2),
          duration: (0, f.if)({
            intervalType: null != (Z = null == U ? true : U.interval) ? Z : E.rV.DAY,
            intervalCount: null != (F = null == U ? true : U.interval_count) ? F : 30,
            capitalize: false
          }),
          price: e
        })
      })
    }
    if (null != k) return (0, r.jsx)(c.Heading, {
      variant: N,
      color: R,
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
      subscriptionTier: x,
      isGift: t,
      className: null != T ? T : y.price,
      priceOptions: v,
      variant: I,
      isApplicationHome: S,
      enablePremiumBrandRefresh: A
    }), m && (0, r.jsx)(g.Z, {
      subscriptionTier: x,
      interval: E.rV.YEAR,
      className: null != T ? T : y.price,
      isGift: t,
      priceOptions: v,
      variant: I,
      isApplicationHome: S,
      enablePremiumBrandRefresh: A
    })]
  })
}