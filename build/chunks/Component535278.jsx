/** Chunk was on web.js **/
/** chunk id: 535278, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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

function h(e, t) {
  let n = new Intl.NumberFormat(c.default.locale, {
    style: "percent",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(t / 100);
  return e.days > 0 ? _.intl.formatToPlainString(_.t["7mw8CQ"], {
    days: e.days,
    discountPercentage: n
  }) : e.hours > 0 ? _.intl.formatToPlainString(_.t["0hYT6u"], {
    hours: e.hours,
    discountPercentage: n
  }) : _.intl.formatToPlainString(_.t["2rh7r6"], {
    minutes: Math.max(e.minutes, 1),
    discountPercentage: n
  })
}
let m = function(e) {
  var t;
  let {
    dismissCurrentNotice: n,
    subscriptionTier: c
  } = e, {
    analyticsLocations: m
  } = (0, s.ZP)(o.Z.PREMIUM_TIER_2_DISCOUNT_ENDING_NOTICE), g = (0, u.Ng)(), E = (0, a.Z)(null != g && null != g.expires_at ? Date.parse(g.expires_at) : 0);
  return null == g || (null == (t = g.discount) ? true : t.plan_ids.some(e => d.GP[e].skuId !== c)) || null == g.expires_at || Object.values(E).every(e => 0 === e) ? null : (0, r.jsxs)(i.qXd, {
    color: i.DM8.PREMIUM_TIER_2,
    children: [(0, r.jsx)(i.RyX, {
      onClick: n
    }), (0, r.jsx)(i.SrA, {
      size: "md",
      color: "currentColor",
      className: p.premiumIcon
    }), h(E, Number(g.discount.amount)), (0, r.jsx)(i.EyT, {
      onClick: () => {
        (0, l.Z)({
          subscriptionTier: c,
          analyticsLocations: m,
          analyticsObject: {
            page: f.ZY5.IN_APP,
            section: f.jXE.NOTIFICATION_BAR,
            object: f.qAy.BUTTON_CTA
          }
        })
      },
      children: _.intl.string(_.t.zLXssL)
    })]
  })
}