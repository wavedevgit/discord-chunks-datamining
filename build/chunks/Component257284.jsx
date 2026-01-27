/** Chunk was on 2292 **/
/** chunk id: 257284, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk736653 = require("./736653.js"),
  Chunk97352 = require("./97352.js"),
  Chunk927578 = require("./927578.js"),
  Chunk788868 = require("./788868.js"),
  Chunk696389 = require("./696389.js");
let m = function(e) {
  let {
    isGift: t = false,
    priceOptions: r
  } = e, m = (0, i.bG)([o.A], () => o.A.get(u.gD.PREMIUM_GROUP_MONTH)), p = (0, l.qB)((0, s.Ay)());
  if (null == m) return (0, n.jsx)(a.y$y, {
    type: a.y$y.Type.PULSING_ELLIPSIS,
    className: d.xB
  });
  let g = (0, c.sS)(m, r, false, t),
    x = u.WT.MONTH;
  return (0, n.jsxs)("div", {
    children: [(0, n.jsx)(a.Text, {
      variant: "heading-xxl/extrabold",
      color: p ? "text-strong" : "always-white",
      tag: "span",
      children: g
    }), (0, n.jsxs)(a.Text, {
      variant: "text-xs/medium",
      tag: "span",
      color: "text-muted",
      children: ["/", (0, c.FJ)(x)]
    })]
  })
}