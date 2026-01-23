/** Chunk was on web.js **/
/** chunk id: 90526, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => v
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk989349 = require("./989349.js"),
  o = require.n(Chunk989349),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk287809 = require("./287809.js"),
  Chunk166403 = require("./166403.js"),
  Chunk927578 = require("./927578.js"),
  Chunk526292 = require("./526292.js"),
  Chunk422936 = require("./422936.js"),
  Chunk234419 = require("./234419.js"),
  Chunk511484 = require("./511484.js"),
  Chunk156601 = require("./156601.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk26212 = require("./26212.js");

function O(e) {
  var t;
  let {
    defaultPriceString: n,
    subscriptionPlan: i,
    discountOffer: a
  } = e, s = (0, m.N1)(i);
  return (0, r.jsx)(r.Fragment, {
    children: y.intl.format(y.t.sJTwHQ, {
      numMonths: null != (t = a.discount.user_usage_limit) ? t : E.OJ,
      discountedPrice: s,
      regularPrice: n
    })
  })
}

function v(e) {
  let {
    isGift: t,
    premiumTier: n,
    offerTierMatchesCard: i,
    offerType: s,
    showYearlyPrice: m,
    priceOptions: v,
    textVariant: A,
    className: I,
    isApplicationHome: S,
    enablePremiumBrandRefresh: T,
    headerClassName: C,
    headingVariant: N = "heading-md/normal",
    headingColor: R
  } = e, w = (0, l.bG)([d.A], () => d.A.getPremiumTypeSubscription()), P = (0, l.bG)([u.default], () => u.default.getCurrentUser()), D = (0, p.k5)(), x = (0, p.nf)(), L = n === E.PremiumTypes.TIER_0 ? E.pe.TIER_0 : E.pe.TIER_2, j = (null == w ? true : w.hasActiveTrial) ? null == P ? true : P.premiumType : D ? E.PremiumTypes.TIER_2 : null, M = (0, h.V)(), k = (0, _.O)(), U = null == M ? true : M.subscription_trial;
  if (!S && !t && null != j && n === j && null != w && null != w.planIdFromItems) {
    let e = null != w.trialEndsAt ? o()(null == w ? true : w.trialEndsAt).diff(o()(), "d") : 0,
      t = E.hd[w.planIdFromItems],
      n = f.Ay.formatPriceString(f.Ay.getDefaultPrice(t.id), t.interval),
      i = () => {
        var t, r, i;
        return s === E.Vk.PREMIUM_TRIAL ? y.intl.format(y.t["2CGBri"], {
          remainingTime: e,
          price: n
        }) : w.planIdFromItems === E.gD.PREMIUM_YEAR_TIER_2 ? y.intl.format(y.t["+qqh6g"], {
          percent: null != (t = null == x ? true : x.percentage) ? t : E.Cq,
          regularPrice: n
        }) : y.intl.formatToPlainString(y.t["3ZiutU"], {
          percent: null != (r = null == x ? true : x.percentage) ? r : E._$,
          regularPrice: n,
          numMonths: null != (i = null == x ? true : x.duration) ? i : E.OJ
        })
      };
    return (0, r.jsx)(c.Heading, {
      variant: N,
      color: R,
      className: a()(b.K, C),
      children: i()
    })
  }
  if (!S && !t && i) {
    let e = f.Ay.formatPriceString(f.Ay.getDefaultPrice(n === E.PremiumTypes.TIER_0 ? E.gD.PREMIUM_MONTH_TIER_0 : E.gD.PREMIUM_MONTH_TIER_2), E.WT.MONTH);
    if (s === E.Vk.PREMIUM_TRIAL) {
      var G, V, F, B;
      return (0, r.jsx)(c.Heading, {
        variant: N,
        color: R,
        className: a()(b.K, C),
        children: y.intl.format(y.t["9vyovu"], {
          planName: (0, f.RH)(null != (G = E.En[null != (V = null == U ? true : U.sku_id) ? V : E.pe.NONE]) ? G : E.gD.PREMIUM_MONTH_TIER_2),
          duration: (0, f.re)({
            intervalType: null != (F = null == U ? true : U.interval) ? F : E.WT.DAY,
            intervalCount: null != (B = null == U ? true : U.interval_count) ? B : 30,
            capitalize: false
          }),
          price: e
        })
      })
    }
    if (null != k) return (0, r.jsx)(c.Heading, {
      variant: N,
      color: R,
      className: a()(b.K, C),
      children: (0, r.jsx)(O, {
        defaultPriceString: e,
        subscriptionPlan: E.gD.PREMIUM_MONTH_TIER_2,
        discountOffer: k
      })
    })
  }
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(g.A, {
      subscriptionTier: L,
      isGift: t,
      className: null != I ? I : b.q,
      priceOptions: v,
      variant: A,
      isApplicationHome: S,
      enablePremiumBrandRefresh: T
    }), m && (0, r.jsx)(g.A, {
      subscriptionTier: L,
      interval: E.WT.YEAR,
      className: null != I ? I : b.q,
      isGift: t,
      priceOptions: v,
      variant: A,
      isApplicationHome: S,
      enablePremiumBrandRefresh: T
    })]
  })
}