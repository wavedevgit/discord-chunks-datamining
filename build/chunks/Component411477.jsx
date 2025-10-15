/** Chunk was on 72891 **/
/** chunk id: 411477, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk436774 = require("./436774.jsx"),
  Chunk279798 = require("./279798.js");

function s(e) {
  let {
    text: t,
    className: n,
    button: a,
    reducedRightPadding: s = false
  } = e;
  return (0, i.jsxs)("div", {
    className: o()(s ? l.noticeWithoutRightPadding : l.noticeWithRightPadding, n),
    children: [(0, i.jsxs)("div", {
      className: l.noticeLeft,
      children: [(0, i.jsx)(r.SrA, {
        size: "md",
        className: l.icon,
        color: c.JX.PREMIUM_TIER_2
      }), (0, i.jsx)(r.Text, {
        className: l.text,
        variant: "text-md/normal",
        color: "header-primary",
        children: t
      })]
    }), a]
  })
}