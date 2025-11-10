/** Chunk was on web.js **/
/** chunk id: 482215, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => d,
  i: () => u
});
var Chunk951288 = require("./951288.js"),
  Chunk191336 = require("./191336.js"),
  Chunk442837 = require("./442837.js"),
  Chunk857192 = require("./857192.js"),
  Chunk483760 = require("./483760.js");
let l = 4,
  c = 64,
  u = (0, Chunk191336.U)(e => ({
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
  let e = (0, Chunk442837.e7)([Chunk857192.default], () => Chunk857192.default.layoutDebuggingEnabled),
    {
      horizontalSpacing: t,
      verticalSpacing: n
    } = u();
  return module ? (0, Chunk951288.jsx)("div", {
    className: Chunk483760.container,
    children: (0, Chunk951288.jsx)("div", {
      className: Chunk483760.gridOverlay,
      "data-horizontal": exports > 0,
      "data-vertical": require > 0,
      style: {
        "--custom-grid-horizontal-spacing": "".concat(exports, "px"),
        "--custom-grid-vertical-spacing": "".concat(require, "px")
      }
    })
  }) : null
}