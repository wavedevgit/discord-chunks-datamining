/** Chunk was on web.js **/
/** chunk id: 442552, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk607070 = require("./607070.js"),
  Chunk451478 = require("./451478.js");

function s() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0],
    [t, n] = Chunk73800.useState(false),
    s = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion),
    l = (0, Chunk442837.e7)([Chunk451478.Z], () => Chunk451478.Z.isFocused()),
    c = !s && !module,
    u = l && (exports || c);
  return {
    shouldAnimate: u,
    onMouseEnter: Chunk73800.useCallback(() => require(true), []),
    onMouseLeave: Chunk73800.useCallback(() => require(false), [])
  }
}