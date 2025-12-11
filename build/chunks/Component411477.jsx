/** Chunk was on 76543 **/
/** chunk id: 411477, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk436774 = require("./436774.jsx"),
  Chunk991150 = require("./991150.js");

function s(e) {
  let {
    text: t,
    className: n,
    button: o,
    reducedRightPadding: s = false
  } = e;
  return (0, i.jsxs)("div", {
    className: r()(s ? c.noticeWithoutRightPadding : c.noticeWithRightPadding, n),
    children: [(0, i.jsxs)("div", {
      className: c.noticeLeft,
      children: [(0, i.jsx)(a.SrA, {
        size: "md",
        className: c.icon,
        color: l.JX.PREMIUM_TIER_2
      }), (0, i.jsx)(a.Text, {
        className: c.text,
        variant: "text-md/normal",
        color: "header-primary",
        children: t
      })]
    }), o]
  })
}