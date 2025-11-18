/** Chunk was on web.js **/
/** chunk id: 135785, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk74538 = require("./74538.js"),
  Chunk140465 = require("./140465.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk462240 = require("./462240.js");
let m = e => {
  let t, n, {
      premiumSubscription: i,
      className: m,
      textColor: g
    } = e,
    E = (0, d.Nx)();
  if (null == i) return null;
  let b = null != i ? u.ZP.getPremiumPlanItem(i) : null;
  if (u.ZP.isBoostOnlySubscription(i) ? t = p.intl.string(p.t.Uj0md3) : null != b && (t = u.ZP.getDisplayPremiumType(b.planId)), null == t) return null;
  let y = () => (0, l.openUserSettings)(s.n.SUBSCRIPTIONS_PANEL, {
      section: _.oAB.SUBSCRIPTIONS
    }),
    O = (null != b ? u.ZP.getSkuIdForPlan(b.planId) : null) === f.Si.TIER_1;
  return n = null != g ? g : E ? "always-white" : "text-default", (0, r.jsxs)(o.Zbd, {
    className: a()(h.container, m, {
      [h.centerText]: E
    }),
    type: o.Zbd.Types.CUSTOM,
    children: [(0, r.jsx)(o.Mgn, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      className: a()(h.icon, {
        [h.lightThemeColorOnly]: E
      })
    }), (0, r.jsx)(o.Text, {
      variant: "text-sm/medium",
      color: n,
      children: O ? p.intl.format(p.t["tYuv+T"], {
        helpdeskArticle: c.Z.getArticleURL(_.BhN.PREMIUM_DETAILS),
        onSubscriptionsClick: y
      }) : p.intl.format(p.t.xHRgU2, {
        subscriptionName: t,
        onSubscriptionsClick: y
      })
    })]
  })
}