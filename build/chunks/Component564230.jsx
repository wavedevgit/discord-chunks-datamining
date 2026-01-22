/** Chunk was on web.js **/
/** chunk id: 564230, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk108531 = require("./108531.js"),
  Chunk397927 = require("./397927.js"),
  Chunk65470 = require("./65470.jsx"),
  Chunk792656 = require("./792656.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk802316 = require("./802316.js");
let u = 120,
  d = 12,
  f = function(e) {
    let {
      isVisible: t,
      subscriptionTier: n,
      isEligibleForBogoPromotion: f
    } = e, p = (0, a.zhh)({
      transform: t ? "translateY(-100%)" : "translateY(0%)",
      opacity: +!!t,
      config: {
        tension: u,
        friction: d
      }
    }), _ = {
      section: l.JJy.MARKETING_FLOATING_CTA
    };
    return (0, r.jsx)(i.animated.div, {
      className: c.i,
      style: p,
      "data-mtctest-ignore": "true",
      children: (0, r.jsxs)("div", {
        className: c.U,
        children: [(0, r.jsx)(o.A, {
          size: "md",
          subscriptionTier: n,
          hasActivePromotion: !!f,
          isPersistentCTA: true,
          premiumModalAnalyticsLocation: _
        }), (0, r.jsx)(s.A, {
          variant: "secondary",
          size: "md"
        })]
      })
    })
  }