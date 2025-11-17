/** Chunk was on web.js **/
/** chunk id: 369171, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => f,
  lx: () => u
});
var Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk607070 = require("./607070.js"),
  Chunk212459 = require("./212459.js"),
  Chunk172188 = require("./172188.js"),
  u = function(e) {
    return e.DEFAULT = "DEFAULT", e.FOCUS_SENSITIVE = "FOCUS_SENSITIVE", e.PINNED = "PINNED", e
  }({});

function d(e) {
  let {
    children: t,
    mode: n = "DEFAULT"
  } = e, {
    zoomed: r
  } = (0, l.Y)(), i = (0, o.e7)([s.Z], () => s.Z.keyboardModeEnabled);
  return t(a()(c.base, {
    [c.hidden]: r && !i && "PINNED" !== n,
    [c.focusSensitive]: "FOCUS_SENSITIVE" === n
  }))
}
let f = Chunk473749.memo(d)