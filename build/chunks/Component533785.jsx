/** Chunk was on 77033 **/
/** chunk id: 533785, original params: n,e,l (module,exports,require) **/
require.d(exports, {
  t: () => d
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk481060 = require("./481060.js"),
  Chunk64208 = require("./64208.js");

function d(n) {
  let {
    leaderboard: e
  } = n;
  return null == e ? null : (0, t.jsxs)("div", {
    className: a.textContainer,
    children: [(0, t.jsx)(i.Text, {
      variant: "display-lg",
      color: "text-primary",
      children: e.title
    }), (0, t.jsx)(i.Heading, {
      variant: "heading-lg/semibold",
      color: "text-secondary",
      children: e.description
    })]
  })
}