/** Chunk was on 77033 **/
/** chunk id: 533785, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  t: () => o
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk481060 = require("./481060.js"),
  Chunk661009 = require("./661009.js");

function o(e) {
  let {
    leaderboard: n
  } = e;
  return null == n ? null : (0, l.jsxs)("div", {
    className: a.textContainer,
    children: [(0, l.jsx)(i.Heading, {
      variant: "display-lg",
      color: "text-primary",
      children: n.title
    }), (0, l.jsx)(i.Text, {
      variant: "text-lg/semibold",
      color: "text-secondary",
      children: n.description
    })]
  })
}