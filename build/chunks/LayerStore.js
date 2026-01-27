/** Chunk was on web.js **/
/** chunk id: 186111, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

function o(e, t, n) {
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
class d extends(r = Chunk311907.Ay.Store) {
  hasLayers() {
    return s.length > 0
  }
  getLayers() {
    return s
  }
}
o(d, "displayName", "LayerStore");
let f = new d(Chunk73153.h, {
  LAYER_PUSH: l,
  LAYER_POP: c,
  LAYER_POP_ALL: u,
  LOGOUT: u,
  NOTIFICATION_CLICK: u
})