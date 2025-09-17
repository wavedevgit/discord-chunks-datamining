/** Chunk was on 96033 **/
/** chunk id: 411477, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk436774 = require("./436774.jsx"),
  Chunk619598 = require("./619598.js");

function d(t) {
  let {
    text: e,
    className: n,
    button: o,
    reducedRightPadding: d = false
  } = t;
  return (0, i.jsxs)("div", {
    className: a()(d ? s.noticeWithoutRightPadding : s.noticeWithRightPadding, n),
    children: [(0, i.jsxs)("div", {
      className: s.noticeLeft,
      children: [(0, i.jsx)(r.SrA, {
        size: "md",
        className: s.icon,
        color: l.JX.PREMIUM_TIER_2
      }), (0, i.jsx)(r.Text, {
        className: s.text,
        variant: "text-md/normal",
        color: "header-primary",
        children: e
      })]
    }), o]
  })
}