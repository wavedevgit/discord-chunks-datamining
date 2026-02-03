/** Chunk was on 9207 **/
/** chunk id: 252711, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk92674 = require("./92674.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk736653 = require("./736653.js"),
  Chunk194509 = require("./194509.jsx"),
  Chunk396375 = require("./396375.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk41099 = require("./41099.js");
let m = function(e) {
  let {
    isVisible: t,
    subscriptionTier: n,
    isApplicationHome: i,
    isEligibleForBogoPromotion: m
  } = e, g = (0, o.zhh)({
    transform: t ? "translateY(-100%)" : "translateY(0%)",
    opacity: +!!t,
    config: {
      tension: 120,
      friction: 12
    }
  }), A = {
    section: _.JJy.MARKETING_FLOATING_CTA
  }, f = (0, c.Ay)(), b = (0, o.Mwr)(f);
  return (0, r.jsx)(s.animated.div, {
    className: l()(p.iE, {
      [p.H8]: i,
      [p.q4]: !t
    }),
    style: g,
    children: (0, r.jsxs)("div", {
      className: i ? p.zW : p.iJ,
      children: [(0, r.jsx)(u.A, {
        color: b ? a.XD.BRAND_INVERTED : true,
        className: l()(p.x6, {
          [p.Ph]: b
        }),
        subscriptionTier: n,
        premiumModalAnalyticsLocation: A,
        isPersistentCTA: true,
        hasActivePromotion: m,
        shinyButtonClassName: b ? true : p.PJ
      }), (0, r.jsx)(d.A, {
        className: p.x6,
        premiumModalAnalyticsLocation: A
      })]
    })
  })
}