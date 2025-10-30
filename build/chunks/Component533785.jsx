/** Chunk was on 77033 **/
/** chunk id: 533785, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  t: () => i
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js"),
  Chunk64208 = require("./64208.js");

function i(e) {
  let {
    leaderboard: t
  } = e;
  return null == t ? null : (0, a.jsxs)("div", {
    className: r.textContainer,
    children: [(0, a.jsx)(l.Text, {
      variant: "display-lg",
      color: "text-primary",
      children: t.title
    }), (0, a.jsx)(l.Heading, {
      variant: "heading-lg/semibold",
      color: "text-secondary",
      children: t.description
    })]
  })
}