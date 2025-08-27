/** Chunk was on web.js **/
/** chunk id: 135785, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk230711 = require("./230711.js"),
  Chunk63063 = require("./63063.js"),
  Chunk74538 = require("./74538.js"),
  Chunk140465 = require("./140465.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk561485 = require("./561485.js");
let h = e => {
  let t, n, {
      premiumSubscription: i,
      className: h,
      textColor: m
    } = e,
    g = (0, u.Nx)();
  if (null == i) return null;
  let E = null != i ? c.ZP.getPremiumPlanItem(i) : null;
  if (c.ZP.isBoostOnlySubscription(i) ? t = _.intl.string(_.t.Uj0md3) : null != E && (t = c.ZP.getDisplayPremiumType(E.planId)), null == t) return null;
  let b = () => s.Z.open(f.oAB.SUBSCRIPTIONS),
    y = (null != E ? c.ZP.getSkuIdForPlan(E.planId) : null) === d.Si.TIER_1;
  return n = null != m ? m : g ? "always-white" : "text-default", (0, r.jsxs)(o.Zbd, {
    className: a()(p.container, h, {
      [p.centerText]: g
    }),
    type: o.Zbd.Types.CUSTOM,
    children: [(0, r.jsx)(o.Mgn, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      className: a()(p.icon, {
        [p.lightThemeColorOnly]: g
      })
    }), (0, r.jsx)(o.Text, {
      variant: "text-sm/medium",
      color: n,
      children: y ? _.intl.format(_.t["tYuv+f"], {
        helpdeskArticle: l.Z.getArticleURL(f.BhN.PREMIUM_DETAILS),
        onSubscriptionsClick: b
      }) : _.intl.format(_.t.xHRgU1, {
        subscriptionName: t,
        onSubscriptionsClick: b
      })
    })]
  })
}