/** Chunk was on 2292 **/
/** chunk id: 90526, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => I
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk989349 = require("./989349.js"),
  s = require.n(Chunk989349),
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

function j(e) {
  var t;
  let {
    defaultPriceString: r,
    subscriptionPlan: i,
    discountOffer: l
  } = e, a = (0, C.N1)(i);
  return (0, n.jsx)(n.Fragment, {
    children: h.intl.format(h.t.sJTwHQ, {
      numMonths: null != (t = l.discount.user_usage_limit) ? t : T.OJ,
      discountedPrice: a,
      regularPrice: r
    })
  })
}

function I(e) {
  var t, r, i, a, C, I, y;
  let {
    isGift: b,
    premiumTier: P,
    offerTierMatchesCard: A,
    offerType: _,
    showYearlyPrice: R,
    priceOptions: O,
    textVariant: N,
    className: E,
    isApplicationHome: M,
    enablePremiumBrandRefresh: w,
    headerClassName: L,
    headingVariant: S = "heading-md/normal",
    headingColor: H
  } = e, U = (0, o.bG)([d.A], () => d.A.getPremiumTypeSubscription()), D = (0, o.bG)([u.default], () => u.default.getCurrentUser()), G = (0, p.k5)(), k = (0, p.nf)(), V = P === T.PremiumTypes.TIER_0 ? T.pe.TIER_0 : T.pe.TIER_2, B = (null == U ? true : U.hasActiveTrial) ? null == D ? true : D.premiumType : G ? T.PremiumTypes.TIER_2 : null, Z = (0, x.V)(), F = (0, g.O)(), J = null == Z ? true : Z.subscription_trial;
  if (!M && !b && null != B && P === B && null != U && null != U.planIdFromItems) {
    let e = null != U.trialEndsAt ? s()(null == U ? true : U.trialEndsAt).diff(s()(), "d") : 0,
      a = T.hd[U.planIdFromItems],
      o = m.Ay.formatPriceString(m.Ay.getDefaultPrice(a.id), a.interval);
    return (0, n.jsx)(c.Heading, {
      variant: S,
      color: H,
      className: l()(v.K, L),
      children: _ === T.Vk.PREMIUM_TRIAL ? h.intl.format(h.t["2CGBri"], {
        remainingTime: e,
        price: o
      }) : U.planIdFromItems === T.gD.PREMIUM_YEAR_TIER_2 ? h.intl.format(h.t["+qqh6g"], {
        percent: null != (t = null == k ? true : k.percentage) ? t : T.Cq,
        regularPrice: o
      }) : h.intl.formatToPlainString(h.t["3ZiutU"], {
        percent: null != (r = null == k ? true : k.percentage) ? r : T._$,
        regularPrice: o,
        numMonths: null != (i = null == k ? true : k.duration) ? i : T.OJ
      })
    })
  }
  if (!M && !b && A) {
    let e = m.Ay.formatPriceString(m.Ay.getDefaultPrice(P === T.PremiumTypes.TIER_0 ? T.gD.PREMIUM_MONTH_TIER_0 : T.gD.PREMIUM_MONTH_TIER_2), T.WT.MONTH);
    if (_ === T.Vk.PREMIUM_TRIAL) return (0, n.jsx)(c.Heading, {
      variant: S,
      color: H,
      className: l()(v.K, L),
      children: h.intl.format(h.t["9vyovu"], {
        planName: (0, m.RH)(null != (a = T.En[null != (C = null == J ? true : J.sku_id) ? C : T.pe.NONE]) ? a : T.gD.PREMIUM_MONTH_TIER_2),
        duration: (0, m.re)({
          intervalType: null != (I = null == J ? true : J.interval) ? I : T.WT.DAY,
          intervalCount: null != (y = null == J ? true : J.interval_count) ? y : 30,
          capitalize: false
        }),
        price: e
      })
    });
    if (null != F) return (0, n.jsx)(c.Heading, {
      variant: S,
      color: H,
      className: l()(v.K, L),
      children: (0, n.jsx)(j, {
        defaultPriceString: e,
        subscriptionPlan: T.gD.PREMIUM_MONTH_TIER_2,
        discountOffer: F
      })
    })
  }
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(f.A, {
      subscriptionTier: V,
      isGift: b,
      className: null != E ? E : v.q,
      priceOptions: O,
      variant: N,
      isApplicationHome: M,
      enablePremiumBrandRefresh: w
    }), R && (0, n.jsx)(f.A, {
      subscriptionTier: V,
      interval: T.WT.YEAR,
      className: null != E ? E : v.q,
      isGift: b,
      priceOptions: O,
      variant: N,
      isApplicationHome: M,
      enablePremiumBrandRefresh: w
    })]
  })
}