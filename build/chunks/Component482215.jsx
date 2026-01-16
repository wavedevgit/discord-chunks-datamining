/** Chunk was on web.js **/
/** chunk id: 482215, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => d,
  i: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk121168 = require("./121168.js"),
  Chunk442837 = require("./442837.js"),
  Chunk857192 = require("./857192.js"),
  Chunk102032 = require("./102032.js");
let l = 4,
  c = 64,
  u = (0, Chunk121168.U)(e => ({
    horizontalSpacing: l,
    verticalSpacing: l,
    maxHorizontalSpacing: c,
    maxVerticalSpacing: c,
    setHorizontalSpacing: t => {
      e({
        horizontalSpacing: Math.round(Math.min(Math.max(t, 0), c))
      })
    },
    setVerticalSpacing: t => {
      e({
        verticalSpacing: Math.round(Math.min(Math.max(t, 0), c))
      })
    }
  }));

function d() {
  let e = (0, a.e7)([o.default], () => o.default.layoutDebuggingEnabled),
    {
      horizontalSpacing: t,
      verticalSpacing: n
    } = u();
  return e ? (0, r.jsx)("div", {
    className: s.container,
    children: (0, r.jsx)("div", {
      className: s.gridOverlay,
      "data-horizontal": t > 0,
      "data-vertical": n > 0,
      style: {
        "--custom-grid-horizontal-spacing": "".concat(t, "px"),
        "--custom-grid-vertical-spacing": "".concat(n, "px")
      }
    })
  }) : null
}