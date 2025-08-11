/** Chunk was on 77942 **/
/** chunk id: 411477, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk436774 = require("./436774.jsx"),
  Chunk237844 = require("./237844.js");

function s(t) {
  let {
    text: e,
    className: n,
    button: r,
    reducedRightPadding: s = false
  } = t;
  return (0, o.jsxs)("div", {
    className: i()(s ? c.noticeWithoutRightPadding : c.noticeWithRightPadding, n),
    children: [(0, o.jsxs)("div", {
      className: c.noticeLeft,
      children: [(0, o.jsx)(a.SrA, {
        size: "md",
        className: c.icon,
        color: l.JX.PREMIUM_TIER_2
      }), (0, o.jsx)(a.Text, {
        className: c.text,
        variant: "text-md/normal",
        color: "header-primary",
        children: e
      })]
    }), r]
  })
}