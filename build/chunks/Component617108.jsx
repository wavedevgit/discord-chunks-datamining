/** Chunk was on 44384 **/
/** chunk id: 617108, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => N
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
let N = function(e) {
  var t;
  let {
    dismissCurrentNotice: n,
    subscriptionTier: N
  } = e, {
    analyticsLocations: p
  } = (0, a.Ay)(o.A.PREMIUM_TIER_2_DISCOUNT_ENDING_NOTICE), R = (0, E.O)(), S = (0, l.A)(null != R && null != R.expires_at ? Date.parse(R.expires_at) : 0), {
    variant: P,
    showNagbar: y
  } = (0, u.Ay)("PremiumDiscountEndingNotice");
  if (null == R || (null == (t = R.discount) ? true : t.plan_ids.some(e => A.hd[e].skuId !== N)) || null == R.expires_at || Object.values(S).every(e => 0 === e) || !y) return null;
  let f = () => {
    (0, s.A)({
      subscriptionTier: N,
      analyticsLocations: p,
      analyticsObject: {
        page: T.liQ.IN_APP,
        section: T.JJy.NOTIFICATION_BAR,
        object: T.ZSU.BUTTON_CTA
      }
    })
  };
  return P === u.CJ.NAGBAR_REFRESH ? (0, r.jsxs)(d.T0, {
    onClick: () => {
      n(), c.default.track(T.HAw.APP_NOTICE_CLOSED, {
        notice_type: T.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING
      })
    },
    children: [(0, r.jsx)(d.In, {
      children: (0, _.rn)(S, Number(R.discount.amount))
    }), (0, r.jsx)(d.fY, {
      onClick: f,
      text: I.intl.string(I.t.zLXssK)
    })]
  }) : (0, r.jsxs)(i.$Td, {
    color: i.Hv$.PREMIUM_TIER_2,
    children: [(0, r.jsx)(i.PMB, {
      noticeType: T.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING,
      onClick: n
    }), (0, r.jsx)(i.tvc, {
      size: "md",
      color: "currentColor",
      className: O.PC
    }), (0, _.rn)(S, Number(R.discount.amount)), (0, r.jsx)(i.zr9, {
      onClick: f,
      children: I.intl.string(I.t.zLXssK)
    })]
  })
}