/** Chunk was on 44384 **/
/** chunk id: 617108, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => T
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk496431 = require("./496431.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk532794 = require("./532794.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk422936 = require("./422936.js"),
  Chunk635995 = require("./635995.jsx"),
  Chunk915516 = require("./915516.js"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let T = function(e) {
  var t;
  let {
    dismissCurrentNotice: n,
    subscriptionTier: T
  } = e, {
    analyticsLocations: I
  } = (0, o.Ay)(l.A.PREMIUM_TIER_2_DISCOUNT_ENDING_NOTICE), O = (0, c.O)(), N = (0, i.A)(null != O && null != O.expires_at ? Date.parse(O.expires_at) : 0);
  return null == O || (null == (t = O.discount) ? true : t.plan_ids.some(e => d.hd[e].skuId !== T)) || null == O.expires_at || Object.values(N).every(e => 0 === e) ? null : (0, r.jsxs)(u.T0, {
    onClick: () => {
      n(), s.default.track(_.HAw.APP_NOTICE_CLOSED, {
        notice_type: _.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING
      })
    },
    children: [(0, r.jsx)(u.In, {
      children: (0, E.rn)(N, Number(O.discount.amount))
    }), (0, r.jsx)(u.fY, {
      onClick: () => {
        (0, a.A)({
          subscriptionTier: T,
          analyticsLocations: I,
          analyticsObject: {
            page: _.liQ.IN_APP,
            section: _.JJy.NOTIFICATION_BAR,
            object: _.ZSU.BUTTON_CTA
          }
        })
      },
      text: A.intl.string(A.t.zLXssK)
    })]
  })
}