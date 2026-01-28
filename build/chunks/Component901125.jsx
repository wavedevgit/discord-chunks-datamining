/** Chunk was on 5606 **/
/** chunk id: 901125, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
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
let f = e => {
  let t, n, {
      premiumSubscription: i,
      className: f,
      textColor: b
    } = e,
    h = (0, u.ar)();
  if (null == i) return null;
  let A = null != i ? d.Ay.getPremiumPlanItem(i) : null;
  if (d.Ay.isBoostOnlySubscription(i) ? t = m.intl.string(m.t.Uj0md3) : null != A && (t = d.Ay.getTierDisplayNameByPlanId(A.planId)), null == t) return null;
  let E = () => (0, o.openUserSettings)(a.X.SUBSCRIPTIONS_PANEL, {
      section: _.nc_.SUBSCRIPTIONS
    }),
    x = (null != A ? d.Ay.getSkuIdForPlan(A.planId) : null) === p.pe.TIER_1;
  return n = null != b ? b : h ? "always-white" : "text-default", (0, r.jsxs)(s.ZpM, {
    className: l()(g.kL, f, {
      [g.He]: h
    }),
    type: s.ZpM.Types.CUSTOM,
    children: [(0, r.jsx)(s.EpV, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      className: l()(g.Kk, {
        [g.Pt]: h
      })
    }), (0, r.jsx)(s.Text, {
      variant: "text-sm/medium",
      color: n,
      children: x ? m.intl.format(m.t["tYuv+T"], {
        helpdeskArticle: c.A.getArticleURL(_.MVz.PREMIUM_DETAILS),
        onSubscriptionsClick: E
      }) : m.intl.format(m.t.xHRgU2, {
        subscriptionName: t,
        onSubscriptionsClick: E
      })
    })]
  })
}