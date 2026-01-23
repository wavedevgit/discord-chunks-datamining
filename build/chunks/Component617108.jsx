/** Chunk was on web.js **/
/** chunk id: 617108, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk496431 = require("./496431.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk532794 = require("./532794.jsx"),
  Chunk804412 = require("./804412.js"),
  Chunk422936 = require("./422936.js"),
  Chunk635995 = require("./635995.jsx"),
  Chunk915516 = require("./915516.js"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk237082 = require("./237082.js");
let g = function(e) {
  var t;
  let {
    dismissCurrentNotice: n,
    subscriptionTier: g
  } = e, {
    analyticsLocations: E
  } = (0, o.Ay)(s.A.PREMIUM_TIER_2_DISCOUNT_ENDING_NOTICE), y = (0, u.O)(), b = (0, a.A)(null != y && null != y.expires_at ? Date.parse(y.expires_at) : 0), {
    variant: O,
    showNagbar: v
  } = (0, c.Ay)("PremiumDiscountEndingNotice");
  if (null == y || (null == (t = y.discount) ? true : t.plan_ids.some(e => p.hd[e].skuId !== g)) || null == y.expires_at || Object.values(b).every(e => 0 === e) || !v) return null;
  let A = () => {
    (0, l.A)({
      subscriptionTier: g,
      analyticsLocations: E,
      analyticsObject: {
        page: _.liQ.IN_APP,
        section: _.JJy.NOTIFICATION_BAR,
        object: _.ZSU.BUTTON_CTA
      }
    })
  };
  return O === c.CJ.NAGBAR_REFRESH ? (0, r.jsxs)(d.T0, {
    onClick: n,
    children: [(0, r.jsx)(d.In, {
      children: (0, f.rn)(b, Number(y.discount.amount))
    }), (0, r.jsx)(d.fY, {
      onClick: A,
      text: h.intl.string(h.t.zLXssK)
    })]
  }) : (0, r.jsxs)(i.$Td, {
    color: i.Hv$.PREMIUM_TIER_2,
    children: [(0, r.jsx)(i.PMB, {
      noticeType: _.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING,
      onClick: n
    }), (0, r.jsx)(i.tvc, {
      size: "md",
      color: "currentColor",
      className: m.PC
    }), (0, f.rn)(b, Number(y.discount.amount)), (0, r.jsx)(i.zr9, {
      onClick: A,
      children: h.intl.string(h.t.zLXssK)
    })]
  })
}