/** Chunk was on web.js **/
/** chunk id: 45837, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk775602 = require("./775602.js"),
  Chunk531685 = require("./531685.js");

function s() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0],
    [t, n] = r.useState(false),
    s = (0, i.bG)([a.A], () => a.A.useReducedMotion),
    l = (0, i.bG)([o.A], () => o.A.isFocused()),
    c = !s && !e,
    u = l && (t || c);
  return {
    shouldAnimate: u,
    onMouseEnter: r.useCallback(() => n(true), []),
    onMouseLeave: r.useCallback(() => n(false), [])
  }
}