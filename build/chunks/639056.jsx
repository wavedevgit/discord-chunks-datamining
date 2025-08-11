/** Chunk was on 75708 **/
/** chunk id: 639056, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js"),
  Chunk509545 = require("./509545.js"),
  Chunk78839 = require("./78839.js"),
  Chunk580130 = require("./580130.js"),
  Chunk74538 = require("./74538.js"),
  Chunk393411 = require("./393411.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk846706 = require("./846706.js");

function j(e) {
  let t, {
      user: n,
      planId: r,
      count: a,
      userPremiumSubscription: l,
      unconsumedFractionalPremiumUnits: d = []
    } = e,
    [m, p] = (0, o.Wu)([u.Z], () => [u.Z.get(r), null != l ? u.Z.get(l.planId) : null]);
  if (null == m || g.ZP.getInterval(r).intervalType !== f.rV.MONTH) return null;
  let h = null != p ? p.skuId : null,
    j = m.skuId === h,
    E = g.ZP.getDisplayName(r);
  if (null != l) {
    let e;
    e = new Date(l.status === b.O0b.PAUSED && null != l.pauseEndsAt ? l.pauseEndsAt : l.currentPeriodEnd), t = (0, g.N1)(e, d)
  }
  return <div className={_.accountCreditRow}>{<div className={s()({
        [_.iconBackgroundTier0]: m.skuId === f.Si.TIER_0,
        [_.iconBackgroundTier1]: m.skuId === f.Si.TIER_1,
        [_.iconBackgroundTier2]: m.skuId === f.Si.TIER_2
      })}><c.SrA size={"md"} color={"currentColor"} className={_.icon} /></div>}{<div className={_.rowDetails}>{<c.X6q variant={"heading-md/semibold"}>{x.intl.format(x.t.LzobT0, {
          planName: E
        })}</c.X6q>}{n.hasFreePremium() || null != l && l.isPurchasedExternally ? null : <c.X6q className={_.rowApplied} variant={"heading-sm/semibold"} color={"header-secondary"}>{j && null != l ? x.intl.formatToPlainString(x.t["5CNRRE"], {
          date: null != t ? t : 0
        }) : x.intl.formatToPlainString(x.t.eNXZ5O, {
          planName: E
        })}</c.X6q>}</div>}{<c.Text className={_.rowCreditCount} variant={"text-md/semibold"}>{x.intl.format(x.t["ess/xs"], {
        count: a
      })}</c.Text>}</div>
}
let E = function(e) {
  let {
    className: t,
    entitlements: n
  } = e, r = l()(Array.from(n)).filter(e => {
    let {
      subscriptionPlanId: t,
      parentId: n,
      consumed: i
    } = e;
    return null != t && null != n && !i
  }).groupBy(e => e.subscriptionPlanId).value(), a = (0, o.Wu)([p.Z], () => p.Z.getUnactivatedFractionalPremiumUnits()), u = (0, o.e7)([m.Z], () => m.Z.getPremiumSubscription()), g = (0, o.e7)([m.Z], () => null == m.Z.getPremiumTypeSubscription()), b = Object.keys(r).some(e => e === f.Xh.PREMIUM_MONTH_TIER_1), E = (0, o.e7)([d.default], () => d.default.getCurrentUser());
  return null == E ? null : <div>{<div className={s()(t, _.premiumSubscriptionAccountCredit, _.accountCreditsContainer)}>{Object.keys(r).map(e => (0, i.jsx)(j, {
        planId: e,
        count: r[e].length,
        userPremiumSubscription: u,
        user: E,
        unconsumedFractionalPremiumUnits: a
      }, e))}</div>}{b && g && <div>{<c.Text className={_.tier1AccountCreditHeader} variant={"text-md/normal"}>{x.intl.string(x.t["VNr4+P"])}</c.Text>}{<h.R />}</div>}</div>
}