/** Chunk was on web.js **/
/** chunk id: 349803, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk358458 = require("./358458.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk736519 = require("./736519.jsx"),
  Chunk784238 = require("./784238.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk679865 = require("./679865.js");
let p = function(e) {
  let {
    isVisible: t,
    subscriptionTier: n,
    isApplicationHome: i,
    isEligibleForBogoPromotion: p
  } = e, h = (0, l.q_F)({
    transform: t ? "translateY(-100%)" : "translateY(0%)",
    opacity: +!!t,
    config: {
      tension: 120,
      friction: 12
    }
  }), m = {
    section: f.jXE.MARKETING_FLOATING_CTA
  }, g = (0, c.ZP)(), E = (0, l.wjy)(g);
  return (0, r.jsx)(o.animated.div, {
    className: a()(_.wrapper, {
      [_.fullscreenWrapper]: i,
      [_.invisible]: !t
    }),
    style: h,
    children: (0, r.jsxs)("div", {
      className: i ? _.innerWrapperApplicationHome : _.innerWrapper,
      children: [(0, r.jsx)(d.Z, {
        color: E ? s.Tt.BRAND_INVERTED : true,
        className: a()(_.button, {
          [_.subButton]: E
        }),
        subscriptionTier: n,
        premiumModalAnalyticsLocation: m,
        isPersistentCTA: true,
        hasActivePromotion: p,
        shinyButtonClassName: E ? true : _.tier2Gradient
      }), (0, r.jsx)(u.Z, {
        className: _.button,
        premiumModalAnalyticsLocation: m
      })]
    })
  })
}