/** Chunk was on web.js **/
/** chunk id: 349803, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk853590 = require("./853590.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk736519 = require("./736519.jsx"),
  Chunk784238 = require("./784238.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk861245 = require("./861245.js");
let _ = function(e) {
  let {
    isVisible: t,
    subscriptionTier: n,
    isApplicationHome: i,
    isEligibleForBogoPromotion: _
  } = e, m = (0, l.q_F)({
    transform: t ? "translateY(-100%)" : "translateY(0%)",
    opacity: +!!t,
    config: {
      tension: 120,
      friction: 12
    }
  }), h = {
    section: f.jXE.MARKETING_FLOATING_CTA
  }, g = (0, c.ZP)(), E = (0, l.wjy)(g);
  return (0, r.jsx)(o.animated.div, {
    className: a()(p.wrapper, {
      [p.fullscreenWrapper]: i,
      [p.invisible]: !t
    }),
    style: m,
    children: (0, r.jsxs)("div", {
      className: i ? p.innerWrapperApplicationHome : p.innerWrapper,
      children: [(0, r.jsx)(d.Z, {
        color: E ? s.Tt.BRAND_INVERTED : true,
        className: a()(p.button, {
          [p.subButton]: E
        }),
        subscriptionTier: n,
        premiumModalAnalyticsLocation: h,
        isPersistentCTA: true,
        hasActivePromotion: _,
        shinyButtonClassName: E ? true : p.tier2Gradient
      }), (0, r.jsx)(u.Z, {
        className: p.button,
        premiumModalAnalyticsLocation: h
      })]
    })
  })
}