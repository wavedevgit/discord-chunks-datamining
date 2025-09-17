/** Chunk was on web.js **/
/** chunk id: 775195, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk211644 = require("./211644.js"),
  Chunk699867 = require("./699867.jsx"),
  Chunk10198 = require("./10198.js");

function c(e) {
  let {
    searchQuery: t = ""
  } = e, n = (0, o.ZP)(e => e.recentlyShown).map(e => i.z[e]).filter(e => e.toLowerCase().includes(t.toLowerCase()));
  return 0 === n.length ? null : (0, r.jsxs)("div", {
    className: l.marginBottom8,
    children: [(0, r.jsx)(a.vwX, {
      tag: a.RB0.H2,
      children: "Recently Shown"
    }), (0, r.jsx)(s.Z, {
      items: n
    })]
  })
}