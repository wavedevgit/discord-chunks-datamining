/** Chunk was on 1272 **/
/** chunk id: 244989, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk990547 = require("./990547.js"),
  Chunk79766 = require("./79766.js"),
  Chunk481060 = require("./481060.js"),
  Chunk213609 = require("./213609.js"),
  Chunk974789 = require("./974789.js");

function d(e) {
  let {
    componentId: t,
    badgeCopy: n,
    acknowledgedBadgeCopy: i,
    isDismissed: d
  } = e;
  return ((0, c.Z)({
    type: a.ImpressionTypes.VIEW,
    name: a.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
    properties: {
      component_type: o.I.PREMIUM_TAB,
      component_id: t
    }
  }), d) ? (0, r.jsxs)("div", {
    className: l()(u.premiumBadge, u.premiumAcknowledgedBadge),
    children: [(0, r.jsx)(s.T39, {
      size: "custom",
      width: 10,
      height: 10,
      color: "currentColor",
      className: u.BadgeClockIcon
    }), (0, r.jsx)(s.Text, {
      variant: "eyebrow",
      color: "text-subtle",
      children: i
    })]
  }) : (0, r.jsx)("div", {
    className: l()(u.premiumBadge, u.premiumUnacknowledgedBadge),
    children: (0, r.jsx)(s.Text, {
      variant: "eyebrow",
      className: u.premiumUnacknowledgedBadgeCopy,
      children: n
    })
  })
}