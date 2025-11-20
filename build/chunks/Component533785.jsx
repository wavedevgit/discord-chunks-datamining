/** Chunk was on 77033 **/
/** chunk id: 533785, original params: e,n,l (module,exports,require) **/
require.d(exports, {
  t: () => r
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk481060 = require("./481060.js"),
  Chunk661009 = require("./661009.js");

function r(e) {
  let {
    leaderboard: n
  } = e;
  return null == n ? null : (0, t.jsxs)("div", {
    className: a.textContainer,
    children: [(0, t.jsx)(i.Heading, {
      variant: "display-lg",
      color: "text-primary",
      children: n.title
    }), (0, t.jsx)(i.Text, {
      variant: "text-lg/semibold",
      color: "text-secondary",
      children: n.description
    })]
  })
}