/** Chunk was on 96033 **/
/** chunk id: 411477, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk436774 = require("./436774.jsx"),
  Chunk619598 = require("./619598.js");

function c(t) {
  let {
    text: e,
    className: i,
    button: a,
    reducedRightPadding: c = false
  } = t;
  return (0, n.jsxs)("div", {
    className: o()(c ? s.noticeWithoutRightPadding : s.noticeWithRightPadding, i),
    children: [(0, n.jsxs)("div", {
      className: s.noticeLeft,
      children: [(0, n.jsx)(r.SrA, {
        size: "md",
        className: s.icon,
        color: l.JX.PREMIUM_TIER_2
      }), (0, n.jsx)(r.Text, {
        className: s.text,
        variant: "text-md/normal",
        color: "header-primary",
        children: e
      })]
    }), a]
  })
}