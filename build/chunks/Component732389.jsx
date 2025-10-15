/** Chunk was on 83175 **/
/** chunk id: 732389, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  p: () => x
});
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk657707 = require("./657707.js"),
  Chunk793030 = require("./793030.js"),
  Chunk755721 = require("./755721.js"),
  Chunk436774 = require("./436774.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk111361 = require("./111361.js"),
  Chunk773104 = require("./773104.js"),
  Chunk784238 = require("./784238.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk851499 = require("./851499.js");
let x = e => {
  let {
    buttonAnalyticsObject: n,
    className: t,
    upsellText: o
  } = e, x = c.default.getCurrentUser(), h = (0, u.yd)(null == x ? true : x.premiumType, p.PremiumTypes.TIER_2), C = (0, m._)({
    defaultResponse: f.intl.string(f.t["8x0jKT"]),
    onNonTier2Subscriber: f.intl.string(f.t.IJI7yk)
  });
  return h ? null : (0, a.jsxs)("div", {
    className: r()(g.upsellContainer, t),
    children: [(0, a.jsxs)("div", {
      className: g.row,
      children: [(0, a.jsx)(i.SrA, {
        size: "md",
        color: d.JX.PREMIUM_TIER_2
      }), (0, a.jsx)(l.xvT, {
        variant: "text-sm/medium",
        color: "header-primary",
        className: g.upsellText,
        children: o
      })]
    }), (0, a.jsx)(_.Z, {
      className: g.button,
      size: s.zx.Sizes.SMALL,
      look: s.zx.Looks.BLANK,
      color: s.zx.Colors.CUSTOM,
      subscriptionTier: p.Si.TIER_2,
      textOptions: {
        textOverride: C
      },
      premiumModalAnalyticsLocation: n,
      showGradient: true
    })]
  })
}