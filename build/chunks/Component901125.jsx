/** Chunk was on web.js **/
/** chunk id: 901125, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk780964 = require("./780964.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk975571 = require("./975571.js"),
  Chunk927578 = require("./927578.js"),
  Chunk526292 = require("./526292.js"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk158793 = require("./158793.js");
let m = e => {
  let t, n, {
      premiumSubscription: i,
      className: m,
      textColor: g
    } = e,
    E = (0, d.ar)();
  if (null == i) return null;
  let b = null != i ? u.Ay.getPremiumPlanItem(i) : null;
  if (u.Ay.isBoostOnlySubscription(i) ? t = _.intl.string(_.t.Uj0md3) : null != b && (t = u.Ay.getTierDisplayNameByPlanId(b.planId)), null == t) return null;
  let y = () => (0, l.openUserSettings)(o.X.SUBSCRIPTIONS_PANEL, {
      section: p.nc_.SUBSCRIPTIONS
    }),
    O = (null != b ? u.Ay.getSkuIdForPlan(b.planId) : null) === f.pe.TIER_1;
  return n = null != g ? g : E ? "always-white" : "text-default", (0, r.jsxs)(s.ZpM, {
    className: a()(h.kL, m, {
      [h.He]: E
    }),
    type: s.ZpM.Types.CUSTOM,
    children: [(0, r.jsx)(s.EpV, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      className: a()(h.Kk, {
        [h.Pt]: E
      })
    }), (0, r.jsx)(s.Text, {
      variant: "text-sm/medium",
      color: n,
      children: O ? _.intl.format(_.t["tYuv+T"], {
        helpdeskArticle: c.A.getArticleURL(p.MVz.PREMIUM_DETAILS),
        onSubscriptionsClick: y
      }) : _.intl.format(_.t.xHRgU2, {
        subscriptionName: t,
        onSubscriptionsClick: y
      })
    })]
  })
}