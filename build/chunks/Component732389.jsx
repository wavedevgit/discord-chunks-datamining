/** Chunk was on web.js **/
/** chunk id: 732389, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  p: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk558560 = require("./558560.js");
let g = e => {
  let {
    buttonAnalyticsObject: t,
    className: n,
    upsellText: i
  } = e, g = u.default.getCurrentUser(), E = (0, d.yd)(null == g ? true : g.premiumType, p.p9.TIER_2), b = (0, f._)({
    defaultResponse: h.intl.string(h.t["8x0jKS"]),
    onNonTier2Subscriber: h.intl.string(h.t.IJI7ys)
  });
  return E ? null : (0, r.jsxs)("div", {
    className: a()(m.upsellContainer, n),
    children: [(0, r.jsxs)("div", {
      className: m.row,
      children: [(0, r.jsx)(o.SrA, {
        size: "md",
        color: c.JX.PREMIUM_TIER_2
      }), (0, r.jsx)(s.xv, {
        variant: "text-sm/medium",
        color: "header-primary",
        className: m.upsellText,
        children: i
      })]
    }), (0, r.jsx)(_.Z, {
      className: m.button,
      size: l.zx.Sizes.SMALL,
      look: l.zx.Looks.BLANK,
      color: l.zx.Colors.CUSTOM,
      subscriptionTier: p.Si.TIER_2,
      textOptions: {
        textOverride: b
      },
      premiumModalAnalyticsLocation: t,
      showGradient: true
    })]
  })
}