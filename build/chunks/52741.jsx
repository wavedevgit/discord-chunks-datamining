/** Chunk was on 94136 **/
/** chunk id: 52741, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  s = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js"),
  Chunk78839 = require("./78839.js"),
  Chunk74538 = require("./74538.js"),
  Chunk140465 = require("./140465.js"),
  Chunk104494 = require("./104494.js"),
  Chunk639119 = require("./639119.js"),
  Chunk230916 = require("./230916.js"),
  Chunk504865 = require("./504865.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.js"),
  Chunk753023 = require("./753023.js");

function T(e) {
  var t;
  let {
    defaultPriceString: i,
    subscriptionPlan: r,
    discountOffer: l
  } = e, a = (0, x.A)(r);
  return <n.Fragment>{v.intl.format(v.t.sJTwHR, {
      numMonths: null != (t = l.discount.user_usage_limit) ? t : h.rt,
      discountedPrice: a,
      regularPrice: i
    })}</n.Fragment>
}

function j(e) {
  var t, i, r, a, x, j, P;
  let {
    isGift: E,
    premiumTier: N,
    offerTierMatchesCard: _,
    offerType: b,
    showYearlyPrice: S,
    priceOptions: R,
    textVariant: Z,
    className: y,
    isApplicationHome: w,
    enablePremiumBrandRefresh: M,
    headerClassName: O,
    headingVariant: L = "heading-md/normal",
    headingColor: H
  } = e, A = (0, o.e7)([d.Z], () => d.Z.getPremiumTypeSubscription()), U = (0, o.e7)([u.default], () => u.default.getCurrentUser()), G = (0, C.t7)(), k = (0, C.lr)(), D = N === h.p9.TIER_0 ? h.Si.TIER_0 : h.Si.TIER_2, V = (null == A ? true : A.hasActiveTrial) ? null == U ? true : U.premiumType : G ? h.p9.TIER_2 : null, B = (0, g.N)(), F = (0, p.Ng)(), W = null == B ? true : B.subscription_trial;
  if (!w && !E && null != V && N === V && null != A && null != A.planIdFromItems) {
    let e = null != A.trialEndsAt ? s()(null == A ? true : A.trialEndsAt).diff(s()(), "d") : 0,
      a = h.GP[A.planIdFromItems],
      o = m.ZP.formatPriceString(m.ZP.getDefaultPrice(a.id), a.interval);
    return <c.X6q variant={L} color={H} className={l()(I.trialHeader, O)}>{b === h.C.PREMIUM_TRIAL ? v.intl.format(v.t["2CGBrq"], {
        remainingTime: e,
        price: o
      }) : A.planIdFromItems === h.Xh.PREMIUM_YEAR_TIER_2 ? v.intl.format(v.t["+qqh6u"], {
        percent: null != (t = null == k ? true : k.percentage) ? t : h.Bo,
        regularPrice: o
      }) : v.intl.formatToPlainString(v.t["3Ziutb"], {
        percent: null != (i = null == k ? true : k.percentage) ? i : h.M_,
        regularPrice: o,
        numMonths: null != (r = null == k ? true : k.duration) ? r : h.rt
      })}</c.X6q>
  }
  if (!w && !E && _) {
    let e = m.ZP.formatPriceString(m.ZP.getDefaultPrice(N === h.p9.TIER_0 ? h.Xh.PREMIUM_MONTH_TIER_0 : h.Xh.PREMIUM_MONTH_TIER_2), h.rV.MONTH);
    if (b === h.C.PREMIUM_TRIAL) return <c.X6q variant={L} color={H} className={l()(I.trialHeader, O)}>{v.intl.format(v.t["9vyovr"], {
        planName: (0, m.aq)(null != (x = h.IW[null != (a = null == W ? true : W.sku_id) ? a : h.Si.NONE]) ? x : h.Xh.PREMIUM_MONTH_TIER_2),
        duration: (0, m.if)({
          intervalType: null != (j = null == W ? true : W.interval) ? j : h.rV.DAY,
          intervalCount: null != (P = null == W ? true : W.interval_count) ? P : 30,
          capitalize: false
        }),
        price: e
      })}</c.X6q>;
    if (null != F) return <c.X6q variant={L} color={H} className={l()(I.trialHeader, O)}><T defaultPriceString={e} subscriptionPlan={h.Xh.PREMIUM_MONTH_TIER_2} discountOffer={F} /></c.X6q>
  }
  return <n.Fragment>{<f.Z subscriptionTier={D} isGift={E} className={null != y ? y : I.price} priceOptions={R} variant={Z} isApplicationHome={w} enablePremiumBrandRefresh={M} />}{S && <f.Z subscriptionTier={D} interval={h.rV.YEAR} className={null != y ? y : I.price} isGift={E} priceOptions={R} variant={Z} isApplicationHome={w} enablePremiumBrandRefresh={M} />}</n.Fragment>
}