/** Chunk was on web.js **/
/** chunk id: 24933, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
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

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      a(e, t, n[t])
    })
  }
  return e
}

function l() {
  return {
    usageByApplicationId: {},
    shelfOrder: []
  }
}
let c = l();

function u() {
  c = l()
}
class d extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    c = s({}, l(), null != e ? e : {})
  }
  getState() {
    return c
  }
}
a(d, "displayName", "ActivityShelfStore"), a(d, "persistKey", "ActivityShelfStore");
let f = new d(Chunk570140.Z, {
  LOGOUT: u
})