/** Chunk was on web.js **/
/** chunk id: 47840, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk236726 = require("./236726.js"),
  Chunk481060 = require("./481060.js"),
  Chunk117791 = require("./117791.jsx"),
  Chunk638212 = require("./638212.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk515249 = require("./515249.js");
let u = 120,
  d = 12,
  f = function(e) {
    let {
      isVisible: t,
      subscriptionTier: n,
      isEligibleForBogoPromotion: f
    } = e, p = (0, a.q_F)({
      transform: t ? "translateY(-100%)" : "translateY(0%)",
      opacity: +!!t,
      config: {
        tension: u,
        friction: d
      }
    }), _ = {
      section: l.jXE.MARKETING_FLOATING_CTA
    };
    return (0, r.jsx)(i.animated.div, {
      className: c.wrapper,
      style: p,
      "data-mtctest-ignore": "true",
      children: (0, r.jsxs)("div", {
        className: c.buttonContainer,
        children: [(0, r.jsx)(s.Z, {
          size: "md",
          subscriptionTier: n,
          hasActivePromotion: !!f,
          isPersistentCTA: true,
          premiumModalAnalyticsLocation: _
        }), (0, r.jsx)(o.Z, {
          variant: "secondary",
          size: "md"
        })]
      })
    })
  }