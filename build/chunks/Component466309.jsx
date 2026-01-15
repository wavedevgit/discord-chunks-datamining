/** Chunk was on web.js **/
/** chunk id: 466309, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk509545 = require("./509545.js"),
  Chunk74538 = require("./74538.js"),
  Chunk474936 = require("./474936.js"),
  Chunk283102 = require("./283102.js");
let f = function(e) {
  let {
    isGift: t = false,
    priceOptions: n
  } = e, f = (0, i.e7)([l.Z], () => l.Z.get(u.Xh.PREMIUM_GROUP_MONTH)), p = (0, a.ap)((0, s.ZP)());
  if (null == f) return (0, r.jsx)(o.$jN, {
    type: o.$jN.Type.PULSING_ELLIPSIS,
    className: d.priceSpinner
  });
  let _ = (0, c.gy)(f, n, false, t),
    h = u.rV.MONTH,
    m = p ? "text-strong" : "always-white";
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(o.Text, {
      variant: "heading-xxl/extrabold",
      color: m,
      tag: "span",
      children: _
    }), (0, r.jsxs)(o.Text, {
      variant: "text-xs/medium",
      tag: "span",
      color: "text-muted",
      children: ["/", (0, c.eP)(h)]
    })]
  })
}