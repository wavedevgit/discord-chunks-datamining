/** Chunk was on 77033 **/
/** chunk id: 533785, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  t: () => r
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js"),
  Chunk661009 = require("./661009.js");

function r(e) {
  let {
    leaderboard: n
  } = e;
  return null == n ? null : (0, l.jsxs)("div", {
    className: a.textContainer,
    children: [(0, l.jsx)(i.Text, {
      variant: "display-lg",
      color: "text-primary",
      children: n.title
    }), (0, l.jsx)(i.Heading, {
      variant: "heading-lg/semibold",
      color: "text-secondary",
      children: n.description
    })]
  })
}