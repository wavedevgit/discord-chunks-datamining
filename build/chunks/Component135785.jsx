/** Chunk was on 75708 **/
/** chunk id: 135785, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk230711 = require("./230711.js"),
  Chunk63063 = require("./63063.js"),
  Chunk74538 = require("./74538.js"),
  Chunk140465 = require("./140465.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk132383 = require("./132383.js");
let h = e => {
  let t, n, {
      premiumSubscription: r,
      className: h,
      textColor: f
    } = e,
    b = (0, d.Nx)();
  if (null == r) return null;
  let x = null != r ? c.ZP.getPremiumPlanItem(r) : null;
  if (c.ZP.isBoostOnlySubscription(r) ? t = p.intl.string(p.t.Uj0md3) : null != x && (t = c.ZP.getDisplayPremiumType(x.planId)), null == t) return null;
  let _ = () => l.Z.open(m.oAB.SUBSCRIPTIONS),
    j = (null != x ? c.ZP.getSkuIdForPlan(x.planId) : null) === u.Si.TIER_1;
  return n = null != f ? f : b ? "always-white" : "text-default", (0, i.jsxs)(a.Zbd, {
    className: s()(g.container, h, {
      [g.centerText]: b
    }),
    type: a.Zbd.Types.CUSTOM,
    children: [(0, i.jsx)(a.Mgn, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      className: s()(g.icon, {
        [g.lightThemeColorOnly]: b
      })
    }), (0, i.jsx)(a.Text, {
      variant: "text-sm/medium",
      color: n,
      children: j ? p.intl.format(p.t["tYuv+f"], {
        helpdeskArticle: o.Z.getArticleURL(m.BhN.PREMIUM_DETAILS),
        onSubscriptionsClick: _
      }) : p.intl.format(p.t.xHRgU1, {
        subscriptionName: t,
        onSubscriptionsClick: _
      })
    })]
  })
}