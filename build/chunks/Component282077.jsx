/** Chunk was on 21738 **/
/** chunk id: 282077, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk110259 = require("./110259.js"),
  Chunk877624 = require("./877624.js"),
  Chunk397927 = require("./397927.js"),
  Chunk139286 = require("./139286.js"),
  Chunk887345 = require("./887345.js");

function d(e) {
  let {
    componentId: t,
    badgeCopy: n,
    acknowledgedBadgeCopy: i,
    isDismissed: d
  } = e;
  return ((0, c.A)({
    type: a.ImpressionTypes.VIEW,
    name: a.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
    properties: {
      component_type: s.C.PREMIUM_TAB,
      component_id: t
    }
  }), d) ? (0, r.jsxs)("div", {
    className: l()(u.BE, u.ZA),
    children: [(0, r.jsx)(o.O4, {
      size: "custom",
      width: 10,
      height: 10,
      color: "currentColor",
      className: u.P0
    }), (0, r.jsx)(o.Text, {
      variant: "eyebrow",
      color: "text-subtle",
      children: i
    })]
  }) : (0, r.jsx)("div", {
    className: l()(u.BE, u.CU),
    children: (0, r.jsx)(o.Text, {
      variant: "eyebrow",
      className: u.lI,
      children: n
    })
  })
}