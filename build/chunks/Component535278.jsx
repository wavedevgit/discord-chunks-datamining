/** Chunk was on web.js **/
/** chunk id: 535278, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g,
  Z: () => E
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk774078 = require("./774078.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk963249 = require("./963249.jsx"),
  Chunk706454 = require("./706454.js"),
  Chunk931118 = require("./931118.js"),
  Chunk104494 = require("./104494.js"),
  Chunk959052 = require("./959052.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk50953 = require("./50953.js");

function g(e, t) {
  let n = new Intl.NumberFormat(c.default.locale, {
    style: "percent",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(t / 100);
  return e.days > 0 ? h.intl.formatToPlainString(h.t["7mw8CZ"], {
    days: e.days,
    discountPercentage: n
  }) : e.hours > 0 ? h.intl.formatToPlainString(h.t["0hYT6o"], {
    hours: e.hours,
    discountPercentage: n
  }) : h.intl.formatToPlainString(h.t["2rh7rw"], {
    minutes: Math.max(e.minutes, 1),
    discountPercentage: n
  })
}
let E = function(e) {
  var t;
  let {
    dismissCurrentNotice: n,
    subscriptionTier: c
  } = e, {
    analyticsLocations: E
  } = (0, s.ZP)(o.Z.PREMIUM_TIER_2_DISCOUNT_ENDING_NOTICE), b = (0, d.Ng)(), y = (0, a.Z)(null != b && null != b.expires_at ? Date.parse(b.expires_at) : 0), {
    variant: O
  } = (0, u.ZP)("PremiumDiscountEndingNotice");
  if (null == b || (null == (t = b.discount) ? true : t.plan_ids.some(e => _.GP[e].skuId !== c)) || null == b.expires_at || Object.values(y).every(e => 0 === e)) return null;
  let v = () => {
    (0, l.Z)({
      subscriptionTier: c,
      analyticsLocations: E,
      analyticsObject: {
        page: p.ZY5.IN_APP,
        section: p.jXE.NOTIFICATION_BAR,
        object: p.qAy.BUTTON_CTA
      }
    })
  };
  return O === u.tE.NAGBAR_REFRESH ? (0, r.jsxs)(f.eJ, {
    onClick: n,
    children: [(0, r.jsx)(f.Jy, {
      children: g(y, Number(b.discount.amount))
    }), (0, r.jsx)(f.OJ, {
      onClick: v,
      text: h.intl.string(h.t.zLXssK)
    })]
  }) : (0, r.jsxs)(i.qXd, {
    color: i.DM8.PREMIUM_TIER_2,
    children: [(0, r.jsx)(i.RyX, {
      onClick: n
    }), (0, r.jsx)(i.SrA, {
      size: "md",
      color: "currentColor",
      className: m.premiumIcon
    }), g(y, Number(b.discount.amount)), (0, r.jsx)(i.EyT, {
      onClick: v,
      children: h.intl.string(h.t.zLXssK)
    })]
  })
}