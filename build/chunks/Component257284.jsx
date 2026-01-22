/** Chunk was on web.js **/
/** chunk id: 257284, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
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
let f = function(e) {
  let {
    isGift: t = false,
    priceOptions: n
  } = e, f = (0, i.bG)([l.A], () => l.A.get(u.gD.PREMIUM_GROUP_MONTH)), p = (0, a.qB)((0, o.Ay)());
  if (null == f) return (0, r.jsx)(s.y$y, {
    type: s.y$y.Type.PULSING_ELLIPSIS,
    className: d.xB
  });
  let _ = (0, c.sS)(f, n, false, t),
    h = u.WT.MONTH,
    m = p ? "text-strong" : "always-white";
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(s.Text, {
      variant: "heading-xxl/extrabold",
      color: m,
      tag: "span",
      children: _
    }), (0, r.jsxs)(s.Text, {
      variant: "text-xs/medium",
      tag: "span",
      color: "text-muted",
      children: ["/", (0, c.FJ)(h)]
    })]
  })
}