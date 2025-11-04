/** Chunk was on 77033 **/
/** chunk id: 533785, original params: n,e,t (module,exports,require) **/
require.d(exports, {
  t: () => r
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js"),
  Chunk661009 = require("./661009.js");

function r(n) {
  let {
    leaderboard: e
  } = n;
  return null == e ? null : (0, l.jsxs)("div", {
    className: a.textContainer,
    children: [(0, l.jsx)(i.Text, {
      variant: "display-lg",
      color: "text-primary",
      children: e.title
    }), (0, l.jsx)(i.Heading, {
      variant: "heading-lg/semibold",
      color: "text-secondary",
      children: e.description
    })]
  })
}