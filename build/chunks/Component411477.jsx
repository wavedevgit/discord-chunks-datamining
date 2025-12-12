/** Chunk was on 76543 **/
/** chunk id: 411477, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk436774 = require("./436774.jsx"),
  Chunk991150 = require("./991150.js");

function c(e) {
  let {
    text: t,
    className: n,
    button: i,
    reducedRightPadding: c = false
  } = e;
  return (0, o.jsxs)("div", {
    className: r()(c ? s.noticeWithoutRightPadding : s.noticeWithRightPadding, n),
    children: [(0, o.jsxs)("div", {
      className: s.noticeLeft,
      children: [(0, o.jsx)(a.SrA, {
        size: "md",
        className: s.icon,
        color: l.JX.PREMIUM_TIER_2
      }), (0, o.jsx)(a.Text, {
        className: s.text,
        variant: "text-md/normal",
        color: "text-strong",
        children: t
      })]
    }), i]
  })
}