/** Chunk was on 66181 **/
/** chunk id: 349803, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk803948 = require("./803948.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk736519 = require("./736519.jsx"),
  Chunk784238 = require("./784238.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk679865 = require("./679865.js");
let g = function(e) {
  let {
    isVisible: t,
    subscriptionTier: n,
    isApplicationHome: r,
    isEligibleForBogoPromotion: g
  } = e, h = (0, o.q_F)({
    transform: t ? "translateY(-100%)" : "translateY(0%)",
    opacity: +!!t,
    config: {
      tension: 120,
      friction: 12
    }
  }), f = {
    section: m.jXE.MARKETING_FLOATING_CTA
  }, b = (0, c.ZP)(), x = (0, o.wjy)(b);
  return (0, i.jsx)(a.animated.div, {
    className: s()(p.wrapper, {
      [p.fullscreenWrapper]: r,
      [p.invisible]: !t
    }),
    style: h,
    children: (0, i.jsxs)("div", {
      className: r ? p.innerWrapperApplicationHome : p.innerWrapper,
      children: [(0, i.jsx)(u.Z, {
        color: x ? l.Tt.BRAND_INVERTED : true,
        className: s()(p.button, {
          [p.subButton]: x
        }),
        subscriptionTier: n,
        premiumModalAnalyticsLocation: f,
        isPersistentCTA: true,
        hasActivePromotion: g,
        shinyButtonClassName: x ? true : p.tier2Gradient
      }), (0, i.jsx)(d.Z, {
        className: p.button,
        premiumModalAnalyticsLocation: f
      })]
    })
  })
}