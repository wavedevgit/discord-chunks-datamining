/** Chunk was on web.js **/
/** chunk id: 358731, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => f,
  nY: () => u
});
var Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk775602 = require("./775602.js"),
  Chunk454290 = require("./454290.js"),
  Chunk498003 = require("./498003.js"),
  u = function(e) {
    return e.DEFAULT = "DEFAULT", e.FOCUS_SENSITIVE = "FOCUS_SENSITIVE", e.PINNED = "PINNED", e
  }({});

function d(e) {
  let {
    children: t,
    mode: n = "DEFAULT"
  } = e, {
    zoomed: r
  } = (0, l.Q)(), i = (0, o.bG)([s.A], () => s.A.keyboardModeEnabled);
  return t(a()(c.E3, {
    [c.R]: r && !i && "PINNED" !== n,
    [c.rB]: "FOCUS_SENSITIVE" === n
  }))
}
let f = Chunk64700.memo(d)