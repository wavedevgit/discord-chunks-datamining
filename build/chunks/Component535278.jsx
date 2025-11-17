/** Chunk was on web.js **/
/** chunk id: 535278, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk774078 = require("./774078.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk963249 = require("./963249.jsx"),
  Chunk931118 = require("./931118.js"),
  Chunk622909 = require("./622909.js"),
  Chunk959052 = require("./959052.jsx"),
  Chunk533246 = require("./533246.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk655227 = require("./655227.js");
let g = function(e) {
  var t;
  let {
    dismissCurrentNotice: n,
    subscriptionTier: g
  } = e, {
    analyticsLocations: E
  } = (0, s.ZP)(o.Z.PREMIUM_TIER_2_DISCOUNT_ENDING_NOTICE), b = (0, u.N)(), y = (0, a.Z)(null != b && null != b.expires_at ? Date.parse(b.expires_at) : 0), {
    variant: O,
    showNagbar: v
  } = (0, c.ZP)("PremiumDiscountEndingNotice");
  if (null == b || (null == (t = b.discount) ? true : t.plan_ids.some(e => _.GP[e].skuId !== g)) || null == b.expires_at || Object.values(y).every(e => 0 === e) || !v) return null;
  let I = () => {
    (0, l.Z)({
      subscriptionTier: g,
      analyticsLocations: E,
      analyticsObject: {
        page: p.ZY5.IN_APP,
        section: p.jXE.NOTIFICATION_BAR,
        object: p.qAy.BUTTON_CTA
      }
    })
  };
  return O === c.tE.NAGBAR_REFRESH ? (0, r.jsxs)(d.eJ, {
    onClick: n,
    children: [(0, r.jsx)(d.Jy, {
      children: (0, f.TV)(y, Number(b.discount.amount))
    }), (0, r.jsx)(d.OJ, {
      onClick: I,
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
    }), (0, f.TV)(y, Number(b.discount.amount)), (0, r.jsx)(i.EyT, {
      onClick: I,
      children: h.intl.string(h.t.zLXssK)
    })]
  })
}