/** Chunk was on 72891 **/
/** chunk id: 411477, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
    className: o()(s ? c.noticeWithoutRightPadding : c.noticeWithRightPadding, n),
    children: [(0, i.jsxs)("div", {
      className: c.noticeLeft,
      children: [(0, i.jsx)(r.SrA, {
        size: "md",
        className: c.icon,
        color: l.JX.PREMIUM_TIER_2
      }), (0, i.jsx)(r.Text, {
        className: c.text,
        variant: "text-md/normal",
        color: "text-strong",
        children: t
      })]
    }), a]
  })
}