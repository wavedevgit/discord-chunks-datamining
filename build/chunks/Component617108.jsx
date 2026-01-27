/** Chunk was on web.js **/
/** chunk id: 617108, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => E
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk496431 = require("./496431.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk532794 = require("./532794.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk804412 = require("./804412.js"),
  Chunk422936 = require("./422936.js"),
  Chunk635995 = require("./635995.jsx"),
  Chunk915516 = require("./915516.js"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk237082 = require("./237082.js");
let E = function(e) {
  var t;
  let {
    dismissCurrentNotice: n,
    subscriptionTier: E
  } = e, {
    analyticsLocations: y
  } = (0, o.Ay)(s.A.PREMIUM_TIER_2_DISCOUNT_ENDING_NOTICE), b = (0, d.O)(), O = (0, a.A)(null != b && null != b.expires_at ? Date.parse(b.expires_at) : 0), {
    variant: v,
    showNagbar: A
  } = (0, u.Ay)("PremiumDiscountEndingNotice");
  if (null == b || (null == (t = b.discount) ? true : t.plan_ids.some(e => _.hd[e].skuId !== E)) || null == b.expires_at || Object.values(O).every(e => 0 === e) || !A) return null;
  let I = () => {
    (0, l.A)({
      subscriptionTier: E,
      analyticsLocations: y,
      analyticsObject: {
        page: h.liQ.IN_APP,
        section: h.JJy.NOTIFICATION_BAR,
        object: h.ZSU.BUTTON_CTA
      }
    })
  };
  return v === u.CJ.NAGBAR_REFRESH ? (0, r.jsxs)(f.T0, {
    onClick: () => {
      n(), c.default.track(h.HAw.APP_NOTICE_CLOSED, {
        notice_type: h.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING
      })
    },
    children: [(0, r.jsx)(f.In, {
      children: (0, p.rn)(O, Number(b.discount.amount))
    }), (0, r.jsx)(f.fY, {
      onClick: I,
      text: m.intl.string(m.t.zLXssK)
    })]
  }) : (0, r.jsxs)(i.$Td, {
    color: i.Hv$.PREMIUM_TIER_2,
    children: [(0, r.jsx)(i.PMB, {
      noticeType: h.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING,
      onClick: n
    }), (0, r.jsx)(i.tvc, {
      size: "md",
      color: "currentColor",
      className: g.PC
    }), (0, p.rn)(O, Number(b.discount.amount)), (0, r.jsx)(i.zr9, {
      onClick: I,
      children: m.intl.string(m.t.zLXssK)
    })]
  })
}