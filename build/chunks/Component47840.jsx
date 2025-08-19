/** Chunk was on 66181 **/
/** chunk id: 47840, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk803948 = require("./803948.js"),
  Chunk481060 = require("./481060.js"),
  Chunk117791 = require("./117791.jsx"),
  Chunk638212 = require("./638212.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk957833 = require("./957833.js");
let d = function(e) {
  let {
    isVisible: t,
    subscriptionTier: n,
    isEligibleForBogoPromotion: d
  } = e, u = (0, s.q_F)({
    transform: t ? "translateY(-100%)" : "translateY(0%)",
    opacity: +!!t,
    config: {
      tension: 120,
      friction: 12
    }
  }), m = {
    section: o.jXE.MARKETING_FLOATING_CTA
  };
  return (0, i.jsx)(r.animated.div, {
    className: c.wrapper,
    style: u,
    "data-mtctest-ignore": "true",
    children: (0, i.jsxs)("div", {
      className: c.buttonContainer,
      children: [(0, i.jsx)(l.Z, {
        size: "md",
        subscriptionTier: n,
        hasActivePromotion: !!d,
        isPersistentCTA: true,
        premiumModalAnalyticsLocation: m
      }), (0, i.jsx)(a.Z, {
        variant: "secondary",
        size: "md"
      })]
    })
  })
}