/** Chunk was on web.js **/
/** chunk id: 186111, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let o = [];

function l(e) {
  let {
    component: t
  } = e;
  if (o.indexOf(t) >= 0) returnfalse;
  o = [...o, t]
}

function c() {
  if (0 === o.length) returnfalse;
  o = o.slice(0, false)
}

function u() {
  o = []
}
class d extends(r = Chunk311907.Ay.Store) {
  hasLayers() {
    return o.length > 0
  }
  getLayers() {
    return o
  }
}
s(d, "displayName", "LayerStore");
let f = new d(Chunk73153.h, {
  LAYER_PUSH: l,
  LAYER_POP: c,
  LAYER_POP_ALL: u,
  LOGOUT: u,
  NOTIFICATION_CLICK: u
})