/** Chunk was on 31253 **/
/** chunk id: 535278, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => T
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk774078 = require("./774078.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk963249 = require("./963249.jsx"),
  Chunk706454 = require("./706454.js"),
  Chunk104494 = require("./104494.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk50953 = require("./50953.js");
let T = 12633 == require.j ? function(e) {
  var t;
  let {
    dismissCurrentNotice: n,
    subscriptionTier: T
  } = e, {
    analyticsLocations: O
  } = (0, a.ZP)(o.Z.PREMIUM_TIER_2_DISCOUNT_ENDING_NOTICE), N = (0, u.Ng)(), S = (0, l.Z)(null != N && null != N.expires_at ? Date.parse(N.expires_at) : 0);
  return null == N || (null == (t = N.discount) ? true : t.plan_ids.some(e => _.GP[e].skuId !== T)) || null == N.expires_at || Object.values(S).every(e => 0 === e) ? null : (0, r.jsxs)(i.qXd, {
    color: i.DM8.PREMIUM_TIER_2,
    children: [(0, r.jsx)(i.RyX, {
      onClick: n
    }), (0, r.jsx)(i.SrA, {
      size: "md",
      color: "currentColor",
      className: I.premiumIcon
    }), function(e, t) {
      let n = new Intl.NumberFormat(s.default.locale, {
        style: "percent",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(t / 100);
      return e.days > 0 ? E.intl.formatToPlainString(E.t["7mw8CQ"], {
        days: e.days,
        discountPercentage: n
      }) : e.hours > 0 ? E.intl.formatToPlainString(E.t["0hYT6u"], {
        hours: e.hours,
        discountPercentage: n
      }) : E.intl.formatToPlainString(E.t["2rh7r6"], {
        minutes: Math.max(e.minutes, 1),
        discountPercentage: n
      })
    }(S, Number(N.discount.amount)), (0, r.jsx)(i.EyT, {
      onClick: () => {
        (0, c.Z)({
          subscriptionTier: T,
          analyticsLocations: O,
          analyticsObject: {
            page: d.ZY5.IN_APP,
            section: d.jXE.NOTIFICATION_BAR,
            object: d.qAy.BUTTON_CTA
          }
        })
      },
      children: E.intl.string(E.t.zLXssL)
    })]
  })
} : null