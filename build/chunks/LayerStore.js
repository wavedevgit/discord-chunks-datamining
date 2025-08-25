/** Chunk was on web.js **/
/** chunk id: 819640, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = [];

function l(e) {
  let {
    component: t
  } = e;
  if (s.indexOf(t) >= 0) returnfalse;
  s = [...s, t]
}

function c() {
  if (0 === s.length) returnfalse;
  s = s.slice(0, false)
}

function u() {
  s = []
}
class d extends(r = Chunk442837.ZP.Store) {
  hasLayers() {
    return s.length > 0
  }
  getLayers() {
    return s
  }
}
a(d, "displayName", "LayerStore");
let f = new d(Chunk570140.Z, {
  LAYER_PUSH: l,
  LAYER_POP: c,
  LAYER_POP_ALL: u,
  LOGOUT: u,
  NOTIFICATION_CLICK: u
})