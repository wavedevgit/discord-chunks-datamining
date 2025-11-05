/** Chunk was on 1272 **/
/** chunk id: 497334, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => f
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk927359 = require("./927359.js"),
  Chunk266454 = require("./266454.js"),
  Chunk227140 = require("./227140.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk941744 = require("./941744.js");

function f(e) {
  let {
    expiresAt: t
  } = e, n = (0, o.ZP)(t, o.aj.SHORT_TIME), i = (0, c.zu)(a.z.Q2_2025_MARKETING_MOMENT_NITRO_TAB_BADGE_V2);
  return "" === n ? null : (n = n.toUpperCase(), i) ? (0, r.jsxs)("div", {
    className: l()(p.premiumTrialBadge, p.premiumTrialAcknowledgedBadge, {}),
    children: [(0, r.jsx)(s.T39, {
      size: "custom",
      width: 14,
      height: 14,
      color: "currentColor",
      className: p.reverseTrialBadgeIcon
    }), (0, r.jsx)(s.Text, {
      variant: "eyebrow",
      color: "text-secondary",
      children: n
    })]
  }) : (0, r.jsx)(u.Z, {
    copy: d.intl.string(d.t["B66Z+f"]),
    showStars: false
  })
}