/** Chunk was on 60667 **/
/** chunk id: 564230, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk353709 = require("./353709.js"),
  Chunk397927 = require("./397927.js"),
  Chunk65470 = require("./65470.jsx"),
  Chunk792656 = require("./792656.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk802316 = require("./802316.js");
let d = function(e) {
  let {
    isVisible: t,
    subscriptionTier: n,
    isEligibleForBogoPromotion: d
  } = e, u = (0, l.zhh)({
    transform: t ? "translateY(-100%)" : "translateY(0%)",
    opacity: +!!t,
    config: {
      tension: 120,
      friction: 12
    }
  }), _ = {
    section: o.JJy.MARKETING_FLOATING_CTA
  };
  return (0, r.jsx)(i.animated.div, {
    className: c.i,
    style: u,
    "data-mtctest-ignore": "true",
    children: (0, r.jsxs)("div", {
      className: c.U,
      children: [(0, r.jsx)(a.A, {
        size: "md",
        subscriptionTier: n,
        hasActivePromotion: !!d,
        isPersistentCTA: true,
        premiumModalAnalyticsLocation: _
      }), (0, r.jsx)(s.A, {
        variant: "secondary",
        size: "md"
      })]
    })
  })
}