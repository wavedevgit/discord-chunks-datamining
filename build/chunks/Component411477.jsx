/** Chunk was on 96033 **/
/** chunk id: 411477, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk436774 = require("./436774.jsx"),
  Chunk619598 = require("./619598.js");

function d(t) {
  let {
    text: e,
    className: i,
    button: a,
    reducedRightPadding: d = false
  } = t;
  return (0, n.jsxs)("div", {
    className: r()(d ? s.noticeWithoutRightPadding : s.noticeWithRightPadding, i),
    children: [(0, n.jsxs)("div", {
      className: s.noticeLeft,
      children: [(0, n.jsx)(o.SrA, {
        size: "md",
        className: s.icon,
        color: l.JX.PREMIUM_TIER_2
      }), (0, n.jsx)(o.Text, {
        className: s.text,
        variant: "text-md/normal",
        color: "header-primary",
        children: e
      })]
    }), a]
  })
}