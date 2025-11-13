/** Chunk was on web.js **/
/** chunk id: 47840, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk203463 = require("./203463.js"),
  Chunk481060 = require("./481060.js"),
  Chunk117791 = require("./117791.jsx"),
  Chunk638212 = require("./638212.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk957833 = require("./957833.js");
let u = 120,
  d = 12,
  f = function(e) {
    let {
      isVisible: t,
      subscriptionTier: n,
      isEligibleForBogoPromotion: f
    } = e, _ = (0, a.q_F)({
      transform: t ? "translateY(-100%)" : "translateY(0%)",
      opacity: +!!t,
      config: {
        tension: u,
        friction: d
      }
    }), p = {
      section: l.jXE.MARKETING_FLOATING_CTA
    };
    return (0, r.jsx)(i.animated.div, {
      className: c.wrapper,
      style: _,
      "data-mtctest-ignore": "true",
      children: (0, r.jsxs)("div", {
        className: c.buttonContainer,
        children: [(0, r.jsx)(s.Z, {
          size: "md",
          subscriptionTier: n,
          hasActivePromotion: !!f,
          isPersistentCTA: true,
          premiumModalAnalyticsLocation: p
        }), (0, r.jsx)(o.Z, {
          variant: "secondary",
          size: "md"
        })]
      })
    })
  }