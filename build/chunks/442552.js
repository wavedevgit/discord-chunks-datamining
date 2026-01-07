/** Chunk was on web.js **/
/** chunk id: 442552, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk607070 = require("./607070.js"),
  Chunk451478 = require("./451478.js");

function s() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0],
    [t, n] = r.useState(false),
    s = (0, i.e7)([a.Z], () => a.Z.useReducedMotion),
    l = (0, i.e7)([o.Z], () => o.Z.isFocused()),
    c = !s && !e,
    u = l && (t || c);
  return {
    shouldAnimate: u,
    onMouseEnter: r.useCallback(() => n(true), []),
    onMouseLeave: r.useCallback(() => n(false), [])
  }
}