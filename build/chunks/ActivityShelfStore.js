/** Chunk was on web.js **/
/** chunk id: 918052, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
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

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      o(e, t, n[t])
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
class d extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    c = s({}, l(), null != e ? e : {})
  }
  getState() {
    return c
  }
}
o(d, "displayName", "ActivityShelfStore"), o(d, "persistKey", "ActivityShelfStore");
let f = new d(Chunk73153.h, {
  LOGOUT: u
})