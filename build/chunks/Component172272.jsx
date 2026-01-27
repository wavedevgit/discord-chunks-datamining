/** Chunk was on web.js **/
/** chunk id: 172272, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C1: () => d,
  Or: () => u,
  YR: () => c
});
var Chunk627968 = require("./627968.js"),
  Chunk353640 = require("./353640.js"),
  Chunk311907 = require("./311907.js"),
  Chunk111162 = require("./111162.js"),
  Chunk355001 = require("./355001.js");
let l = 4,
  c = 64,
  u = (0, Chunk353640.v)(e => ({
    horizontalSpacing: l,
    verticalSpacing: l,
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
  let e = (0, a.bG)([o.default], () => o.default.layoutDebuggingEnabled),
    {
      horizontalSpacing: t,
      verticalSpacing: n
    } = u();
  return e ? (0, r.jsx)("div", {
    className: s.k,
    children: (0, r.jsx)("div", {
      className: s.Z,
      "data-horizontal": t > 0,
      "data-vertical": n > 0,
      style: {
        "--custom-grid-horizontal-spacing": "".concat(t, "px"),
        "--custom-grid-vertical-spacing": "".concat(n, "px")
      }
    })
  }) : null
}