/** Chunk was on 1272 **/
/** chunk id: 244989, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk65538 = require("./65538.js");

function o(e) {
  let {
    badgeCopy: t,
    acknowledgedBadgeCopy: n,
    isDismissed: i
  } = e;
  return i ? (0, r.jsxs)("div", {
    className: l()(s.premiumBadge, s.premiumAcknowledgedBadge),
    children: [(0, r.jsx)(a.T39, {
      size: "custom",
      width: 10,
      height: 10,
      color: "currentColor",
      className: s.BadgeClockIcon
    }), (0, r.jsx)(a.Text, {
      variant: "eyebrow",
      color: "text-secondary",
      children: n
    })]
  }) : (0, r.jsx)("div", {
    className: l()(s.premiumBadge, s.premiumUnacknowledgedBadge),
    children: (0, r.jsx)(a.Text, {
      variant: "eyebrow",
      className: s.premiumUnacknowledgedBadgeCopy,
      children: t
    })
  })
}