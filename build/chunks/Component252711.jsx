/** Chunk was on web.js **/
/** chunk id: 252711, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk432022 = require("./432022.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk736653 = require("./736653.js"),
  Chunk194509 = require("./194509.jsx"),
  Chunk396375 = require("./396375.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk41099 = require("./41099.js");
let _ = function(e) {
  let {
    isVisible: t,
    subscriptionTier: n,
    isApplicationHome: i,
    isEligibleForBogoPromotion: _
  } = e, h = (0, l.zhh)({
    transform: t ? "translateY(-100%)" : "translateY(0%)",
    opacity: +!!t,
    config: {
      tension: 120,
      friction: 12
    }
  }), m = {
    section: f.JJy.MARKETING_FLOATING_CTA
  }, g = (0, c.Ay)(), E = (0, l.Mwr)(g);
  return (0, r.jsx)(s.animated.div, {
    className: a()(p.iE, {
      [p.H8]: i,
      [p.q4]: !t
    }),
    style: h,
    children: (0, r.jsxs)("div", {
      className: i ? p.zW : p.iJ,
      children: [(0, r.jsx)(d.A, {
        color: E ? o.XD.BRAND_INVERTED : true,
        className: a()(p.x6, {
          [p.Ph]: E
        }),
        subscriptionTier: n,
        premiumModalAnalyticsLocation: m,
        isPersistentCTA: true,
        hasActivePromotion: _,
        shinyButtonClassName: E ? true : p.PJ
      }), (0, r.jsx)(u.A, {
        className: p.x6,
        premiumModalAnalyticsLocation: m
      })]
    })
  })
}