/** Chunk was on web.js **/
/** chunk id: 111628, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = new Set;

function l(e) {
  let {
    enabled: t,
    mode: n
  } = e;
  return t ? s.add(n) : s.delete(n), s = new Set(s), true
}

function c(e) {
  let {
    renderDebugModes: t
  } = e;
  s = new Set(t)
}
class u extends(r = Chunk442837.ZP.Store) {
  hasRenderDebugMode(e) {
    return s.has(e)
  }
  getRenderDebugModes() {
    return s
  }
}
o(u, "displayName", "OverlayDevtoolsStore");
let d = new u(Chunk570140.Z, {
  OVERLAY_RENDER_DEBUG_MODE: l,
  OVERLAY_INITIALIZE: c
})