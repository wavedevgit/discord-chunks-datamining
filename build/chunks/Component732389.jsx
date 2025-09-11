/** Chunk was on 83175 **/
/** chunk id: 732389, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  p: () => g
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
let g = e => {
  let {
    buttonAnalyticsObject: n,
    className: t,
    upsellText: o
  } = e, g = c.default.getCurrentUser(), h = (0, u.yd)(null == g ? true : g.premiumType, _.p9.TIER_2), C = (0, m._)({
    defaultResponse: x.intl.string(x.t["8x0jKS"]),
    onNonTier2Subscriber: x.intl.string(x.t.IJI7ys)
  });
  return h ? null : (0, a.jsxs)("div", {
    className: r()(f.upsellContainer, t),
    children: [(0, a.jsxs)("div", {
      className: f.row,
      children: [(0, a.jsx)(i.SrA, {
        size: "md",
        color: d.JX.PREMIUM_TIER_2
      }), (0, a.jsx)(l.xvT, {
        variant: "text-sm/medium",
        color: "header-primary",
        className: f.upsellText,
        children: o
      })]
    }), (0, a.jsx)(p.Z, {
      className: f.button,
      size: s.zx.Sizes.SMALL,
      look: s.zx.Looks.BLANK,
      color: s.zx.Colors.CUSTOM,
      subscriptionTier: _.Si.TIER_2,
      textOptions: {
        textOverride: C
      },
      premiumModalAnalyticsLocation: n,
      showGradient: true
    })]
  })
}